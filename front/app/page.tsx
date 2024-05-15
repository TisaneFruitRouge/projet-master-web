import Dashboard from "@/components/dashboard/Dashboard";
import { getPropertiesOfUser } from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import { auth } from "@clerk/nextjs";
import PropertyForm from "@/components/dashboard/PropertyForm"

export default async function Home() {

  
  
  return (
    <main className="flex flex-col gap-4 p-8">
      <PropertyForm />
    </main>
  );
}
