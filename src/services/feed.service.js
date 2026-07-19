import client from "../api/client";
import ENDPOINTS from "../api/endpoints";

export async function getFeed() {
  const response = await client.get(ENDPOINTS.FEED);

  return response.data;
}