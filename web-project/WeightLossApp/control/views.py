from django.shortcuts import render
from django.http import  JsonResponse
from control.models import Food
from .serializer import FoodSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
@api_view(['GET','POST'])
def food_list(request):
    if(request.method == 'GET'):
        foods = Food.objects.all()
        food_serializer = FoodSerializer(foods,many = True)
        return JsonResponse({"foodlist":food_serializer.data})
    if (request.method == 'POST'):
        serializer = FoodSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
# Create your views here.
