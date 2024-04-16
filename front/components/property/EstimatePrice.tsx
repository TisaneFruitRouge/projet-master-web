"use client"

import { Property } from "@/lib/types/property";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getEstimation } from "@/lib/api/estimate";

interface EstimatePriceProps {
    property: Property
}

export default function EstimatePrice({property}: EstimatePriceProps) {

    const [estimation, setEstimation] = useState(0);

    const estimate = async () => {
        const estimation = await getEstimation({
            hasElevator: property.hasElevator || false,
            lat: property.lat || 50.629250,
            lon: property.long || 3.057256,
            surface: property.surface || 30,
            bedroom: property.bedroom,
            floor: property.floor,
            isFurnished: property.isFurnished,
            room: 4,
            propertyType: property.propertyType,
            cityDepartmentCode: property.cityDepartmentCode || 59000
        })
        console.log(estimation)
    }

    return (
        estimation === 0 ? 
            <div>
                <Button onClick={estimate}>Estimate the price</Button>
            </div>
            :
            <div>
            </div>
    )
}