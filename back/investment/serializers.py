from rest_framework import serializers
from investment.models import Investment


class InvestmentSerializer(serializers.ModelSerializer):
    net_profitability = serializers.DecimalField(max_digits=3, decimal_places=2)
    gross_profitability = serializers.DecimalField(max_digits=3, decimal_places=2)
    internal_rate_of_profitability = serializers.DecimalField(max_digits=3, decimal_places=2)
    monthly_cashflow = serializers.DecimalField(max_digits=3, decimal_places=2)

    def get_net_profitability(self, investment):
        return investment.credit_amount * 2

    def get_gross_profitability(self, investment):
        return investment.credit_amount * 3

    def get_internal_rate_of_profitability(self, investment):
        return investment.credit_amount * 4

    def get_monthly_cashflow(self, investment):
        return investment.credit_amount * 5

    class Meta:
        model = Investment
        fields = ['id', 'user_id', 'property_id', 'simulation_date', 'monthly_rent', 'monthly_charges', 'property_tax',
                  'credit_amount', 'credit_duration', 'interest_rate']
        read_only_fields = ['net_profitability', 'gross_profitability', 'internal_rate_of_profitability',
                            'monthly_cashflow']
