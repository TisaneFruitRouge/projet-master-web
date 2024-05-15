"use client";

import {Property} from "@/lib/types/property";
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";

interface EstimateInvestmentProps {
	property: Property
}

export default function EstimateInvestment({property}: EstimateInvestmentProps) {
	const [rentInput, setRentInput] = useState(0);
	const [rateInput, setRateInput] = useState(0);
	const [creditInput, setCreditInput] = useState(0);
	const [creditDurationInput, setCreditDurationInput] = useState(0);
	const [chargeInput, setChargeInput] = useState(0);
	const [propertyTaxInput, setPropertyTaxInput] = useState(0);

	return (
		<Dialog>
		<DialogTrigger asChild>
			<Button>Estimate investment</Button>
		</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Estimate an investment</DialogTitle>
				</DialogHeader>
					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold text-gray-900">Property Informations</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Monthly Rent (€)</label>
								<Input
									type="number"
									id="price"
									value={rentInput}
									min={0}
									onChange={(e) => setRentInput(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="charge" className="block text-sm font-medium leading-6 text-gray-900">Monthly Charges (€)</label>
								<Input
									type="number"
									min={0}
									value={chargeInput}
									id="charge"
									onChange={(e) => setChargeInput(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="property-tax" className="block text-sm font-medium leading-6 text-gray-900">Property Tax (€)</label>
								<Input
									type="number"
									min={0}
									value={propertyTaxInput}
									id="property-tax"
									onChange={(e) => setPropertyTaxInput(parseFloat(e.target.value) || 0)}
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="mt-2 text-base font-semibold text-gray-900">Credit Informations</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="credit" className="block text-sm font-medium leading-6 text-gray-900">Credit (€)</label>
								<Input
									type="number"
									min={0}
									value={creditInput}
									id="credit"
									onChange={(e) => setCreditInput(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="credit-duration" className="block text-sm font-medium leading-6 text-gray-900">Credit Duration
									(months)</label>
								<Input
									type="number"
									id="credit-duration"
									value={creditDurationInput}
									min={0}
									onChange={(e) => setCreditDurationInput(parseInt(e.target.value) || 0)}
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="rate" className="block text-sm font-medium leading-6 text-gray-900">Interest Rate (%)</label>
								<Input
									type="number"
									min={0}
									value={rateInput}
									step="0.05"
									id="rate"
									onChange={(e) => setRateInput(parseFloat(e.target.value) || 0)}
								/>
							</div>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button>Estimate</Button>
						</DialogClose>
					</DialogFooter>
			</DialogContent>
		</Dialog>
)
}