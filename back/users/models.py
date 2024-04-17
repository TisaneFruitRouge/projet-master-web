from django.db import models
import uuid

# Create your models here.

class User(models.Model):
    id = models.TextField(primary_key=True, default=uuid.uuid4, editable=False)