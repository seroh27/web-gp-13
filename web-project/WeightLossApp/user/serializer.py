from rest_framework import serializers
from user.models import User, Meal


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'user_fname', 'user_lname',
                  'user_age', 'user_height_cm', 'user_weight_kg', 'user_activity_level']


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['meal_user', 'meal_food', 'meal_type','meal_amount','date_eaten']

class RegisterationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style ={'input_type':'password'},write_only = True)

    class Meta:
        model = User
        fields = ['user_id', 'user_fname', 'user_lname',
                  'user_age', 'user_height_cm', 'user_weight_kg', 'user_activity_level','password','password2']
        extra_kwargs = {
            'password' : {'write_only' : True}
        }
    def save(self):
        user = User(user_id = self.validated_data['user_id'],
                    user_fname = self.validated_data['user_fname'],
                    user_lname = self.validated_data['user_lname'],
                    user_age = self.validated_data['user_age'],
                    user_height_cm = self.validated_data['user_height_cm'],
                    user_weight_kg = self.validated_data['user_weight_kg'],
                    user_activity_level = self.validated_data['user_activity_level'])
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if(password != password2):
            raise serializers.ValidationError({'password':'Passwords must match.'})
        user.set_password(password)
        user.save()
        return user