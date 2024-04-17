from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from prediction.serializers import PredictionRequestSerializer
import pickle
import os
import pandas as pd
import math


@api_view(['POST'])
def prediction(request):
    """
    Make a prediction
    """

    if request.method == 'POST':
        serializer = PredictionRequestSerializer(data=request.data)
        if serializer.is_valid():
            request = serializer.data
            print(os.getcwd())
            with open(f'ai-models/lille-gbr.sav', 'rb') as f:
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
                
                return Response({"estimated_price": rounded_estimated_price}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)