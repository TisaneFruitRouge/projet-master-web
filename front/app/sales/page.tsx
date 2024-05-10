import {Property} from "@/lib/types/property";
import {getProperties} from "@/lib/api/properties";

import PropertyCard from "@/components/dashboard/PropertyCard"
import {SalesSelector} from "@/components/sales/PropertySales";

export default async function SalesPage() {

	let properties:Property[] = [];
	properties = await getProperties();


	return (
		<main className="flex flex-col gap-4 p-8">
			<SalesSelector/>
			<div className="flex justify-start flex-wrap gap-8">
				{properties.map((property => <PropertyCard key={property.id} property={property}/>))}
			</div>
		</main>
	)


}