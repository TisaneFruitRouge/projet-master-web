from django.contrib import admin
from investment.models import Investment


class InvestmentAdmin(admin.ModelAdmin):
    pass


admin.site.register(Investment, InvestmentAdmin)
