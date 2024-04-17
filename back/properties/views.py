from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from properties.models import Property
from properties.serializers import PropertySerializer

@api_view(['GET', 'POST'])
def property_list(request):
    """
    List all properties, or create a new property.
    """
    if request.method == 'GET':
        properties = Property.objects.all()
        serializer = PropertySerializer(properties, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PropertySerializer(data=request.body)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def property(request, id):
    """
    Returns a single property by ID.
    """
    if request.method == 'GET':
        try:
            property = Property.objects.get(pk=id)
            serializer = PropertySerializer(property)
            return Response(serializer.data)
        except Property.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


