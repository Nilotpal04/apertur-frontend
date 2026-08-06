import { useParams } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout"
import {usePost} from "../hooks/usePost"
import PostViewer from "../components/PostViewer"

function PostPage(){
    const { id } = useParams();

    const {
        data: post,
        isLoading,
        error,
    } = usePost(id);

    if (isLoading) {
        return (
            <MainLayout>
                <p className="p-8">Loading...</p>
            </MainLayout>
        );
    }

    if (error) {
        return (
            <MainLayout>
                <p className="p-8 text-red-500">
                    Failed to load post.
                </p>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <PostViewer post={post} />
        </MainLayout>
    );
}

export default PostPage;