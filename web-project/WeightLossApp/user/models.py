from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from control.models import Food

# Create your models here.

activity = [('little or no exercise', '1'), ('light exercise', '2'), ('moderate exercise', '3'),
            ('hard exercise', '4'), ('very hard exercise', '5')]
meals = [('breakfast', 'breakfast'), ('lunch', 'lunch'), ('dinner', 'dinner'), ('snack', 'snack')]


def two_places_decimal(x: float):
    return round(x, 2)


class User(models.Model):
    user_id = models.CharField(max_length=10, primary_key=True)
    user_fname = models.CharField(max_length=15)
    user_lname = models.CharField(max_length=15)
    user_age = models.SmallIntegerField(validators=[MinValueValidator(12), MaxValueValidator(100)])
    user_height_cm = models.SmallIntegerField(validators=[MinValueValidator(120), MaxValueValidator(250)])
    user_weight_kg = models.FloatField(validators=[MinValueValidator(30), MaxValueValidator(150), two_places_decimal])
    user_activity_level = models.CharField(max_length=30, default=activity[1], choices=activity)


class Meal(models.Model):  # TODO fix primary key
    meal_user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    meal_food = models.ForeignKey(to=Food, on_delete=models.CASCADE)
    meal_type = models.CharField(max_length=30, choices=meals)
    meal_amount = models.FloatField(validators=[two_places_decimal])
    date_eaten = models.DateField()
