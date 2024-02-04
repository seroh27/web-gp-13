from django.urls import include,path
from user import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('userdetail/', views.user_detail),
    path('meallist/', views.meal_list),
    path('register/', views.registration_view),
    path('login/', views.login_view),
    path('todaycal/', views.today_cal),
    path('weekcalreport/', views.week_cal_report),
]
urlpatterns = format_suffix_patterns(urlpatterns)