from rest_framework import serializers
from properties.models import Property
from drf_extra_fields.fields import Base64ImageField


class PropertySerializer(serializers.ModelSerializer):
    image = Base64ImageField(required=False, allow_null=True)
    class Meta:
        model = Property
        fields = ['id', 'user_id', 'name', 'adress', 'city', 'lat', 'long', 'created_at', 'description', 'surface',
        'propertyType', 'hasElevator', 'hasGarden', 'hasParkingSpace', 'yearOfConstruction', 'bedroom', 'room', 'floor',
        'isFurnished', 'cityDepartmentCode', 'image', 'is_sold', 'sold_price', 'sold_date']
