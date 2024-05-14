from django.urls import re_path
from .views import login, sigup, test_token, get_users

urlpatterns = [
    re_path('login', login),
    re_path('signup', sigup),
    re_path('test_token', test_token),
    re_path('all_users', get_users)
]
