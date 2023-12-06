from django.shortcuts import render
from django.http import  JsonResponse
from control.models import Food
from .serializer import FoodSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
@api_view(['GET','POST'])
def food_list(request,format = None):
    if(request.method == 'GET'):
        foods = Food.objects.all()
        food_serializer = FoodSerializer(foods,many = True)
        return Response(food_serializer.data)
    if (request.method == 'POST'):
        serializer = FoodSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
    return

@api_view(['GET', 'PUT','DELETE'])
def food_detail(request,id,format = None):
    try:
        food = Food.objects.get(pk = id)
    except Food.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if (request.method == 'GET'):
        serializer = FoodSerializer(food)
        return Response(serializer.data)
    elif (request.method == 'PUT'):
        serializer = FoodSerializer(food,data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif (request.method == 'DELETE'):
        food.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

