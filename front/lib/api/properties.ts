import {Property} from "../types/property";

export async function getPropertiesOfUser(userID: string) {

    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    const response = await fetch(`${URL}/api/users/${userID}/properties`);
    const data = await response.json();

    return data ?? [];
}

export async function addNewProperty(userId: string, property: Property) {

    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    const response = await fetch(`${URL}/api/properties/`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                name: property.name,
                adress: property.adress,
                city: property.city,
                lat: property.lat,
                long: property.long,
                description: property.description,
                surface: property.surface,
                propertyType: property.propertyType,
                hasElevator: property.hasElevator,
                hasGarden: property.hasGarden,
                hasParkingSpace: property.hasParkingSpace,
                yearOfConstruction: property.yearOfConstruction,
                bedroom: property.bedroom,
                room: property.room,
                floor: property.floor,
                isFurnished: property.isFurnished,
                cityDepartmentCode: property.cityDepartmentCode,
                image: property.image
            })
        }
    )

    if (response.ok) {
        const newProperty = await response.json();
        return newProperty
    } else return null;

}

export async function getProperty(id: string) {
    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    const response = await fetch(`${URL}/api/properties/${id}/`);
    const data:Property | null = await response.json();

    return data ?? null;
}

export async function updateProperty(property: Property) {
    const URL = process.env.NEXT_PUBLIC_API_URL as string;
    const id = property.id;

    const response = await fetch(`${URL}/api/properties/${id}/`,
        {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: property.id,
                user_id: property.user_id,
                name: property.name,
                adress: property.adress,
                lat: property.lat,
                long: property.long,
                description: property.description,
                surface: property.surface,
                propertyType: property.propertyType,
                hasElevator: property.hasElevator,
                hasGarden: property.hasGarden,
                hasParkingSpace: property.hasParkingSpace,
                yearOfConstruction: property.yearOfConstruction,
                bedroom: property.bedroom,
                room: property.room,
                floor: property.floor,
                isFurnished: property.isFurnished,
                cityDepartmentCode: property.cityDepartmentCode,
                image: property.image,
                is_sold: property.is_sold,
                sold_price: property.sold_price,
                sold_date: property.sold_date
            })
        }
    )

    if (response.ok) {
        return await response.json()
    } else return null;

}

export async function getProperties() {
    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    const response = await fetch(`${URL}/api/properties`);
    const data = await response.json();

    return data ?? [];
}
export async function getImage(imageUrl: string) {
    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    const response = await fetch(`${URL}${imageUrl}`);
    const data = await response.json();

    return data ?? null;
}