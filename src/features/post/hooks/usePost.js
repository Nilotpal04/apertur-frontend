import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/post.service";

export function usePost(postId){
    return useQuery({
        queryKey:[
            "post",
            postId
        ],

        queryFn:()=>getPost(postId),

        enabled:Boolean(postId)
    });
}