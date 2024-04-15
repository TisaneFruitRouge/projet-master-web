
export async function getPropertiesOfUser(userID: string) {

    const URL = process.env.API_URL as string;

    const response = await fetch(`${URL}/api/users/${userID}/properties`);
    const data = await response.json();

    return data ?? [];
}

export async function addNewProperty(userId: string) {

}