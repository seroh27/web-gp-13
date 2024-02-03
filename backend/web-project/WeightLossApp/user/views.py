from user.models import Meal, User
from .serializer import MealSerializer
from rest_framework.decorators import api_view
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
@api_view(['GET', 'POST'])
def meal_list(request):
    if request.method == 'GET':
        print('-------------', request.headers['Authorization'], '---------------')
        meals = Meal.objects.filter(meal_user_id=Token.objects.get(key=request.headers['Authorization']).user.id)
        meal_serializer = MealSerializer(meals, many=True)
        respone = []
        for data in meal_serializer.data:
            if str(data['date_eaten'][:10]) != str(datetime.today().date()):
                continue
            food = Food.objects.get(food_name=data['meal_food'])
            respone.append({
                'name': data['meal_food'],
                'weight': data['meal_amount'],
                'meal': 'صبحانه' if data['meal_type'] == 'breakfast' else 'نهار' if data['meal_type'] == 'lunch' else 'شام' if data['meal_type'] == 'dinner' else 'میان‌وعده',
                'calorie': data['meal_amount'] * food.food_calorie_per_hundred_gr,
                'carb': data['meal_amount'] * food.food_carb_per_hundred_gr,
                'fat': data['meal_amount'] * food.food_fat_per_hundred_gr,
                'protein': data['meal_amount'] * food.food_protein_per_hundred_gr,
            })
        return Response(respone)
    if request.method == 'POST':
        token = request.data['token']
        try:
            token = Token.objects.get(key=token)
        except:
            return Response('invalid token')
        data = copy.deepcopy(request.data)
        data['meal_user'] = token.user.id
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
                return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        already_exists[0].meal_amount += float(request.data['meal_amount'])
        already_exists[0].save()
        return Response('modified', status=status.HTTP_201_CREATED)

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
@api_view(['GET', 'PUT', 'DELETE'])
def meal_user_list(request, id, food, type,date):
    try:
        date_object = datetime.strptime(date, '%Y-%m-%d').date()
        meal = Meal.objects.filter(meal_user=id, meal_food=food, meal_type= type, date_eaten=date_object).first()
    except Meal.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = MealSerializer(meal)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MealSerializer(meal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        meal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET'])
def get_calories_consumed(request):
    if request.method == 'GET':
        try:
            body_unicode = request.body.decode('utf-8')
            body_data = json.loads(body_unicode)
            user_id = body_data.get('user_id')
            date = body_data.get('date')
            print(user_id)
            print(date)
            if user_id is None or date is None:
                return Response({'error': 'user_id and date must be provided in the request body'}, status=status.HTTP_400_BAD_REQUEST)
            date_object = datetime.strptime(date, '%Y-%m-%d').date()
            user = User.objects.get(user_id=user_id)
            meals_on_date = Meal.objects.filter(meal_user=user, date_eaten=date_object)
            serializer = MealSerializer(meals_on_date, many=True)
            serialized_data = serializer.data
            sum_calories = 0
            for meal in serialized_data:
                food_instance = get_object_or_404(Food, food_name=meal["meal_food"])
                sum_calories += food_instance.food_calorie_per_hundred_gr * meal["meal_amount"] / 100
            if sum_calories is None:
                sum_calories = 0
            response_data = {
                'user_id': user_id,
                'date': date,
                'total_calories_consumed': sum_calories,
                'meals': serializer.data
            }
            return Response(response_data, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({'error': 'Invalid date format. Please use YYYY-MM-DD'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response({'error': 'This endpoint only supports GET requests'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def calculate_maintenance_calories(request):
    if request.method == 'GET':
        try:
            body_unicode = request.body.decode('utf-8')
            body_data = json.loads(body_unicode)
            user_id = body_data.get('user_id')
            user = get_object_or_404(User, user_id=user_id)
            print(user.weight)
            print(user.height)
            print(user.gender)
            print(user.age)
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
            maintenance_calories = int(bmr * activity_level)
            data = {'maintenance_calories': maintenance_calories}
            return Response(data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except KeyError:
            return Response({'error': 'Missing user_id in query parameters'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'This endpoint only supports GET requests'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    

@api_view(['GET'])
def today_cal(request):
    if request.method == 'GET':
        consumed_cal = 0
        total_cal = 2000
        meals = Meal.objects.filter(meal_user_id=Token.objects.get(key=request.headers['Authorization']).user.id)
        meal_serializer = MealSerializer(meals, many=True)
        for data in meal_serializer.data:
            if str(data['date_eaten'][:10]) != str(datetime.today().date()):
                continue
            consumed_cal += Food.objects.get(food_name=data['meal_food']).food_calorie_per_hundred_gr * data.meal_amount / 100
        respone = {
            'consumedCal': consumed_cal,
            'totalCal': total_cal,
            'remainingCal': total_cal - consumed_cal
        }
        return Response(respone, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'This endpoint only supports GET requests'}, status=status.HTTP_400_BAD_REQUEST)
