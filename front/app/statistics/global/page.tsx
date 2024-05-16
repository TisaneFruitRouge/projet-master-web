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
        <div className="flex flex-col gap-8 container mx-auto py-10 px-64">
            <div className="w-full flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-center">Statistiques par villes</h2>
                <DataTable columns={columns} data={data}/>
            </div>
            <MapComponent />
        </div>
    );
}