import EstimatePrice from "@/components/property/EstimatePrice";
import { getProperty } from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import Image from "next/image";
import NoImage from "@/lib/assets/noimage.jpg"

export default async function PropertyPage({ params }: { params: { id: string } }) {
    
    const {id} = params;

    const property = await getProperty(id) as Property;

    return (
        <main className="p-8 flex flex-col gap-2 shadow-sm">
            <div className="p-4 border border-solid border-black/10 rounded-md flex gap-4">
                <Image 
                    className="rounded-sm"
                    src={NoImage}
                    alt="Property" 
                    width="384"
                    height="512"
                />
                <div className="flex flec-col gap-4">
                    <div>
                        <h1 className="text-xl font-bold">{property.name}</h1>
                        <p className="italic text-gray-600 text-sm">{property.description}</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <EstimatePrice property={property}/>
        </main> 
    )
}