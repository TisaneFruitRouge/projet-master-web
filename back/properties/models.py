from django.db import models
from django.utils import timezone
import uuid

# Create your models here.


def user_directory_path(instance, filename):
    return 'uploads/media/property_{0}/{1}'.format(instance.id, filename)


class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.TextField() # given by clerk
    name = models.TextField()
    adress = models.TextField()
    lat = models.FloatField(null=True)
    long = models.FloatField(null=True)
    created_at = models.DateTimeField(default=timezone.now) 
    description = models.TextField(null=True)
    surface = models.IntegerField()
    propertyType = models.IntegerField(default=1) # 1 = apartment, 2 = house
    hasElevator = models.BooleanField(default=False)
    hasGarden = models.BooleanField(default=False)
    hasParkingSpace = models.BooleanField(default=False)
    yearOfConstruction = models.IntegerField(null=True)
    bedroom = models.IntegerField()
    room = models.IntegerField(default=1)
    floor = models.IntegerField()
    isFurnished = models.BooleanField(default=False)
    cityDepartmentCode = models.IntegerField(null=True)
    image = models.ImageField(upload_to=user_directory_path, null=True)