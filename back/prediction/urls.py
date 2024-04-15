from django.urls import path
from prediction.views import snippet_list

urlpatterns = [
    path('', snippet_list, name='snippet-list'),
]
