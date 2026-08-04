import client from "../../../api/client"

export async function getPost(postId){
    const response = await client.get(
        `posts/${postId}`
    );

    return response.data;
}