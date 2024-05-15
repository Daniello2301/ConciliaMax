from django.urls import re_path
from .views import login, sigup, test_token, get_users, get_user

urlpatterns = [
    re_path('login', login),
    re_path('signup', sigup),
    re_path('test_token', test_token),
    re_path('all_users', get_users),
    re_path('user/(?P<user_id>[0-9]+)', get_user)
]
