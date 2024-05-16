from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from investment.models import Investment
from investment.serializers import InvestmentSerializer


@api_view(['GET', 'POST'])
def investment_list(request, property_id):
    """
       List all investments, or create a new simulation.
    """

    if request.method == 'GET':
        try:
            investments = Investment.objects.filter(property_id=property_id).all()
            serializer = InvestmentSerializer(investments, many=True)
            return Response(serializer.data)
        except Investment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        serializer = InvestmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def get_investment(request, id):
    """
    Returns a single investment by ID.
    """
    if request.method == 'GET':
        try:
            i = Investment.objects.get(pk=id)
            serializer = InvestmentSerializer(i)
            return Response(serializer.data)
        except Investment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

