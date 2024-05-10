"use client";

import {Property} from "@/lib/types/property";
import {getProperties} from "@/lib/api/properties";
import PropertyCard from "@/components/dashboard/PropertyCard"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useEffect, useState} from "react";

async function PropertySales() {

	const [soldInput, setIsSoldInput] = useState("");
	const [isSold, setIsSold] = useState<boolean | null>(null);

	let properties:Property[] = [];
	properties = await getProperties(isSold);

	// let setIsSoldValue =  (value: string) => {
	// 	getPropertiesFromFilter(value);
	// 	setIsSoldInput(value);
	// }

	useEffect(() => {
		(async() => {
			console.log(soldInput);
			let isSold = null;
			if (soldInput === 'sold') {
				isSold = true;
			}else if (soldInput === 'on-sale') {
				isSold = false;
			}
			setIsSold(isSold);

			// let properties = await getProperties(isSold);
			return;
		})();
	}, [soldInput]);
	// let getPropertiesFromFilter = async (value: string | null) => {
	// 	console.log(value);
	// 	let isSold = null;
	// 	if (value === 'sold') {
	// 		isSold = true;
	// 	}else if (value === 'on-sale') {
	// 		isSold = false;
	// 	}
	//
	// 	properties = await getProperties(isSold);
	// }

	return (
		<main className="flex flex-col gap-4 p-8">
			<div className="">
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

				{/*	<Button className={badgeVariants({ variant: "default" })} onClick={() => getPropertiesFromFilter(null)}>Tous</Button>*/}
				{/*<Button className={badgeVariants({ variant: "default" })} onClick={() => getPropertiesFromFilter(false)}>Non Vendus</Button>*/}
				{/*<Button className={badgeVariants({ variant: "default" })} onClick={() => getPropertiesFromFilter(true)}>Vendus</Button>*/}
			</div>
			<div className="flex justify-start flex-wrap gap-8">
				{properties.map((property => <PropertyCard key={property.id} property={property}/>))}
			</div>
		</main>
	)

}

function SalesSelector() {
	const [soldInput, setIsSoldInput] = useState("");
	const [properties, setProperties] = useState<Property[]>([]);

	// let properties:Property[] = [];

	useEffect(() => {
		(async() => {
			console.log(soldInput);
			let isSold = null;
			if (soldInput === 'sold') {
				isSold = true;
			}else if (soldInput === 'on-sale') {
				isSold = false;
			}


			let properties = await getProperties(isSold);
			if (properties !== null) {
				setProperties(properties);
			}
			return;
		})();
	}, [soldInput]);


	// let getPropertiesFromFilter = async (value: string) => {
	// 	console.log(value);
	// 	let isSold = null;
	// 	if (value === 'sold') {
	// 		isSold = true;
	// 	}else if (value === 'on-sale') {
	// 		isSold = false;
	// 	}
	//
	//
	// 	properties = await getProperties(isSold);
	// 	setIsSoldInput(value)
	// }

	return (
		<div>
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
			<div className="flex justify-start flex-wrap gap-8">
			{
				properties.length === 0 ?
					<div>Loading...</div>
						:
					<div>
						{properties.map((property => <PropertyCard key={property.id} property={property}/>))}
					</div>
			}
			</div>
	</div>
	);
}

export {SalesSelector, PropertySales};