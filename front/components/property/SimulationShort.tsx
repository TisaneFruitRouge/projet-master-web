"use client"

import { Investment } from "@/lib/types/investment";
import IconLabel from "../global/IconLabel";

import { TbBrandCashapp } from "react-icons/tb";
import { MdOutlinePercent } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface SimulationShortProps {
    investment: Investment;
}

export default function SimulationShort({investment}:SimulationShortProps) {

    const { push } = useRouter();

    return (
        <div
            onClick={() => push(`/property/${investment.property_id}/simulations/${investment.id}`)}
            className="flex justify-between relative rounded-sm w-full p-8 shadow-sm hover:-translate-y-1 duration-200 hover:cursor-pointer border border-solid border-black/10"
        >
            <p className="absolute top-1 left-1 text-xs italic">{investment.simulation_date}</p>
            <div className="flex gap-4">
                <IconLabel icon={<TbBrandCashapp />} label={`${investment.credit_amount} €`} /> 
                <IconLabel icon={<BsCashStack />} label={`${investment.credit_duration} €`} /> 
                <IconLabel icon={<MdOutlinePercent />} label={`${investment.interest_rate}%`} /> 
            </div>
            <div className="flex gap-8 items-center">
                <div>
                    <div>
                        Renta. brut: {(investment.gross_profitability*100).toPrecision(3)}%
                    </div>
                    <div>
                        Renta. nette: {(investment.net_profitability*100).toPrecision(3)}%
                    </div>
                </div>
                <div className={`p-2 rounded-sm ${investment.monthly_cashflow >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {investment.monthly_cashflow >= 0 ? '+' : ''}{investment.monthly_cashflow.toPrecision(3)}€
                </div>
            </div>
        </div> 
    );
}