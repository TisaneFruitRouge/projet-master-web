from rest_framework import serializers
from investment.models import Investment

def monthly_loan(principal,interest_rate,duration):
  r = interest_rate/(100*12) #interest per month
  monthly_payment = principal*((r*((r+1)**duration))/(((r+1)**duration)-1)) #formula for compound interest applied on mothly payments.
  return monthly_payment

class InvestmentRequestSerializer(serializers.ModelSerializer):

    def get_net_profitability(self, investment, price):
        loan=monthly_loan(investment['credit_amount'], investment['interest_rate'], investment['credit_duration'])
        return ((investment['monthly_rent'] - investment['monthly_charges']-loan)*12 - investment['property_tax']) / price

    def get_gross_profitability(self, investment, price):
        return (investment['monthly_rent'] * 12) / investment['credit_amount'] / price

    # prix de vente + (12 * monthly_rent) - property_tax
    # todo : edit
    def get_internal_rate_of_profitability(self, investment):
        return monthly_loan(investment['credit_amount'], investment['interest_rate'], investment['credit_duration'])


    def get_monthly_cashflow(self, investment):
        loan=monthly_loan(investment['credit_amount'], investment['interest_rate'], investment['credit_duration'])
        return investment['monthly_rent'] - investment['monthly_charges'] - loan


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
