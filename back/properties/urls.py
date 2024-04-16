from django.urls import path
from properties.views import property_list, property

urlpatterns = [
    path('', property_list, name='property-list'),
    path('<str:id>/', property, name='property detail')
]
