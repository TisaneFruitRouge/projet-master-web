from django.urls import path

from uploads.views import upload_file

urlpatterns = [
    path('<str:id>/<str:filename>', upload_file, name='property file')
]
