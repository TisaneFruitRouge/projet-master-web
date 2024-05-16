
export type InvestmentRequest = {
	user_id: string;
	property_id: string;
	monthly_rent: number;
	monthly_charges: number;
	property_tax: number;
	credit_amount: number;
	credit_duration: number;
	interest_rate: number;
}


export type Investment = {
	id: string;
	user_id: string;
	property_id: string;
	simulation_date: Date | null;
	monthly_rent: number;
	monthly_charges: number;
	property_tax: number;
	credit_amount: number;
	credit_duration: number;
	interest_rate: number;
	net_profitability: number;
	gross_profitability: number;
	interest_rate_of_profitability: number;
	monthly_cashflow: number;
}

