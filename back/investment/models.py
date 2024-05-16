from django.db import models
from django.utils import timezone
import uuid


class Investment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.TextField()  # given by clerk
    property_id = models.UUIDField(editable=False)
    simulation_date = models.DateField()
    monthly_rent = models.DecimalField(max_digits=5, decimal_places=2)
    monthly_charges = models.DecimalField(max_digits=5, decimal_places=2)
    property_tax = models.DecimalField(max_digits=5, decimal_places=2)
    credit_amount = models.DecimalField(max_digits=5, decimal_places=2)
    credit_duration = models.IntegerField()
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
