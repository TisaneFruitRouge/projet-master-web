from django.urls import path
from prediction.views import prediction

urlpatterns = [
    path('', prediction, name='prediction'),
]
