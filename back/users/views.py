from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from properties.models import Property
from properties.serializers import PropertySerializer

@api_view(['GET'])
def user_property_list(request, user_id):
    """
        Get all the properties of a user
    """
    if request.method == 'GET':
        properties = Property.objects.filter(user_id=user_id)
        serializer = PropertySerializer(properties, many=True)
        return Response(serializer.data)
