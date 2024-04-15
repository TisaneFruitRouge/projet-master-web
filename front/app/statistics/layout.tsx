import { Separator } from "@/components/ui/separator";
import { StatisticsNav } from "@/components/stats/StatisticsNav";

export default function StatisticsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col gap-4 p-8">
            <StatisticsNav />
            <Separator />
            {children}
        </div>
    );
  }