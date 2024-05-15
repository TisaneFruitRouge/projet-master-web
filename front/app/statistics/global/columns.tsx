"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StatVille = {
    ville: string
    meanPrice: number
    medianPrice: number
    meanSurface: number
    medianSurface: number
}

export const columns: ColumnDef<StatVille>[] = [
    {
        accessorKey: "ville",
        header: "Ville",
    },
    {
        accessorKey: "meanPrice",
        header: "Prix Moyen",
    },
    {
        accessorKey: "medianPrice",
        header: "Prix Median",
    },
    {
        accessorKey: "meanSurface",
        header: "Surface Moyenne",
    },
]
