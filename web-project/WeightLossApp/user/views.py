from user.models import Meal
from .serializer import MealSerializer, UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def meal_list(request):
    if request.method == 'GET':
        meals = Meal.objects.all()
        meal_serializer = MealSerializer(meals, many=True)
        return Response(meal_serializer.data)
    if request.method == 'POST':
        serializer = MealSerializer(data=request.data)
        already_exists = Meal.objects.filter(meal_user=request.data[0]['meal_user'],
                                             meal_food=request.data[0]['meal_food'],
                                             meal_type=request.data[0]['meal_type'])
        if not already_exists:
            if serializer.is_valid():
                serializer.save()
                return Response('added', status=status.HTTP_201_CREATED)
        already_exists[0].meal_amount += float(request.data[0]['meal_amount'])
        already_exists[0].save()
        return Response('modified', status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def meal_user_list(request, meal_user, food, meal_type):
    try:
        meal = Meal.objects.filter(meal_user=meal_user, meal_food=food, meal_type=meal_type)
    except Meal.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = MealSerializer(meal, many=True)
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
