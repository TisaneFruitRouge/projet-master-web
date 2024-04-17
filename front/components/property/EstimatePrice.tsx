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
        loading ?
        <></> 
        :
        estimation === 0 ? 
            <div>
                <Button onClick={estimate}>Estimate the price</Button>
            </div>
            :
            <div>
                <h1>Etimated price: {estimation}€</h1>
            </div>
    )
}