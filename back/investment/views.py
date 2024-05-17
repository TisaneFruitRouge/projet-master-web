from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from investment.models import Investment
from investment.serializers import InvestmentSerializer, InvestmentRequestSerializer
from datetime import date

from prediction.models import Prediction
from prediction.serializers import PredictionSerializer
from prediction.views import get_prediction


@api_view(['GET', 'POST'])
def investment_list(request, property_id):
    """
       List all investment simulations, or create a new simulation.
    """

    if request.method == 'GET':
        try:
            investments = Investment.objects.filter(property_id=property_id).all()
            serializer = InvestmentSerializer(investments, many=True)
            return Response(serializer.data)
        except Investment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        try:
            serializer = InvestmentRequestSerializer(data=request.data)
            if serializer.is_valid():
                request = serializer.data

                property_id = request['property_id']

                prediction = Prediction.objects.get(property_id=property_id)
                prediction_serializer = PredictionSerializer(prediction)
                prediction_price = prediction_serializer.data.get('price')

                print('prediction price', prediction_price)

                request['simulation_date'] = date.today()
                request['net_profitability'] = serializer.get_net_profitability(request, prediction_price)
                request['gross_profitability'] = serializer.get_gross_profitability(request, prediction_price)
                request['internal_rate_of_profitability'] = serializer.get_internal_rate_of_profitability(request)
                request['monthly_cashflow'] = serializer.get_monthly_cashflow(request)

                print(request)

                serializer = InvestmentSerializer(data=request)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Investment.DoesNotExist:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT'])
def get_investment(request, id):
    """
    Returns a single investment simulation by ID.
    """
    if request.method == 'GET':
        try:
            i = Investment.objects.get(pk=id)
            serializer = InvestmentSerializer(i)
            return Response(serializer.data)
        except Investment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

