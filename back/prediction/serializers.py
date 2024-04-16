from rest_framework import serializers
from prediction.models import Prediction, PredictionRequest

class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ['id', 'type', 'price', 'dateOfEstimation', 'property_id']

class PredictionRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PredictionRequest
        fields = ['hasElevator', 'lat', 'lon', 'surface', 'bedroom', 'floor', 'isFurnished', 'room', 'propertyType', 'cityDepartmentCode']
       
