import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const cityNames = [
    "bordeaux",
    "lille",
    "lyon",
    "marseille",
    "montpellier",
    "nantes",
    "nice",
    "paris",
    "strasbourg",
    "toulouse",
];

interface SelectScrollableProps {
    setSelectedCity: (city: string) => void;
}

export const SelectScrollable: React.FC<SelectScrollableProps> = ({ setSelectedCity }) => {
    const handleCityChange = (city: string) => {
        setSelectedCity(city);
    };

    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Cities</SelectLabel>
                    {cityNames.map(cityName => (
                        <SelectItem key={cityName} value={cityName} onClick={() => handleCityChange(cityName)}>
                            {cityName}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
