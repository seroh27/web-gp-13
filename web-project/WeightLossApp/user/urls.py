from django.urls import include,path
from user import views
urlpatterns = [
    path('userlist/', views.user_list),
    path('meallist/', views.meal_list)
]