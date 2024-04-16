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
}

export type EstimationResponse = {
    estimated_price: number;
}