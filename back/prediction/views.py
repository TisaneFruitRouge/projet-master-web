from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from prediction.serializers import PredictionRequestSerializer
import pickle
import os


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
                #print(clf)
                #return clf

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)