from django.shortcuts import render
from django.http import  JsonResponse
from user.models import User,Meal
from .serializer import UserSerializer,MealSerializer
def user_list(request):
    users = User.objects.all()
    user_serializer = UserSerializer(users,many = True)
    return JsonResponse(user_serializer.data,safe = False)
def meal_list(request):
    meals = Meal.objects.all()
    meal_serializer = MealSerializer(meals,many = True)
    return JsonResponse(meal_serializer.data,safe = False)
# Create your views here.
