import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Property } from "@/lib/types/property"

import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBackground } from "react-icons/tb";
import { GiCrane } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";

import IconLabel from "../global/IconLabel"

interface PropertyCardProps {
    property: Property;
}


export default async function PropertyCard({property}: PropertyCardProps) {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex w-64 h-40 border border-solid border-black/20 shadow-sm rounded-md hover:cursor-pointer hover:-translate-y-1 duration-300">
            <div className="w-32 h-40 flex flex-col gap-2 p-1 justify-between items-start">
                <h2>{property.name}</h2>
                <h3 className="italic text-sm">{property.adress}</h3>
                <div className="text-xs">{property.description}</div>
                <div className="grid grid-cols-2 gap-2">
                    <IconLabel icon={<MdOutlineBedroomChild />} label={property.bedroom.toString()} />
                    <IconLabel icon={<TbBackground />} label={`${property.floor} m2`}/>
                    <IconLabel icon={<GiCrane/>} label={property.yearOfConstruction.toString()} />
                    <IconLabel icon={<CiParking1/>} label={property.hasParkingSpace ? 'Yes' : 'No'} />
                </div>
            </div>
            <img className="w-32 h-40 rounded-r-md" src="" alt="" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
