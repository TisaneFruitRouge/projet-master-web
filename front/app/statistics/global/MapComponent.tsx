"use client";

import { useState } from 'react';
import SelectCity from "@/app/statistics/global/SelectCity";
import { ECityNames } from '@/lib/types/city';

function MapComponent() {
    
    const [selectedCity, setSelectedCity] = useState<ECityNames>(ECityNames.STRASBOURG);

    return (
        <div className="w-1/2 flex flex-col">
            <div className="w-full">
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
