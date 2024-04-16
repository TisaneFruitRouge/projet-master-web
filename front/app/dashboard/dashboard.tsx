import {auth} from "@clerk/nextjs";
import {Property} from "@/lib/types/property";
import {getPropertiesOfUser} from "@/lib/api/properties";

import PropertyCard from "@/components/dashboard/PropertyCard";

export default async function Dashboard() {
	const {userId} = auth();

	let properties:Property[] = [];

	if (userId) {
		properties = await getPropertiesOfUser(userId);
	}

	return (
		<div className="flex justify-start flex-wrap gap-8">
			{properties.map((property => <PropertyCard key={property.id} property={property} />))}
		</div>
	)


}