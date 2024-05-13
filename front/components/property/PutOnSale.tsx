"use client"

import {Property} from "@/lib/types/property";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {updateProperty} from "@/lib/api/properties";
import {DateTime} from "asn1js";
import {toast} from "sonner";


interface PutOnSaleProps {
	property: Property
}

export default function PutOnSale({property}: PutOnSaleProps) {

	const [priceInput, setPriceInput] = useState(property.sold_price ?? 0);
	const [isSoldInput, setIsSoldInput] = useState<boolean | null>(property.is_sold);
	const [isPriceValidated, setPriceValidationInput] = useState<boolean>(property.is_sold !== null);
	const putOnSale = async () => {

		console.log(property);
		if (priceInput > 0) {
			property.is_sold = false;
			property.sold_price = priceInput;
			property.sold_date = new Date();

			const newProperty = await updateProperty(property);

			if (newProperty === null) {
				toast("Error while updating the property", {
					description: "We couldn't successfully update the property"
				});
			} else {
				toast("The property has been updated successfully", {
					description: "The property was updated successfully"
				});

				setIsSoldInput(false);
				setPriceValidationInput(true);
				property = newProperty;
			}
		}
	}

	const markAsSold = async () => {
		property.is_sold = true;
		const newProperty = await updateProperty(property);

		if (newProperty === null) {
			toast("Error while updating the property", {
				description: "We couldn't successfully update the property"
			});
		} else {
			toast("The property has been updated successfully", {
				description: "The property was updated successfully"
			});

			setIsSoldInput(true);
			setPriceValidationInput(true);

			property = newProperty;
		}
	}

	return (
		<div className="bg-white rounded-md border border-solid border-black/10 p-4 shadow-md">
			{
				isPriceValidated && priceInput > 0 ?
					<div>
						Selling price : {priceInput}€
						<br />

						{isSoldInput !== null && !isSoldInput ?
							<Button onClick={markAsSold}>
								Mark as sold
							</Button> :
							<div className="bg-green-200">Property sold</div>
						}
					</div> :

					<Dialog>
						<DialogTrigger asChild>
							<Button>Put on sale</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Put the property on sale</DialogTitle>
							</DialogHeader>
							<div className="flex items-center space-x-2">
								<label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price (€)</label>
								<Input
									type="number"
									id="price"
									value={priceInput}
									min={0}
									onChange={(e) => setPriceInput(parseInt(e.target.value) || 0)}
								/>
							</div>
							<DialogFooter>
								<DialogClose asChild>
									<Button onClick={putOnSale}>Put on Sale</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
			}
		</div>
	)

}
