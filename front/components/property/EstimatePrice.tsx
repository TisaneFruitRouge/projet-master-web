"use client"

import { Property } from "@/lib/types/property";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getEstimation } from "@/lib/api/estimate";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

import NoImage from "@/lib/assets/noimage.jpg"

interface EstimatePriceProps {
    property: Property
}

export default function EstimatePrice({property}: EstimatePriceProps) {

    const [estimation, setEstimation] = useState(0);
    const [loading, setLoading] = useState(false);

    const estimate = async () => {
        setLoading(true)
        console.log(property)
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
            cityDepartmentCode: property.cityDepartmentCode || 59
        })
        setEstimation(estimation ?? 0)
        setLoading(false)
    }

    return (
        <div className={`${estimation === 0 ? 'bg-white' : 'bg-green-50'} rounded-md border border-solid border-black/10 p-4 shadow-md flex justify-center`}>
            {
                loading ?
                <></> 
                :
                estimation === 0 ? 
                    <div>
                        <Button onClick={estimate}>Estimate the price</Button>
                    </div>
                    :
                    <div className="flex flex-col gap-4 justify-center items-center p-8">
                        <h2 className="italic text-green-700">Estimated price:</h2>
                        <h1 className="text-4xl font-extrabold text-green-800">{estimation}€</h1>
                    </div>
            }
        </div>
    )
}