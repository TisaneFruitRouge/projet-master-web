import Dashboard from "@/app/dashboard/dashboard";
import { getPropertiesOfUser } from "@/lib/api/properties";
import { Property } from "@/lib/types/property";
import { auth } from "@clerk/nextjs";
import AddProperty from "@/components/dashboard/PropertyForm";

export default async function Home() {

  const { userId } = auth();

  let properties:Property[] = [];

  if (userId) {
    properties = await getPropertiesOfUser(userId);
  }
  
  return (
    <main className="flex flex-col gap-4 p-8">
      <AddProperty />
      <Dashboard/>
    </main>
  );
}
