from django.db import models
import uuid

# Create your models here.

class Prediction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.IntegerField(default=1) # 1 for buy prodeiction, 2 for rent
    price = models.IntegerField()
    dateOfEstimation = models.DateField()
    property_id = models.ForeignKey(
        "properties.Property",
        on_delete=models.CASCADE,
    )

class PredictionRequest(models.Model):
    hasElevator = models.BooleanField()
    lat = models.FloatField()
    lon = models.FloatField()
    surface = models.IntegerField()
    bedroom = models.IntegerField()
    floor = models.IntegerField()
    isFurnished  = models.BooleanField()
    room = models.IntegerField()
    propertyType = models.IntegerField()
    cityDepartmentCode = models.IntegerField()
    property_id = models.ForeignKey(
        "properties.Property",
        on_delete=models.CASCADE,
    )