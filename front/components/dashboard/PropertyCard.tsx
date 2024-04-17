import { Property } from "@/lib/types/property";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio"

import NoImage from "@/lib/assets/noimage.jpg"
import Image from "next/image";

interface PropertyCardProps {
    property: Property
}

export default function PropertyCard({property}: PropertyCardProps) {
    return (
        <Link key={property.id} href={`/property/${property.id}`}>
			<div className="flex flex-col gap-2 w-64 bg-slate-100 rounded-xl hover:-translate-y-1 duration-300 shadow-md border border-black border-solid">
				<AspectRatio ratio={16 / 12}>
					<Image 
						className="w-full h-auto mx-auto rounded-t-xl"
						src={NoImage}
						alt="Property" 
						width="384"
						height="512"
					/>
				</AspectRatio>
				<div className="p-2">
					<div className="title-price md:flex justify-between">
						<span className="title font-medium text-lg">Maison</span>
					</div>
					<p className="location">Strasbourg</p>
					<div className="flex justify-between text-xs gap-2 ">
						<Badge>{property.floor} m²</Badge>
						<Badge>3 pièces</Badge>
						<Badge>{property.bedroom} chambres</Badge>
					</div>
				</div>
			</div>
		</Link>
    )
}