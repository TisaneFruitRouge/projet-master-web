from django.urls import path
from prediction.views import snippet_list

urlpatterns = [
    path('predictions/', snippet_list, name='snippet-list'),
]
