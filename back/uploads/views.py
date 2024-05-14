import base64

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from properties.models import Property


@api_view(['GET'])
def upload_file(request, id, filename):
    """
    Returns a single property by ID.
    """
    regex = 'property_'
    id = id.replace(regex, "")
    file_path = 'uploads/media/' + id + '/' + filename
    if request.method == 'GET':
        try:
            property = Property.objects.get(pk=id)
            if property.image:
                file_data = base64.b64encode(bytes(property.image.read()))
                file_content = "data:image/png;base64," + file_data.decode("utf-8")
                return Response(file_content)
        except Property.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

