from rest_framework import serializers
from control.models import Food
class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['food_name','food_calorie_per_hundred_gr','food_protein_per_hundred_gr','food_carb_per_hundred_gr','food_fat_per_hundred_gr']