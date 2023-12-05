from django.shortcuts import render
from django.http import  JsonResponse
from control.models import Food
from .serializer import FoodSerializer
def food_list(request):
    foods = Food.objects.all()
    food_serializer = FoodSerializer(foods,many = True)
    return JsonResponse({"foodlist",food_serializer.data})
# Create your views here.
