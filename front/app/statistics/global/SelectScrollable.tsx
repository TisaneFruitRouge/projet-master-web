import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

export function SelectScrollable() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Cities</SelectLabel>
                    {/* Render SelectItems for each city */}
                    {cityNames.map(cityName => (
                        <SelectItem key={cityName} value={cityName}>
                            {cityName}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}