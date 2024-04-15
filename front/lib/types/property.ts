export type Property = {
    id: string;
    user_id: string;
    name: string;
    adress: string;
    lat: number;
    long: number;
    created_at: Date;
    description: string;
    surface: number;
    propertyType: 1 | 2; //1 = apartment, 2=house
    hasElevator: boolean;
    hasGarden: boolean;
    hasParkingSpace: boolean;
    yearOfConstruction: number;
    bedroom: number;
    floor: number;
    isFurnished : boolean;
    cityDepartmentCode: number;
}   