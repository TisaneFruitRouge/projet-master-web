import EstimatePrice from "@/components/property/EstimatePrice";
import {getImage, getProperty} from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import Image from "next/image";
import NoImage from "@/lib/assets/noimage.jpg"
import {auth} from "@clerk/nextjs";
import PutOnSale from "@/components/property/PutOnSale";

export default async function PropertyPage({ params }: { params: { id: string } }) {
    const { userId } = auth();
    const {id} = params;

    const property = await getProperty(id) as Property;
    const isUserProperty = userId === property.user_id;

    if (property.image) {
        property.image = await getImage(property.image);
    }

    return (
        <main className="p-8 flex flex-col gap-2 shadow-sm">
            <div className="p-4 border border-solid border-black/10 rounded-md flex gap-4">
                <Image 
                    className="rounded-sm"
                    src={property.image ?? NoImage}
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
            <PutOnSale property={property} isUserProperty={isUserProperty}/>
            <EstimatePrice property={property}/>
        </main> 
    )
}