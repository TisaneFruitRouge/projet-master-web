from django.urls import path
from prediction.views import prediction, get_prediction

urlpatterns = [
    path('', prediction, name='prediction'),
    path('<str:property_id>/', get_prediction, name='get_prediction')
]
