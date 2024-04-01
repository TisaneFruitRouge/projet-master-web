from django.urls import path
from properties.views import property_list

urlpatterns = [
    path('properties/', property_list, name='property-list'),
]
