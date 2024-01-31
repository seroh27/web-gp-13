from django.contrib import admin

# Register your models here.
from user.models import User
from user.models import Meal

admin.site.register(User)
admin.site.register(Meal)