from django.db import models

# Create your models here.


class Food(models.Model):
    food_name = models.CharField(primary_key=True)
    food_calorie_per_hundred_gr = models.IntegerField()
    food_protein_per_hundred_gr = models.IntegerField()
    food_carb_per_hundred_gr = models.IntegerField()
    food_fat_per_hundred_gr = models.IntegerField()
