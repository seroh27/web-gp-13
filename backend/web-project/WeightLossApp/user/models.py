from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from control.models import Food
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

activity = [('little or no exercise', '1'), ('light exercise', '2'), ('moderate exercise', '3'),
            ('hard exercise', '4'), ('very hard exercise', '5')]
meals = [('breakfast', 'breakfast'), ('lunch', 'lunch'), ('dinner', 'dinner'), ('snack', 'snack')]


def two_places_decimal(x: float):
    return round(x, 2)


class CustomUserManager(BaseUserManager):
    def create_user(self, user_id, password=None):
        if not user_id:
            raise ValueError('The user ID must be set')

        user = self.model( user_id=user_id,)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, user_id, password):
        user = self.create_user(
            user_id=user_id,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    user_id = models.CharField(max_length=10, unique=True)
    first_name = models.CharField(max_length=15,null=True, blank=True)
    last_name = models.CharField(max_length=15,null=True, blank=True)
    age = models.SmallIntegerField(validators=[MinValueValidator(12), MaxValueValidator(100)],null=True, blank=True)
    height = models.SmallIntegerField(validators=[MinValueValidator(120), MaxValueValidator(250)],null=True, blank=True)
    weight = models.FloatField(validators=[MinValueValidator(30), MaxValueValidator(150)],null=True, blank=True)
    activity_level = models.CharField(max_length=30,default=activity[1], choices=activity,null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = 'user_id'
    REQUIRED_FIELDS = []
    def __str__(self):
        return self.user_id
    def has_perm(self, perm, obj=None):
        return True
    def has_module_perms(self, app_label):
        return True
    @property
    def is_staff(self):
        return self.is_admin

class Meal(models.Model):  # TODO fix primary key
    meal_user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    meal_food = models.ForeignKey(to=Food, on_delete=models.CASCADE)
    meal_type = models.CharField(max_length=30, choices=meals)
    meal_amount = models.FloatField(validators=[two_places_decimal])
    date_eaten = models.DateField()
@receiver(post_save,sender =  settings.AUTH_USER_MODEL)
def create_auth_token(sender,instance=None,created=False,**kwargs):
    if(created):
        Token.objects.create(user = instance)