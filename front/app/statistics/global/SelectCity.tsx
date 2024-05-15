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
import { ECityNames, cities } from "@/lib/types/city";

interface SelectCity {
    selectedCity: string;
    setSelectedCity: Dispatch<SetStateAction<ECityNames>>;
}

export default function SelectCity({selectedCity, setSelectedCity}:SelectCity) {
    
    return (
        <Select value={selectedCity} onValueChange={(value) => setSelectedCity(value as ECityNames)}>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a city" />
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
    );
}