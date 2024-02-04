from django.shortcuts import render
from django.http import JsonResponse
from control.models import Food
from .serializer import FoodSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from user.models import User
from user.serializer import UserSerializer
from rest_framework.authtoken.models import Token

@api_view(['GET', 'POST'])
def food_list(request, format=None):
    if request.method == 'GET':
        foods = Food.objects.all()
        food_serializer = FoodSerializer(foods, many=True)
        return Response(food_serializer.data)
    token = request.data['Authorization']
    token_obj = Token.objects.get(key=token)
    user = token_obj.user
    if(user.is_admin):
        if request.method == 'POST':
            serializer = FoodSerializer(data=request.data, many=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
    else:
        return Response({'error': 'you are not an admin'}, status=status.HTTP_403_FORBIDDEN)

@api_view(['GET', 'PUT', 'DELETE'])
def food_detail(request, id, format=None):
    token = request.data['Authorization']
    token_obj = Token.objects.get(key=token)
    user = token_obj.user
    if(user.is_admin):
        try:
            food = Food.objects.get(pk=id)
        except Food.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        if request.method == 'GET':
            serializer = FoodSerializer(food)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = FoodSerializer(food, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            food.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response({'error': 'you are not an admin'}, status=status.HTTP_403_FORBIDDEN)

@api_view(['GET', 'POST'])
def user_list(request):
    token = request.data['Authorization']
    token_obj = Token.objects.get(key=token)
    user = token_obj.user
    if(user.is_admin):

        if request.method == 'GET':
            users = User.objects.all()
            user_serializer = UserSerializer(users, many=True)
            return Response(user_serializer.data)
        if request.method == 'POST':
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_409_CONFLICT)
        return
    else:
        return Response({'error': 'you are not an admin'}, status=status.HTTP_403_FORBIDDEN)



