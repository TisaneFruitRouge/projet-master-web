import EstimatePrice from "@/components/property/EstimatePrice";
import {getImage, getProperty} from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import Image from "next/image";
import NoImage from "@/lib/assets/noimage.jpg"
import {auth} from "@clerk/nextjs";
import PutOnSale from "@/components/property/PutOnSale";
import IconLabel from "@/components/global/IconLabel";
import PropertyLocationMap from "@/components/property/PropertyLocationMap";

import { TbBackground, TbCrane } from "react-icons/tb";
import { FaBuilding, FaDoorClosed } from "react-icons/fa";
import { MdBedroomParent, MdOutlineElevator } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { LuParkingCircle } from "react-icons/lu";
import { PiCouchLight } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";

export default async function PropertyPage({ params }: { params: { id: string } }) {
    const { userId } = auth();
    const { id } = params;

    const property = await getProperty(id) as Property;
    const isUserProperty = userId === property.user_id;

    console.log(property)

    if (property.image) {
        property.image = await getImage(property.image);
    }

    return (
        <main className="p-8 flex flex-col gap-2 shadow-sm">
            <div className="flex justify-between gap-4 p-4 border border-solid border-black/10 rounded-md">
                <Image 
                    className="rounded-sm w-fit"
                    src={property.image ?? NoImage}
                    alt="Property" 
                />
                <div className="flex flex-col gap-8 w-full">
                    <div className="relative">
                        <h1 className="text-xl font-bold">{property.name}</h1>
                        <p className="italic text-gray-600 text-sm">{property.adress}</p>
                        <Badge className="absolute top-0 right-0">
                            {
                                (property.sold_price === null || property.sold_price === 0) ? 'Pas en vente' :
                                !property.is_sold ? 'En vente' :
                                `Vendu le ${property.sold_date}`
                            }
                        </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <IconLabel label={`${property.surface} m²`} icon={<TbBackground />} />
                        <IconLabel label={`${property.floor}`} icon={<FaBuilding />} />
                        <IconLabel label={`${property.room}`} icon={<FaDoorClosed />} />
                        <IconLabel label={`${property.bedroom}`} icon={<MdBedroomParent />} />
                        <IconLabel label={`${property.yearOfConstruction}`} icon={<TbCrane />} />

                    </div>
                    <div className="flex flex-col gap-2">
                        <IconLabel label={`${property.hasElevator ? 'Oui' : 'Non'}`} icon={<MdOutlineElevator />} />
                        <IconLabel label={`${property.hasGarden ? 'Oui' : 'Non'}`} icon={<GiFlowerPot />} />
                        <IconLabel label={`${property.hasParkingSpace ? 'Oui' : 'Non'}`} icon={<LuParkingCircle />} />
                        <IconLabel label={`${property.isFurnished ? 'Oui' : 'Non'}`} icon={<PiCouchLight />} />
                    </div>
                </div>
                <div className="w-1/4">
                    <PropertyLocationMap long={property.long as number} lat={property.lat as number} />
                </div>
            </div>
            <PutOnSale property={property} isUserProperty={isUserProperty}/>
            <EstimatePrice property={property}/>
        </main> 
    )
}