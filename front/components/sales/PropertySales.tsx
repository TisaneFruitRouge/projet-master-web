"use client";

import {Property} from "@/lib/types/property";
import PropertyCard from "@/components/dashboard/PropertyCard"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useEffect, useState} from "react";

interface SalesSelectorProps {
	properties: Property[];
}

export default function SalesSelector({properties}:SalesSelectorProps) {
	const [soldInput, setIsSoldInput] = useState("");
	const [selectedProperties, setSelectedProperties] = useState<Property[]>(properties);

	useEffect(() => {
		let filterProperties = properties;

		if (soldInput === 'sold') {
			filterProperties = properties.filter(property=>property.is_sold === true)
		} else if (soldInput === 'on-sale') {
			filterProperties = properties.filter(property=>property.is_sold === false)
		}

		if (properties !== null) {
			setSelectedProperties(filterProperties);
		}
	}, [soldInput]);

	return (
		<>
			<div>
				<Select
					defaultValue={soldInput}
					onValueChange={(value) => setIsSoldInput(value)}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Tous/Vendus/En-Vente" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Tous</SelectItem>
						<SelectItem value="sold">Vendu</SelectItem>
						<SelectItem value="on-sale">En vente</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div>
			{
				selectedProperties.length === 0 ?
					<div className="italic">There is 0 property to display...</div>
						:
					<div className="flex justify-start flex-wrap gap-8">
						{selectedProperties.map((property => <PropertyCard key={property.id} property={property}/>))}
					</div>
			}
			</div>
		</>
	);
}