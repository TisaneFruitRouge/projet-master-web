from django.db import models
import uuid

# Create your models here.

class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.TextField() # given by clerk
    name = models.TextField()
    adress = models.TextField()
    lat = models.FloatField()
    long = models.FloatField()
    created_at = models.DateTimeField() 
    description = models.TextField()
    surface = models.IntegerField()
    propertyType = models.IntegerField(default=1) # 1 = apartment, 2 = house
    hasElevator = models.BooleanField()
    hasGarden = models.BooleanField()
    hasParkingSpace = models.BooleanField()
    yearOfConstruction = models.IntegerField()
    bedroom = models.IntegerField()
    floor = models.IntegerField()
    isFurnished = models.BooleanField()
    cityDepartmentCode = models.IntegerField()