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