
export type PropertyType = 1 | 2 | 3 | 4; //1 = apartment, 2=house, 3=garage, 4=other

export type Property = {
    id: string;
    user_id: string;
    name: string;
    adress: string;
    lat: number | null;
    long: number | null;
    created_at: Date;
    description: string;
    surface: number;
    propertyType: PropertyType;
    hasElevator: boolean;
    hasGarden: boolean;
    hasParkingSpace: boolean;
    yearOfConstruction: number | null;
    bedroom: number;
    room: number;
    floor: number;
    isFurnished : boolean;
    cityDepartmentCode: number | null;
    image?: string | null;
    is_sold: boolean | null;
    sold_price: number | null;
    sold_date: Date | null;
}