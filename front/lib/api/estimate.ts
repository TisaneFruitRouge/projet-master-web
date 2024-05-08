import { EstimationRequest, EstimationResponse } from "../types/estimation";

//api/prediction
export async function getEstimation(request: EstimationRequest) {
    const URL = process.env.NEXT_PUBLIC_API_URL as string;

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