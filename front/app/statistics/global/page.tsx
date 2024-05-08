import MapComponent from "./MapComponent"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import {SelectScrollable} from "@/app/statistics/global/SelectScrollable";

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
    ]
}

export default async function GlobalStats() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10 flex">
            <div className="w-1/2">
                <DataTable columns={columns} data={data}/>
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="w-full">
                    <SelectScrollable></SelectScrollable>
                </div>
                <div className="w-full">
                    <iframe src="/bordeaux_plot.html" width="100%" height="400"></iframe>
                </div>
            </div>
        </div>
    );
}