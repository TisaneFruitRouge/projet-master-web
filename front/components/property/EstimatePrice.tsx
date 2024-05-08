"use client"

import { Property } from "@/lib/types/property";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getEstimation, getPropertyEstimation } from "@/lib/api/estimate";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface EstimatePriceProps {
    property: Property
}

export default function EstimatePrice({property}: EstimatePriceProps) {

    const [estimation, setEstimation] = useState(0);
    const [dateOfEstimation, setDateOfEstimation] = useState<null | string>(null);

    const [loading, setLoading] = useState(true);

    const estimate = async () => {
        setLoading(true)
        const estimation = await getEstimation({
            hasElevator: property.hasElevator || false,
            lat: property.lat || 50.629250,
            lon: property.long || 3.057256,
            surface: property.surface || 20,
            bedroom: property.bedroom,
            floor: property.floor,
            isFurnished: property.isFurnished,
            room: 4,
            propertyType: property.propertyType,
            cityDepartmentCode: property.cityDepartmentCode || 59,
            property_id: property.id
        })
        setEstimation(estimation ?? 0)
        setLoading(false)
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const estimation = await getPropertyEstimation(property.id);
            if (estimation !== null) {
                setEstimation(estimation.price);
                setDateOfEstimation(estimation.dateOfEstimation);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <div className={`${estimation === 0 ? 'bg-white' : 'bg-green-50'} rounded-md border border-solid border-black/10 p-4 shadow-md`}>
            {
                loading ?
                    <h1 className="text-center">Loading...</h1> 
                :
                estimation === 0 ? 
                    <div>
                        <Button onClick={estimate}>Estimate the price</Button>
                    </div>
                    :
                    <div className="relative flex flex-col gap-4 justify-center items-center p-8">
                        {dateOfEstimation !== null && <span className="absolute top-0 left-0 text-sm italic">Date: {dateOfEstimation}</span>}
                        <h2 className="italic text-green-700">Estimated price:</h2>
                        <h1 className="text-4xl font-extrabold text-green-800">{estimation}€</h1>
                    </div>
            }
        </div>
    )
}