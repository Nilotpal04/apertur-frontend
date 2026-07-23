import client from "../../../api/client";
import { ENDPOINTS } from "../../../api/client";

export async function getFeed(){
    const response = await client.get(
        ENDPOINTS.FEED
    );

    return response.data;
}