import { ECityNames } from "./city";
import { PropertyType } from "./property";

export type EstimationRequest = {
    hasElevator: boolean;
	lat: number;
	lon: number;
	surface: number;
	bedroom: number;
	floor: number;
	isFurnished: boolean;
	room: number,
	propertyType: PropertyType;
	cityDepartmentCode: number;
	city: ECityNames;
	property_id: string;
}

export type EstimationResponse = {
    estimated_price: number;
}

export type Estimation = {
	id: string;
    type: string;
    price: number;
    dateOfEstimation: string;
    property_id: string;
}