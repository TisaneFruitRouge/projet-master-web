from rest_framework import serializers
from investment.models import Investment


class InvestmentRequestSerializer(serializers.ModelSerializer):

    def get_net_profitability(self, investment):
        return (((investment['monthly_rent'] - investment['monthly_charges']) * 2) - investment['property_tax']) / 2

    def get_gross_profitability(self, investment):
        return (investment['monthly_rent'] * 12) / investment['credit_amount']

    # prix de vente + (12 * monthly_rent) - property_tax
    # todo : edit
    def get_internal_rate_of_profitability(self, investment):
        return investment['credit_amount'] * 4


    def get_monthly_cashflow(self, investment):
        return investment['monthly_rent'] - investment['monthly_charges']

    class Meta:
        model = Investment
        fields = ['user_id', 'property_id', 'monthly_rent', 'monthly_charges', 'property_tax',
                  'credit_amount', 'credit_duration', 'interest_rate']


class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = ['id', 'user_id', 'property_id', 'simulation_date', 'monthly_rent', 'monthly_charges', 'property_tax',
                  'credit_amount', 'credit_duration', 'interest_rate', 'net_profitability', 'gross_profitability',
                  'internal_rate_of_profitability', 'monthly_cashflow']
