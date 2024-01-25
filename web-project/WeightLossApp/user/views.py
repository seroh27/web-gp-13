from user.models import Meal
from .serializer import MealSerializer, UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime


@api_view(['GET', 'POST'])
def meal_list(request):
    if request.method == 'GET':
        meals = Meal.objects.all()
        meal_serializer = MealSerializer(meals, many=True)
        return Response(meal_serializer.data)
    if request.method == 'POST':
        serializer = MealSerializer(data=request.data)
        already_exists = Meal.objects.filter(meal_user=request.data['meal_user'],
                                             meal_food=request.data['meal_food'],
                                             meal_type=request.data['meal_type'],
                                             date_eaten=request.data['date_eaten'])
        if not already_exists:
            if serializer.is_valid():
                serializer.save()
                return Response('added', status=status.HTTP_201_CREATED)
        already_exists[0].meal_amount += float(request.data['meal_amount'])
        already_exists[0].save()
        return Response('modified', status=status.HTTP_201_CREATED)


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
