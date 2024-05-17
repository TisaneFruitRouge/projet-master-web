from django.db import models
from django.utils import timezone
import uuid


class Investment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.TextField()  # given by clerk
    property_id = models.ForeignKey(
        "properties.Property",
        on_delete=models.CASCADE,
    )
    simulation_date = models.DateField()
    monthly_rent = models.FloatField()
    monthly_charges = models.FloatField()
    property_tax = models.FloatField()
    credit_amount = models.FloatField()
    credit_duration = models.IntegerField()
    interest_rate = models.FloatField()
    net_profitability = models.FloatField(default=None, null=True)
    gross_profitability = models.FloatField(default=None, null=True)
    internal_rate_of_profitability = models.FloatField(default=None, null=True)
    monthly_cashflow = models.FloatField(default=None, null=True)
