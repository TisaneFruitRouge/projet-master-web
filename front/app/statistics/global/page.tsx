import * as React from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { SelectScrollable } from "./SelectScrollable";
import MapComponent from "./MapComponent";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ];
}

const GlobalStats: React.FC = () => {
    const [selectedCity, setSelectedCity] = React.useState<string>("");

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
    };

    const data = React.useMemo(async () => {
        return await getData();
    }, []);

    return (
        <div className="container mx-auto py-10 flex">
            <div className="w-1/2">
                <DataTable columns={columns} data={data} />
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="w-full">
                    <SelectScrollable setSelectedCity={handleCityChange} />
                </div>
                <div className="w-full">
                    {selectedCity && <MapComponent city={selectedCity} />}
                </div>
            </div>
        </div>
    );
};

export default GlobalStats;
