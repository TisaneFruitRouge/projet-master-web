from rest_framework import serializers
from properties.models import Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id', 'user_id', 'name', 'adress', 'lat', 'long', 'created_at', 'description', 'surface', 'propertyType', 'hasElevator', 'hasGarden', 'hasParkingSpace', 'yearOfConstruction', 'bedroom', 'floor', 'isFurnished', 'cityDepartmentCode']
