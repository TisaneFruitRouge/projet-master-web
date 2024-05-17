"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Property, PropertyType } from "@/lib/types/property";
import { addNewProperty } from "@/lib/api/properties";
import { useAuth } from "@clerk/nextjs";

import { toast } from "sonner"
import { AutocompleteResponse, Address } from "@/lib/types/autocomplete";
import { ECityNames, cities } from "@/lib/types/city";

export default function AddProperty() {

	const [nameInput, setNameInput] = useState("");
	
	const [addressInput, setAddressInput] = useState("");
	const [addressValide, setAddressValide] = useState(false);
	const [postalInput, setPostalInput] = useState(0);
	const [latInput, setLatInput] = useState(0);
	const [lonInput, setLonInput] = useState(0);
	const [city, setCity] = useState<string | null>(null);

	const [propertyType, setPropertyType] = useState<PropertyType>(1);

	const [surfaceInput, setSurfaceInput] = useState(0);
	const [bedroomInput, setBedroomInput] = useState(0);
	const [roomInput, setRoomInput] = useState(0);
	const [floorInput, setFloorInput] = useState(0);
	const [constructionInput, setConstructionInput] = useState(2000);

	const [elevatorInput, setElevatorInput] = useState(false);
	const [furnishedInput, setFurnishedInput] = useState(false);
	const [parkingSpaceInput, setParkingSpaceInput] = useState(false);
	const [gardenInput, setGardenInput] = useState(false);

	const [pictureInput, setPictureInput] = useState("");
	const [fileInput, setFileInput] = useState<File>();

	const { userId } = useAuth();

	const [autocompleteResults, setAutocompleteResults] = useState<any[]>([]);

	let fileContent: string | ArrayBuffer | null | undefined = "";

	const registerFile = (target: EventTarget & HTMLInputElement) => {
		if (target) {
			if (target.files !== null && target.files[0]) {
				setFileInput(target.files[0]);
			}
			setPictureInput(target.value);
		}
	}

	const getAdressAutocomplete = async (query: string) => {
		if(query.length>5){
			try {
				const adresse = query.replace(" ", "+");
				const api_endpoint = "https://api-adresse.data.gouv.fr/search";
				const api_params = { q: adresse };
				const response = await fetch(`${api_endpoint}?${new URLSearchParams(api_params)}`);
				const data:{features: AutocompleteResponse} = await response.json();
				if (response.status === 200) {
					setAutocompleteResults(data.features);
				} else {
					console.log(`La requête a échoué avec le code de statut: ${response.status}`);
				}
			} catch (error) {
				console.log(`Une erreur s'est produite lors de l'appel de l'API: ${error}`);
			}
		}
		else{
			setAutocompleteResults([]);
		}
	};

	const loadAddress = ({properties, geometry}: Address) => {
		setCity(properties.city.toLowerCase());
		setAddressInput(properties.label);
		setPostalInput(parseInt(properties.citycode));
		setLatInput(geometry.coordinates[0]);
		setLonInput(geometry.coordinates[1]);
		setAutocompleteResults([]);
		setAddressValide(true);
	}

	const submitNewProperty = async () => {
		if(addressInput==""){
			toast("Plusieurs élements du formulaire ne sont pas renseignés", {
				description: "Veuillez renseigner ces derniers !"
			});
		}
		else if(!addressValide){
			toast("L'adresse saisie est invalide.", {
				description: "Merci de sélectionner une adresse proposée !"
			});
		}
		else if (city !== null && !cities.includes(city.toLowerCase() as ECityNames)) {
			toast("La ville saisie n'est pas disponible pour un estimation", {
				description: `Les villes dispinibles sont ${cities.map(city=>(city as string).charAt(0).toUpperCase() + (city as string).slice(1)).join(', ')}.`
			});
		} else {
			if (!userId) { // should not happen
				return;
			}

			if (fileInput) {
				let fileReader = new FileReader();
				fileReader.onload = async (event) => {
					let content = event.target?.result;
					if (content instanceof ArrayBuffer) {
						// todo : to edit with good way
						content = content.toString();
					}
					fileContent = content;
					console.log("called with file");
					await addProperty();
				}
				fileReader.readAsDataURL(fileInput);
			}else {
				console.log("called without file")
				await addProperty();
			}
		}
	}

	const addProperty = async () => {
		const property:Property = {
			id: '', // id will be given by the backend
			user_id: userId ?? '',
			name: nameInput || 'New Property',
			adress: addressInput,
			city: city as ECityNames,
			lat: latInput,
			long: lonInput,
			created_at: new Date(),
			description: "-",
			surface: surfaceInput,
			propertyType: propertyType,
			hasElevator: elevatorInput,
			hasGarden: gardenInput,
			hasParkingSpace: parkingSpaceInput,
			isFurnished: furnishedInput,
			yearOfConstruction: constructionInput,
			bedroom: bedroomInput,
			room: roomInput,
			floor: floorInput,
			cityDepartmentCode: postalInput, 
			is_sold: null,
			sold_price: null,
			sold_date: null
		}

		if (fileContent) {
			property.image = fileContent.toString();
		}


		const newProperty = await addNewProperty(userId as string, property);

		if (newProperty === null) {
			toast("Error while adding the property", {
				description: "We couldn't successfully add the new property to your dashboard"
			});
		} else {
			toast("New property added successfully", {
				description: "The property was added to your dashboard"
			});
			clearInputs();
			window.location.reload()
		}
	}

	const clearInputs = () => {
		setAutocompleteResults([]);
		setNameInput("");
		setAddressInput("");
		setPostalInput(0);
		setPropertyType(1);
		setCity(null);
		setSurfaceInput(0);
		setBedroomInput(0);
		setRoomInput(0);
		setFloorInput(0);
		setPictureInput("");
		setFileInput(undefined);
		setElevatorInput(false);
		setFurnishedInput(false);
		setParkingSpaceInput(false);
		setGardenInput(false);
		setAddressValide(false);
	}

	return (
		<Sheet onOpenChange={clearInputs}>
			<SheetTrigger className="flex justify-start">
				<p className="w-48 font-medium bg-black text-white rounded pt-2.5 pb-2.5 pl-0.5 pr-0.5">Ajouter un bien</p>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[1000px]  overflow-y-scroll">
				<SheetHeader>
					<SheetTitle>Ajouter une nouvelle propriété</SheetTitle>
					<SheetDescription>
						Renseigner les élements suivants.
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
						<div className="gap-4">


							<div className="sm:col-span-3">
								<label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-900">Adresse</label>
								<Input 
									autoComplete="address-level2" 
									id="adresse" 
									placeholder="Adresse" 
									value={addressInput}
									onChange={(e) => {setAddressInput(e.target.value); setAddressValide(false);getAdressAutocomplete(e.target.value);}}
								/>
								{autocompleteResults && autocompleteResults.length>0 && (
									<div className="p-1 absolute mt-2 mr-5 rounded-lg shadow-lg border-2 border-black/10 bg-white" >
										{autocompleteResults.map((result, index) => (
											<button className="hover:bg-gray-100 rounded-lg p-1 my-1 w-full text-wrap" key={index} onClick={(e) => loadAddress(result)}>
												{result.properties.label}
											</button>
										))}
									</div>
								)}
							</div>


						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Critères du bien</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="surface" className="block text-sm font-medium leading-6 text-gray-900">Surface (m²)</label>
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
								<label htmlFor="bedroom" className="block text-sm font-medium leading-6 text-gray-900">Nombre de chambres</label>
								<Input 
									type="number" 
									id="bedroom" 
									placeholder="Nombre de chambres" 
									value={bedroomInput} 
									min={0}
									onChange={(e) => setBedroomInput(parseInt(e.target.value))}
								/>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="room" className="block text-sm font-medium leading-6 text-gray-900">Nombre de pièces</label>
								<Input 
									type="number" 
									id="room" 
									placeholder="Nombre de pièces" 
									value={roomInput} 
									min={0}
									onChange={(e) => setRoomInput(parseInt(e.target.value))}
								/>
							</div>


							<div className="sm:col-span-3">
								<label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">Etage</label>
								<Input 
									type="number" 
									id="floor" 
									placeholder="Etage" 
									value={floorInput} 
									min={0}
									onChange={(e) => setFloorInput(parseInt(e.target.value))}
								/>
							</div>


							<div className="sm:col-span-3">
								<label htmlFor="construction" className="block text-sm font-medium leading-6 text-gray-900">Année de construction</label>
								<Input
									type="number"
									id="construction"
									placeholder="Année de construction"
									value={constructionInput}
									min={0}
									onChange={(e) => setConstructionInput(parseInt(e.target.value))}
								/>
							</div>


							<div className="sm:col-span-4 flex flex-col gap-2">
								<div className="flex items-center gap-1">
									<Checkbox id="elevator"
											  onCheckedChange={(e) => setElevatorInput(Boolean(e))}
											  checked={elevatorInput}
									/>
									<label htmlFor="elevator"
										className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Ascenceur</label>
								</div>
								<div className="flex items-center gap-1">
									<Checkbox id="furnished"
											  onCheckedChange={(e) => setFurnishedInput(Boolean(e))}
											  checked={furnishedInput}
									/>
									<label htmlFor="furnished"
										className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Meublé</label>
								</div>
								<div className="flex items-center gap-1">
									<Checkbox id="parkingSpace"
											  onCheckedChange={(e) => setParkingSpaceInput(Boolean(e))}
											  checked={parkingSpaceInput}
									/>
									<label htmlFor="parkingSpace"
										className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Parking</label>
								</div>
								<div className="flex items-center gap-1">
									<Checkbox id="garden"
											  onCheckedChange={(e) => setGardenInput(Boolean(e))}
											  checked={gardenInput}
									/>
									<label htmlFor="garden"
										className="ml-0.5 text-gray-90 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Jardin</label>
								</div>
							</div>
						</div>
					</div>

					<div>
						<label htmlFor="pictures" className="block text-sm font-medium leading-6 text-gray-900">Images de la propriété</label>
						<Input 
							type="file" 
							id="pictures" 
							placeholder="Files" 
							value={pictureInput}
							onChange={(e) => registerFile((e.target))}
						/>
					</div>

					<div className="flex gap-2">
						<Button className="w-1/2" onClick={submitNewProperty} type="submit" id="submit">Ajouter</Button>
						<SheetClose asChild>
							<Button variant="outline" className="w-1/2" id="cancel">Annuler</Button>
						</SheetClose>
					</div>

				</div>
			</SheetContent>
		</Sheet>
	)
}