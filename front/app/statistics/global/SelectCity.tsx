import type { Dispatch, SetStateAction } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ECityNames } from "@/lib/types/city";

interface SelectCity {
    selectedCity: string;
    setSelectedCity: Dispatch<SetStateAction<ECityNames>>;
}

export default function SelectCity({selectedCity, setSelectedCity}:SelectCity) {
    
    const cities = [
        ECityNames.BORDEAUX,
        ECityNames.LILLE,
        ECityNames.LYON,
        ECityNames.MARSEILLE,
        ECityNames.MONTPELLIER,
        ECityNames.NANTES,
        ECityNames.NICE,
        ECityNames.PARIS,
        ECityNames.STRASBOURG,
        ECityNames.TOULOUSE
    ]
    
    return (
        <div className="flex flex-row items-center">
            <p className="mr-4">Choisissez une ville :</p>
            <Select value={selectedCity} onValueChange={(value) => setSelectedCity(value as ECityNames)}>
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select a city"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Cities</SelectLabel>
                        {cities.map(city => (
                            <SelectItem key={city} value={city}>
                                {city}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}