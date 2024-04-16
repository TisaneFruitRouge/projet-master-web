import EstimatePrice from "@/components/property/EstimatePrice";
import { getProperty } from "@/lib/api/properties";
import { Property } from "@/lib/types/property";

export default async function PropertyPage({ params }: { params: { id: string } }) {
    
    const {id} = params;

    const property = await getProperty(id) as Property;

    return (
        <main className="p-8">
            <h1>Property: {id}</h1>
            <EstimatePrice property={property}/>
        </main> 
    )
}