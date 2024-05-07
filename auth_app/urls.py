from django.urls import re_path
from .views import login, sigup, test_token

urlpatterns = [
    re_path('login', login),
    re_path('signup', sigup),
    re_path('test_token', test_token),
]