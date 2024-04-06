
export default function AddProperty() {
	return (
		<div className="border-b border-gray-900/10 pb-12">
			<h1 className="text-xl font-semibold leading-7 text-gray-900">Ajouter un bien</h1>
			<p className="mt-1 text-sm leading-6 text-gray-600">Veuillez compléter les champs suivants.</p>

			<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Informations générales sur le bien</h2>

			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-3">
					<label htmlFor="property-name" className="block text-sm font-medium leading-6 text-gray-900">Nom du bien</label>
					<div className="mt-2">
						<input type="text" name="first-name" id="property-name" autoComplete="given-name"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label htmlFor="property-type" className="block text-sm font-medium leading-6 text-gray-900">Type de bien</label>
					<div className="mt-2">
						<select id="property" name="property" autoComplete="property-type"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
							<option>Appartement</option>
							<option>Maison</option>
							<option>Garage</option>
							<option>Autre</option>
						</select>
					</div>
				</div>

			</div>

			<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Localisation</h2>
			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="col-span-3">
					<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Adresse</label>
					<div className="mt-2">
						<input type="text" name="street-address" id="street-address" autoComplete="street-address"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Ville</label>
					<div className="mt-2">
						<input type="text" name="city" id="city" autoComplete="address-level2"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Région/État/Province</label>
					<div className="mt-2">
						<input type="text" name="region" id="region" autoComplete="address-level1"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Code postal</label>
					<div className="mt-2">
						<input type="text" name="postal-code" id="postal-code" autoComplete="postal-code"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>
			</div>

			<h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Critères du bien</h2>

			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-2">
					<label htmlFor="surface" className="block text-sm font-medium leading-6 text-gray-900">Surface</label>
					<div className="mt-2 flex justify-center">
						<input id="surface" name="surface" type="number"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
						m
					</div>
				</div>

				<div className="sm:col-span-2">
					<label htmlFor="bedroom" className="block text-sm font-medium leading-6 text-gray-900">Nombre de chambres</label>
					<div className="mt-2">
						<input id="bedroom" name="bedroom" type="number"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<label htmlFor="room" className="block text-sm font-medium leading-6 text-gray-900">Nombre de pièces</label>
					<div className="mt-2">
						<input id="room" name="room" type="number"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
					</div>
				</div>


				<div className="sm:col-span-2">
					<label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">Sol</label>
					<div className="mt-2 flex justify-center">
						<input id="floor" name="floor" type="number"
							   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>m
					</div>
				</div>


				<div className="sm:col-span-2">
					{/* todo : à modifier */}
					<label htmlFor="elevator" className="block text-sm font-medium leading-6 text-gray-900">Ascenceur</label>
					<label className="mt-2 relative inline-flex items-center cursor-pointer">
						<input id="elevator" type="checkbox" name="elevator" value="" className="sr-only peer"/>
						<div
							className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
					</label>
				</div>

				<div className="sm:col-span-2">
					{/* todo : à modifier */}
					<label htmlFor="furnished" className="block text-sm font-medium leading-6 text-gray-900">Meublé</label>
					<label className="mt-2 relative inline-flex items-center cursor-pointer">
						<input id="furnished" type="checkbox" name="furnished" value="" className="sr-only peer"/>
						<div
							className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
					</label>
				</div>


			</div>
		</div>

	)
}