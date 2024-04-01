from django.contrib import admin
from prediction.models import Prediction


class PredictionAdmin(admin.ModelAdmin):
    pass


admin.site.register(Prediction, PredictionAdmin)
