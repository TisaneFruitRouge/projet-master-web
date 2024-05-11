import {Property} from "@/lib/types/property";
import {getProperties, getPropertiesOfUser} from "@/lib/api/properties";

import SalesSelector from "@/components/sales/PropertySales";
import {auth} from "@clerk/nextjs";

export default async function SalesPage() {
	const { userId } = auth();

	let properties:Property[] = [];
	properties = await getProperties();

	return (
		<main className="flex flex-col gap-4 p-8">
			<h1 className="w-80 font-medium text-black">Biens mis en vente</h1>
			<SalesSelector properties={properties}/>
		</main>
	)


}