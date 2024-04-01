from django.contrib import admin
from properties.models import Property


class PropertyAdmin(admin.ModelAdmin):
    pass


admin.site.register(Property, PropertyAdmin)
