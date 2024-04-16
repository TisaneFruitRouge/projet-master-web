import Dashboard from "@/app/dashboard/dashboard";
import PropertyCard from "@/components/dashboard/PropertyCard";
import { Button } from "@/components/ui/button";
import { getPropertiesOfUser } from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import { auth } from "@clerk/nextjs";
import AddProperty from "@/components/dashboard/propertyForm";

export default async function Home() {

  const { userId } = auth();

  let properties:Property[] = [];

  if (userId) {
    properties = await getPropertiesOfUser(userId);
  }
  
  
  return (

    <main className="flex flex-col gap-4 pt-16 p-8">
      <AddProperty />
      <div className="flex justify-start flex-wrap gap-8">
        <Dashboard/>
      </div>
    </main>
  );
}
