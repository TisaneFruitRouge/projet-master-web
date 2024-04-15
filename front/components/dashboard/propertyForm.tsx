"use client"

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";


export default function AddProperty({triggerComponent}) {

	const [nameInput, setNameInput] = useState("");
	const [addressInput, setAddressInput] = useState("");
	const [cityInput, setCityInput] = useState("");
	const [regionInput, setRegionInput] = useState("");
	const [postalInput, setPostalInput] = useState("");

	const [surfaceInput, setSurfaceInput] = useState(0);
	const [bedroomInput, setBedroomInput] = useState(0);
	const [roomInput, setRoomInput] = useState(0);
	const [floorInput, setFloorInput] = useState(0);


	const [pictureInput, setPictureInput] = useState(0);


	let addNewProperty = () => {
		// todo : Convert address to lat long
		console.log('submit')
	}

	return (
		<Sheet>
			<SheetTrigger className="w-36">{triggerComponent}</SheetTrigger>
			<SheetContent className="w-[900px] sm:w-[720px]">
				<SheetHeader>
					<SheetTitle>Add a new property</SheetTitle>
					<SheetDescription>
						Fill all the following fields.
					</SheetDescription>
				</SheetHeader>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Informations générales sur le bien</h2>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="property-name" className="block text-sm font-medium leading-6 text-gray-900">Nom du bien</label>
							<Input id="email" placeholder="Nom" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="property-type" className="block text-sm font-medium leading-6 text-gray-900">Type de bien</label>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select type of property"/>
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Type of Property</SelectLabel>
										<SelectItem value="appartment">Appartement</SelectItem>
										<SelectItem value="house">Maison</SelectItem>
										<SelectItem value="garage">Garage</SelectItem>
										<SelectItem value="other">Autre</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>


					</div>

					<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Localisation</h2>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
							<Input autoComplete="street-address" id="street-address" placeholder="Address" value={addressInput}
								   onChange={(e) => setAddressInput(e.target.value)}/>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
							<Input autoComplete="address-level2" id="city" placeholder="Ville" value={cityInput}
								   onChange={(e) => setCityInput(e.target.value)}/>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Region/State/Province</label>
							<Input autoComplete="address-level1" id="region" placeholder="Ville" value={regionInput}
								   onChange={(e) => setRegionInput(e.target.value)}/>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Postal Code</label>
							<Input autoComplete="postal-code" id="postal-code" placeholder="Code Postal" value={postalInput}
								   onChange={(e) => setPostalInput(e.target.value)}/>
						</div>

					</div>

					<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Critères du bien</h2>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="surface" className="block text-sm font-medium leading-6 text-gray-900">Surface</label>
							<Input type="number" id="surface" placeholder="Surface" value={surfaceInput}
								   onChange={(e) => setSurfaceInput(parseInt(e.target.value))}/>m
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="bedroom" className="block text-sm font-medium leading-6 text-gray-900">Number of Bedrooms</label>
							<Input type="number" id="bedroom" placeholder="Nb de chambres" value={bedroomInput}
								   onChange={(e) => setBedroomInput(parseInt(e.target.value))}/>m
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="room" className="block text-sm font-medium leading-6 text-gray-900">Number of rooms</label>
							<Input type="number" id="room" placeholder="Nb de chambres" value={roomInput}
								   onChange={(e) => setRoomInput(parseInt(e.target.value))}/>m
						</div>


						<div className="sm:col-span-3">
							<label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">Floor</label>
							<Input type="number" id="floor" placeholder="Sol" value={floorInput}
								   onChange={(e) => setFloorInput(parseInt(e.target.value))}/>m
						</div>


						<div className="sm:col-span-3">
							<div>
								<Checkbox id="elevator"/>
								<label htmlFor="elevator"
									   className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ascenceur</label>
							</div>
							<div>
								<Checkbox id="furnished"/>
								<label htmlFor="furnished"
									   className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Meublé</label>
							</div>
						</div>
					</div>

					<div className="sm:col-span-3">
						<label htmlFor="pictures" className="block text-sm font-medium leading-6 text-gray-900">Images of property</label>
						<Input type="file" id="pictures" placeholder="Files"/>
						{/*value={pictureInput} onChange={(e) => setPictureInput(e.target.value)}/>*/}
					</div>

					<div className="text-center">
						<Button onClick={addNewProperty()} type="submit" id="submit" className="bg-blue-700">Submit</Button>
					</div>

				</div>

			</SheetContent>
		</Sheet>

	)
}