import {getPropertyInvestmentSimulations} from "@/lib/api/investment";
import SimulationShort from "@/components/property/SimulationShort";


export default async function InvestmentSimulationList({params}: {params: {id: string}}) {
	const property_id = params.id;
	const investments = await getPropertyInvestmentSimulations(property_id);

	return (
		<div className="container mx-auto py-10 flex w-[90vw]">
			<div className="flex flex-col gap-4 w-full">
				{investments.map(investment => <SimulationShort key={investment.id} investment={investment} />)}
			</div>
		</div>
	);
}