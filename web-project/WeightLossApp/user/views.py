from django.shortcuts import render
from django.http import  JsonResponse
from user.models import User,Meal
from .serializer import MealSerializer,UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
@api_view(['GET','POST'])
def user_list(request,format = None):
    if(request.method == 'GET'):
        users = User.objects.all()
        user_serializer = UserSerializer(users,many = True)
        return Response(user_serializer.data)
    if (request.method == 'POST'):
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        else:
            return Response(status = status.HTTP_409_CONFLICT)
    return

@api_view(['GET', 'PUT','DELETE'])
def user_detail(request,id,format = None):
    try:
        user = User.objects.get(pk = id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if (request.method == 'GET'):
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif (request.method == 'PUT'):
        serializer = UserSerializer(user,data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif (request.method == 'DELETE'):
        user.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
@api_view(['GET','POST'])
def meal_list(request,format = None):
    if(request.method == 'GET'):
        meals = Meal.objects.all()
        meal_serializer = MealSerializer(meals,many = True)
        return Response(meal_serializer.data)
    if (request.method == 'POST'):
        serializer = MealSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
    return
@api_view(['GET', 'PUT','DELETE'])
def meal_user_list(request,id,food,type,format = None):
    try:
        meals = Meal.objects.filter(meal_user=id,meal_food = food,meal_type = type)
    except Meal.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if (request.method == 'GET'):
        serializer = MealSerializer(meals,many = True)
        return Response(serializer.data)
    elif (request.method == 'PUT'):
        serializer = MealSerializer(meals,data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif (request.method == 'DELETE'):
        meals.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

