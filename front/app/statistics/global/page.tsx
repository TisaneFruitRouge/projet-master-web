import MapComponent from "./MapComponent"
import { StatVille, columns } from "./columns"
import { DataTable } from "./data-table"
import {statVilleData} from "@/lib/stats/statVilleData";

async function getData(): Promise<StatVille[]> {
    return statVilleData
}

export default async function GlobalStats() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10 flex">
            <div className="w-1/2">
                <DataTable columns={columns} data={data}/>
            </div>
            <MapComponent />
        </div>
    );
}