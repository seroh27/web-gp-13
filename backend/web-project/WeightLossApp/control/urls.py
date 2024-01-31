from django.urls import include,path
from control import views
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('userlist/', views.user_list),
    path('userlist/<int:id>', views.user_detail),
    path('foods/', views.food_list),
    path('foods/<str:id>', views.food_detail)
]
urlpatterns = format_suffix_patterns(urlpatterns)
