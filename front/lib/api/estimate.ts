import { EstimationRequest } from "../types/estimation";

//api/prediction
export async function getEstimation(request: EstimationRequest) {
    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    const response = await fetch(`${URL}/api/prediction/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }
    )

    if (response.ok) {
        const estimation: EstimationRequest = await response.json();
        return estimation
    } else return null;
}