"use client";

import { useState } from 'react';
import SelectCity from "@/app/statistics/global/SelectCity";
import { ECityNames } from '@/lib/types/city';

function MapComponent() {
    
    const [selectedCity, setSelectedCity] = useState<ECityNames>(ECityNames.STRASBOURG);

    return (
        <div className="w-full flex flex-col gap-4 items-center">
            <h2 className="font-bold text-2xl text-center">Heat map des prix à {selectedCity} </h2>
            <div className="w-full flex flex-col items-center">
                <SelectCity
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                />
            </div>
            <div className="w-full">
                <iframe src={`/${selectedCity}_plot.html`} width="100%" height="400"></iframe>
            </div>
        </div>
    );
}

export default MapComponent;
