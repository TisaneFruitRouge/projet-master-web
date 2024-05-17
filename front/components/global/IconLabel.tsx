import React from "react"
import { Label } from "../ui/label";

interface IconLabel {
    icon: React.ReactNode;
    label: string | number;
}

export default function IconLabel({icon, label}: IconLabel) {
    return (
        <div className="flex gap-1">
            {icon}
            <Label>{label}</Label>
        </div>
    )
}