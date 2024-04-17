import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
   children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col gap-4 p-8">

			{/*<Separator />*/}
			{children}
		</div>
	);
}