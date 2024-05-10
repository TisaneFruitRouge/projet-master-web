import {Property} from "@/lib/types/property";
import {getProperties} from "@/lib/api/properties";

import SalesSelector from "@/components/sales/PropertySales";

export default async function SalesPage() {

	let properties:Property[] = [];
	properties = await getProperties();

	return (
		<main className="flex flex-col gap-4 p-8">
			<SalesSelector properties={properties}/>
		</main>
	)


}