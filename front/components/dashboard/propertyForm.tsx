"use client"

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Property, PropertyType } from "@/lib/types/property";
import { addNewProperty } from "@/lib/api/properties";
import { useAuth } from "@clerk/nextjs";

import { toast } from "sonner"

export default function AddProperty() {

	const [nameInput, setNameInput] = useState("");
	const [addressInput, setAddressInput] = useState("");
	const [cityInput, setCityInput] = useState("");
	const [regionInput, setRegionInput] = useState("");
	const [postalInput, setPostalInput] = useState("");
	const [propertyType, setPropertyType] = useState<PropertyType>(1);

	const [surfaceInput, setSurfaceInput] = useState(0);
	const [bedroomInput, setBedroomInput] = useState(0);
	const [roomInput, setRoomInput] = useState(0);
	const [floorInput, setFloorInput] = useState(0);


	const [pictureInput, setPictureInput] = useState("");

	const { userId } = useAuth();

	let submitNewProperty = async () => {

		if (!userId) { // should not happen
			return;
		}

		const property:Property = {
			id: '', // id will be given by the backend
			user_id: userId,
			name: nameInput || 'New Property',
			adress: addressInput,
			lat: null,
			long: null,
			created_at: new Date(),
			description: "",
			surface: surfaceInput,
			propertyType: propertyType,
			hasElevator: false,
			hasGarden: false,
			hasParkingSpace: false,
			isFurnished: false,
			yearOfConstruction: null,
			bedroom: bedroomInput,
			floor: floorInput,
			cityDepartmentCode: null
		}

		const newProperty = await addNewProperty(userId as string, property);
		console.log(newProperty)
		if (newProperty === null) {
			toast("Error while adding the property", {
				description: "We couldn't successfully add the new property to your dashboard"
			});
		} else {
			toast("New property added successfully", {
				description: "The property was added to your dashboard"
			});

			clearInputs();
		}

	}

	const clearInputs = () => {
		setNameInput("");
		setAddressInput("");
		setCityInput("");
		setRegionInput("");
		setPostalInput("");
		setPropertyType(1);
		setSurfaceInput(0);
		setBedroomInput(0);
		setRoomInput(0);
		setFloorInput(0);
		setPictureInput("");
	}

	return (
		<Sheet onOpenChange={clearInputs}>
			<SheetTrigger className="flex justify-start">
				<Button className="w-36">Add new property</Button>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[1000px]">
				<SheetHeader>
					<SheetTitle>Add a new property</SheetTitle>
					<SheetDescription>
						Fill all the following fields.
					</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col gap-6 border-b border-gray-900/10 pb-12 scroll">
					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold text-gray-900">Informations générales</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="property-name" className="block text-sm font-medium leading-6 text-gray-900">Nom du bien</label>
								<Input id="email" placeholder="Nom" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="property-type" className="block text-sm font-medium leading-6 text-gray-900">Type de bien</label>
								<Select 
									defaultValue={propertyType.toString()} 
									onValueChange={(type) => setPropertyType(parseInt(type) as PropertyType)}>
									<SelectTrigger>
										<SelectValue placeholder="Select type of property"/>
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Type of Property</SelectLabel>
											<SelectItem value="1">Appartement</SelectItem>
											<SelectItem value="2">Maison</SelectItem>
											<SelectItem value="3">Garage</SelectItem>
											<SelectItem value="4">Autre</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Localisation</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
								<Input 
									autoComplete="street-address" 
									id="street-address" 
									placeholder="Address" 
									value={addressInput}
									onChange={(e) => setAddressInput(e.target.value)}
								/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
								<Input 
									autoComplete="address-level2" 
									id="city" 
									placeholder="Ville" 
									value={cityInput}
									onChange={(e) => setCityInput(e.target.value)}
								/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Region/State/Province</label>
								<Input 
									autoComplete="address-level1" 
									id="region" 
									placeholder="Région" 
									value={regionInput}
									onChange={(e) => setRegionInput(e.target.value)}
								/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Postal Code</label>
								<Input 
									autoComplete="postal-code" 
									id="postal-code" 
									placeholder="Code Postal" 
									value={postalInput}
									onChange={(e) => setPostalInput(e.target.value)}
								/>
							</div>

						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Critères du bien</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="surface" className="block text-sm font-medium leading-6 text-gray-900">Surface (m^2)</label>
								<Input 
									type="number" 
									id="surface" 
									placeholder="Surface" 
									value={surfaceInput} 
									min={0}
									onChange={(e) => setSurfaceInput(parseInt(e.target.value))}
								/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="bedroom" className="block text-sm font-medium leading-6 text-gray-900">Number of Bedrooms</label>
								<Input 
									type="number" 
									id="bedroom" 
									placeholder="Nb de chambres" 
									value={bedroomInput} 
									min={0}
									onChange={(e) => setBedroomInput(parseInt(e.target.value))}
								/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="room" className="block text-sm font-medium leading-6 text-gray-900">Number of rooms</label>
								<Input 
									type="number" 
									id="room" 
									placeholder="Nb de chambres" 
									value={roomInput} 
									min={0}
									onChange={(e) => setRoomInput(parseInt(e.target.value))}
								/>
							</div>


							<div className="sm:col-span-3">
								<label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">Floor</label>
								<Input 
									type="number" 
									id="floor" 
									placeholder="Sol" 
									value={floorInput} 
									min={0}
									onChange={(e) => setFloorInput(parseInt(e.target.value))}
								/>
							</div>


							<div className="flex flex-col gap-2">
								<div className="flex items-center gap-1">
									<Checkbox id="elevator"/>
									<label htmlFor="elevator"
										className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ascenceur</label>
								</div>
								<div className="flex items-center gap-1">
									<Checkbox id="furnished"/>
									<label htmlFor="furnished"
										className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Meublé</label>
								</div>
							</div>
						</div>
					</div>

					<div>
						<label htmlFor="pictures" className="block text-sm font-medium leading-6 text-gray-900">Images of property</label>
						<Input 
							type="file" 
							id="pictures" 
							placeholder="Files" 
							value={pictureInput} 
							onChange={(e) => setPictureInput(e.target.value)}
						/>
					</div>

					<div className="flex gap-2">
						<Button className="w-1/2" onClick={submitNewProperty} type="submit" id="submit">Add property</Button>
						<SheetClose asChild>
							<Button variant="outline" className="w-1/2" id="cancel">Cancel</Button>
						</SheetClose>
					</div>

				</div>

			</SheetContent>
		</Sheet>

	)
}