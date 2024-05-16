import {Estimation} from "@/lib/types/estimation";
import {Investment, InvestmentRequest} from "@/lib/types/investment";

const URL = process.env.NEXT_PUBLIC_API_URL as string;


export async function getSingleInvestmentSimulation(id: string) {
	const response = await fetch(`${URL}/api/investment/${id}`,
		{
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	)

	if (response.ok) {
		const investment: Investment = await response.json();
		return investment
	} else return null;
}

export async function getPropertyInvestmentSimulations(property_id: string) : Promise<Investment[]> {
	const response = await fetch(`${URL}/api/investment/property/${property_id}`,
		{
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
	)

	if (response.ok) {
		const simulations = await response.json();
		return simulations ?? []
	} else return [];
}

export async function makePropertyInvestmentSimulation(request: InvestmentRequest) {

	const property_id = request.property_id;
	const response = await fetch(`${URL}/api/investment/property/${property_id}`,
		{
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		}
	)

	if (response.ok) {
		const newSimulation: Investment = await response.json();
		return newSimulation;
	} else return null;
}