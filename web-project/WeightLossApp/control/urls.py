from django.urls import include,path
from control import views
urlpatterns = [
    path('foods/', views.food_list)
]