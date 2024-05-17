import { Separator } from "@/components/ui/separator";
import { getSingleInvestmentSimulation } from "@/lib/api/investment";
import { Investment } from "@/lib/types/investment";

export default async function InvestmentSimulationList({params}: {params: {id: string, simulation_id: string}}) {

    const investment = await getSingleInvestmentSimulation(params.simulation_id) as Investment;
    console.log(investment)
	return (
		<div className="container mx-auto py-10 flex flex-col gap-16 w-[90vw]">
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-bold">Votre investissement</h1>
                <div className="flex gap-8">
                    <div className="rounded-sm border border-solid border-black/30 p-8 w-8/12">
                        <div><b>Montant</b>: {investment.credit_amount} €</div>
                        <div><b>Durée</b>: {investment.credit_duration} mois</div>
                        <div><b>Taux</b>: {investment.interest_rate} %</div>
                        <div><b>Taux</b>: {investment.internal_rate_of_profitability.toFixed(2)} €/mois</div>
                        <Separator className="my-4"/>
                        <div><b>Loyer</b>: {investment.monthly_rent} €/mois</div>
                        <div><b>Charges mensuelles</b>: {investment.monthly_charges} €/mois</div>
                        <div><b>Taxe foncière</b>: {investment.property_tax} €/an</div>
                    </div>
                    <div className="flex flex-col justify-between items-center rounded-sm border border-solid border-black/30 p-8 w-4/12">
                        <div className={`w-fit p-4 text-xl font-bold rounded-sm ${investment.monthly_cashflow >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                            {investment.monthly_cashflow >= 0 ? '+' : ''}{investment.monthly_cashflow.toPrecision(3)}€
                        </div>
                        <div className="w-full">
                            <div>
                                Renta. brut: {(investment.gross_profitability*100).toPrecision(3)}%
                            </div>
                            <div>
                                Renta. nette: {(investment.net_profitability*100).toPrecision(3)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
}