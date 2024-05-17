from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from prediction.serializers import PredictionRequestSerializer
import pickle
import pandas as pd
import math
from datetime import date

from prediction.models import Prediction
from prediction.serializers import PredictionSerializer
from properties.models import Property

@api_view(['POST'])
def prediction(request):
    """
    Make a prediction
    """

    if request.method == 'POST':
        serializer = PredictionRequestSerializer(data=request.data)
        if serializer.is_valid():
            request = serializer.data

            property = Property.objects.filter(id=request["property_id"]).all()
            city = property[0].city

            with open(f'prediction/ai-models/{city}.sav', 'rb') as f:
                clf = pickle.load(f)
                inputData = {
                    'elevator': request['hasElevator'], 
                    'location.lat': request['lat'], 
                    'location.lon': request['lon'], 
                    'surface': request['surface'], 
                    'bedroom': request['bedroom'], 
                    'floor': request['floor'], 
                    'furnished': request['isFurnished'], 
                    'room': request['room'], 
                    'propertyType': request['propertyType'], 
                    'city.department.code': request['cityDepartmentCode'],
                    # oops (for now, we can't add metro stations)
                    'distance.grandPlaceLille': 0,
                    'distance.lilleAirport': 0,
                    'distance.lilleEuropeStation': 0,
                    'distance.lilleFlandresStation': 0,
                    'distance.lilleZoo': 0,
                    'distance.palaisDesBeauxArts': 0
                }
                cols_when_model_builds = clf.feature_names_in_

                df = pd.DataFrame(inputData, index=[0])
                df = df[cols_when_model_builds] # reordering features

                estimated_price = clf.predict(df)
                rounded_estimated_price = math.ceil(estimated_price / 1000) * 1000
                
                serializer_data = {
                    "type": request['propertyType'],
                    "price": rounded_estimated_price,
                    "dateOfEstimation": date.today(),
                    "property_id": request['property_id']
                }
                serializer = PredictionSerializer(data=serializer_data)
                if serializer.is_valid():
                    serializer.save()

                return Response({"estimated_price": rounded_estimated_price}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_prediction(request, property_id):
    """
        Returns the price prediction for a property
    """
    if request.method == 'GET':
        try:
            prediction = Prediction.objects.get(property_id=property_id)
            serializer = PredictionSerializer(prediction)
            return Response(serializer.data)
        except Prediction.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)