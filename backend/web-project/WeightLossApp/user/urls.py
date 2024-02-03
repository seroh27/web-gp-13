from django.urls import include,path
from user import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('meallist/', views.meal_list),
    path('meallist/<int:id>/<str:food>/<str:type>/<str:date>/', views.meal_user_list),
    path('register/', views.registration_view),
    path('login/', views.login_view),
    path('todaycal/', views.today_cal),
    path('maintanacecalories/', views.calculate_maintenance_calories),
]
urlpatterns = format_suffix_patterns(urlpatterns)