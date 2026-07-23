import client from "../../../api/client";
import ENDPOINTS from "../../../api/endpoints";

export async function  login(credentials) {
    const response = await client.post(
        ENDPOINTS.AUTH.LOGIN,
        credentials
    );
    return response.data;
}

export async function getCurrentUser() {

    const response = await client.get(
        ENDPOINTS.USERS.ME
    );

    return response.data;

}