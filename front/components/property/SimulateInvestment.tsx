"use client";

import {Property} from "@/lib/types/property";
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Investment, InvestmentRequest} from "@/lib/types/investment";
import {addNewProperty} from "@/lib/api/properties";
import {toast} from "sonner";
import {makePropertyInvestmentSimulation} from "@/lib/api/investment";

interface EstimateInvestmentProps {
	property: Property
}

export default function SimulateInvestment({property}: EstimateInvestmentProps) {
	const [rentInput, setRentInput] = useState(0);
	const [rateInput, setRateInput] = useState(0);
	const [creditInput, setCreditInput] = useState(0);
	const [creditDurationInput, setCreditDurationInput] = useState(0);
	const [chargeInput, setChargeInput] = useState(0);
	const [propertyTaxInput, setPropertyTaxInput] = useState(0);

	const estimateInvestment = async () => {
		const investment: InvestmentRequest = {
			user_id: property.user_id ?? '',
			property_id: property.id,
			monthly_rent: rentInput,
			monthly_charges: chargeInput,
			property_tax: propertyTaxInput,
			credit_amount: creditInput,
			credit_duration: creditDurationInput,
			interest_rate: rateInput,
		};

		const newSimulation = await makePropertyInvestmentSimulation(investment);

		if (newSimulation === null) {
			toast("Une erreur est survenue lors de la simulation", {
				description: "Nous n'avons pas pu réaliser une simulation pour la propriété"
			});
		} else {
			toast("Simulation réussie", {
				description: "Une simulation a été réalisée pour cette propriété"
			});
			clearInputs();
			window.location.reload()
		}
	}

	const clearInputs = () => {
		setRentInput(0);
		setRateInput(0);
		setChargeInput(0);
		setPropertyTaxInput(0);
		setCreditInput(0);
		setCreditDurationInput(0);
	}

	return (
		<Dialog>
		<DialogTrigger asChild>
			<Button>Simuler mon investissement</Button>
		</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Simuler mon investissement</DialogTitle>
				</DialogHeader>
					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold text-gray-900">Information sur la propriété</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Loyer mensuel (€)</label>
								<Input
									type="number"
									id="price"
									value={rentInput}
									min={0}
									onChange={(e) => setRentInput(parseInt(e.target.value))}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="charge" className="block text-sm font-medium leading-6 text-gray-900">Charges mensuelles (€)</label>
								<Input
									type="number"
									min={0}
									value={chargeInput}
									id="charge"
									onChange={(e) => setChargeInput(parseInt(e.target.value))}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="property-tax" className="block text-sm font-medium leading-6 text-gray-900">Taxe foncière (/an) (€)</label>
								<Input
									type="number"
									min={0}
									value={propertyTaxInput}
									id="property-tax"
									onChange={(e) => setPropertyTaxInput(parseFloat(e.target.value))}
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold text-gray-900">Votre emprunt</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="credit" className="block text-sm font-medium leading-6 text-gray-900">Montant total (€)</label>
								<Input
									type="number"
									min={0}
									value={creditInput}
									id="credit"
									onChange={(e) => setCreditInput(parseInt(e.target.value))}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="credit-duration" className="block text-sm font-medium leading-6 text-gray-900">Durée (mois)</label>
								<Input
									type="number"
									id="credit-duration"
									value={creditDurationInput}
									min={0}
									onChange={(e) => setCreditDurationInput(parseInt(e.target.value))}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="rate" className="block text-sm font-medium leading-6 text-gray-900">Taux d'intérêt (%)</label>
								<Input
									type="number"
									min={0}
									value={rateInput}
									step="0.05"
									id="rate"
									onChange={(e) => setRateInput(parseFloat(e.target.value))}
								/>
							</div>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button onClick={estimateInvestment}>Simuler</Button>
						</DialogClose>
					</DialogFooter>
			</DialogContent>
		</Dialog>
)
}