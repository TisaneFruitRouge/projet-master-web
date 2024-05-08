import { Estimation, EstimationRequest, EstimationResponse } from "../types/estimation";

const URL = process.env.NEXT_PUBLIC_API_URL as string;

//api/prediction
export async function getEstimation(request: EstimationRequest) {
    
    const response = await fetch(`${URL}/api/prediction/`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }
    )

    if (response.ok) {
        const {estimated_price}: EstimationResponse = await response.json();
        return estimated_price
    } else return null;
}

export async function getPropertyEstimation(id: string) {
    const response = await fetch(`${URL}/api/prediction/${id}`,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )

    if (response.ok) {
        const estimation: Estimation = await response.json();
        return estimation
    } else return null;
}