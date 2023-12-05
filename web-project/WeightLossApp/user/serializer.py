from rest_framework import serializers
from user.models import User,Meal
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id','user_fname','user_lname',
                  'user_age','user_height_cm','user_weight_kg','user_activity_level']

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['meal_user', 'meal_food', 'meal_type']