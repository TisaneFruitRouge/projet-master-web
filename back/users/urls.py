from django.urls import path
from users.views import user_property_list

urlpatterns = [
    path('<str:user_id>/properties', user_property_list, name='users-properties'),
]
