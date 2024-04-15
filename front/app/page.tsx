import PropertyCard from "@/components/dashboard/PropertyCard";
import { Button } from "@/components/ui/button";
import { getPropertiesOfUser } from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import { auth } from "@clerk/nextjs";

export default async function Home() {

  const { userId } = auth();

  let properties:Property[] = [];

  if (userId) {
    properties = await getPropertiesOfUser(userId);
  }
  
  
  return (
    <main className="flex flex-col gap-4 pt-16 p-8">
      <Button className="w-36">Add new property</Button>
      <div className="flex justify-start flex-wrap gap-8">
        {properties.map((property) => <PropertyCard property={property}/>)}
      </div>
    </main>
  );
}
