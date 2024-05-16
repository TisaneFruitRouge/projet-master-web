import {DataTable} from "@/components/property/investmentSimulationTable";
import {columns} from "@/components/property/investmentColumns";
import {getPropertyInvestmentSimulations} from "@/lib/api/investment";


export default async function InvestmentSimulationList({params}: {params: {id: string}}) {
	const property_id = params.id;
	const data = await getPropertyInvestmentSimulations(property_id);
	console.log(data);

	return (
		<div className="container mx-auto py-10 flex">
			<div className="w-1/2">
				<DataTable columns={columns} data={data}/>
			</div>
		</div>
	);
}