from user.models import Meal, User
from .serializer import MealSerializer
from rest_framework.decorators import api_view ,permission_classes
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from user.serializer import RegisterationSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, authenticate
import json
from django.db.models import Sum
from django.db.models import F
from django.shortcuts import get_object_or_404
from control.models import Food
import copy
from user.models import User
from user.serializer import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

def get_meals(request):
    meals = Meal.objects.filter(meal_user_id=Token.objects.get(key=request.headers['Authorization']).user.id)
    meal_serializer = MealSerializer(meals, many=True)
    response = []
    for data in meal_serializer.data:
        if str(data['date_eaten'][:10]) != str(datetime.today().date()):
            continue
        food = Food.objects.get(food_name=data['meal_food'])
        response.append({
            'name': data['meal_food'],
            'weight': data['meal_amount'],
            'meal': 'صبحانه' if data['meal_type'] == 'breakfast' else 'نهار' if data['meal_type'] == 'lunch' else 'شام' if data['meal_type'] == 'dinner' else 'میان‌وعده',
            'calorie': data['meal_amount'] * food.food_calorie_per_hundred_gr / 100,
            'carb': data['meal_amount'] * food.food_carb_per_hundred_gr / 100,
            'fat': data['meal_amount'] * food.food_fat_per_hundred_gr / 100,
            'protein': data['meal_amount'] * food.food_protein_per_hundred_gr / 100,
        })
    return Response(response)


def post_meal(token, request, data):
    serializer = MealSerializer(data=data)
    already_exists = Meal.objects.filter(meal_user=token.user.id,
                                            meal_food=request.data['meal_food'],
                                            meal_type=request.data['meal_type'],
                                            date_eaten=request.data['date_eaten'])
    if not already_exists:
        if serializer.is_valid():
            serializer.save()
            return Response('added', status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    already_exists[0].meal_amount += float(request.data['meal_amount'])
    already_exists[0].save()
    return Response('modified', status=status.HTTP_201_CREATED)


def delete_meal(token, request):
    print(request.data)
    chosen_meal = Meal.objects.get(meal_user=token.user.id,
                                             meal_food=request.data['meal_food'],
                                             meal_type=request.data['meal_type'],
                                             date_eaten=request.data['date_eaten'][:10])
    if chosen_meal is None:
        return Response({'error': 'meal does not exist'}, status=status.HTTP_404_NOT_FOUND)
    chosen_meal.delete()
    return Response('deleted successfully', status=status.HTTP_200_OK)


@api_view(['GET', 'POST', 'DELETE'])
def meal_list(request):
    if request.method == 'GET':
        try:
            token = request.headers['Authorization']
            token_obj = Token.objects.get(key=token)
            user = token_obj.user
        except Token.DoesNotExist:
            return Response({'error': 'user with such a token does not exist'}, status=status.HTTP_403_FORBIDDEN)
        print('-------------', request.headers['Authorization'], '---------------')
        response = get_meals(request)
        return response
    print(request.data)
    token = request.data['token']
    try:
        token = Token.objects.get(key=token)
    except:
        return Response('invalid token')
    data = copy.deepcopy(request.data)
    data['meal_user'] = token.user.id
    if request.method == 'POST':
        response = post_meal(token, request, data)
        return response
    if request.method == 'DELETE':
        response = delete_meal(token=token, request=request)
        return response

@api_view(['POST'])
def login_view(request):
    user_id = request.data.get("user_id")
    password = request.data.get("password")
    print(user_id)
    print(password)
    user = authenticate(request, user_id=user_id, password=password)
    if user:
        response = {
            "token": Token.objects.get(user=user).key,
            "first_name": user.first_name,
        }
        return Response(response, status=200)
    return Response('incorrect email or password', status=400)

@api_view(['POST'])
def registration_view(request):
    print('ayo')
    if request.method == 'POST':
        print(request.data)
        serializer = RegisterationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "successfully registered a new user."
            token = Token.objects.get(user=user).key
            data['user_id'] = user.user_id
            data['token'] = token
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def today_cal(request):
    try:
        token = request.headers['Authorization']
        token_obj = Token.objects.get(key=token)
        user = token_obj.user
    except Token.DoesNotExist:
        return Response({'error': 'user with such a token does not exist'}, status=status.HTTP_403_FORBIDDEN)
    if request.method == 'GET':
        consumed_cal = 0
        total_cal = maintenance_calorie(Token.objects.get(key=request.headers['Authorization']).user)
        meals = Meal.objects.filter(meal_user_id=Token.objects.get(key=request.headers['Authorization']).user.id)
        meal_serializer = MealSerializer(meals, many=True)
        for data in meal_serializer.data:
            if str(data['date_eaten'][:10]) != str(datetime.today().date()):
                continue
            consumed_cal += Food.objects.get(food_name=data['meal_food']).food_calorie_per_hundred_gr * data['meal_amount'] / 100
        respone = {
            'consumedCal': round(consumed_cal, 2),
            'totalCal': round(total_cal, 2),
            'remainingCal': round(total_cal - consumed_cal, 2)
        }
        return Response(respone, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'This endpoint only supports GET requests'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def week_cal_report(request):
    try:
        token = request.headers['Authorization']
        token_obj = Token.objects.get(key=token)
        user = token_obj.user
    except Token.DoesNotExist:
        return Response({'error': 'user with such a token does not exist'}, status=status.HTTP_403_FORBIDDEN)
    if request.method == 'GET':
        print('ayo week cal rep')
        meals = Meal.objects.filter(meal_user_id=Token.objects.get(key=request.headers['Authorization']).user.id)
        meals_n_dates = [(meal.meal_food, meal.meal_amount, meal.date_eaten) for meal in meals]
        print(meals_n_dates[0])
        today = datetime.now().date()
        print(today)
        categorized_dates = {i: 0 for i in range(1, 8)}
        for meal_food, meal_amount, date_obj in meals_n_dates:
            days_difference = (today - date_obj).days
            if 1 <= days_difference <= 7:
                calorie = meal_food.food_calorie_per_hundred_gr * meal_amount / 100
                categorized_dates[days_difference] += calorie
        return Response(categorized_dates, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'This endpoint only supports GET requests'}, status=status.HTTP_400_BAD_REQUEST)
    
def maintenance_calorie(user):
    
    if user.gender == 'Male':
        bmr = 10 * user.weight + 6.25 * user.height - 5 * user.age + 5
    else:
        bmr = 10 * user.weight + 6.25 * user.height - 5 * user.age - 161
    activity_levels = {
        'little or no exercise': 1.2,
        'light exercise': 1.375,
        'moderate exercise': 1.55,
        'hard exercise': 1.725,
        'very hard exercise': 1.9
    }
    print(bmr)
    activity_level = activity_levels.get(user.activity_level, 1.2)
    return int(bmr * activity_level)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request):
    user = request.user
    try:
        token = request.data['token']
        token_obj = Token.objects.get(key=token)
        user = token_obj.user
    except Token.DoesNotExist:
        return Response({'error': 'user with such a token does not exist'}, status=status.HTTP_403_FORBIDDEN)
    
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)