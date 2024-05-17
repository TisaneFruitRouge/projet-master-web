from django.urls import path
from investment.views import investment_list, get_investment

urlpatterns = [
    path('property/<str:property_id>', investment_list, name='investment-list'),
    path('<str:id>/', get_investment, name='investment detail')
]
