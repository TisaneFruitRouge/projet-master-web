import {Investment} from "@/lib/types/investment";
import {ColumnDef} from "@tanstack/react-table";


export const columns: ColumnDef<Investment>[] = [
	{
		accessorKey: "simulationDate",
		header: "Date de simulation",
	},
	{
		accessorKey: "monthlyRent",
		header: "Loyer mensuel",
	},

];