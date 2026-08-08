import { useParams } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import { usePost } from "../hooks/usePost";
import PostMasonry from "../components/PostMasonry";
import { useFeed } from "../../feed/hooks/useFeed";

function PostPage() {
    const { id } = useParams();

    const {
        data: post,
        isLoading,
        error,
    } = usePost(id);

    const {
        data: feed,
        isLoading: feedLoading,
        error: feedError,
    } = useFeed();

    if (isLoading || feedLoading) {
        return (
            <MainLayout>
                <p className="p-8">Loading...</p>
            </MainLayout>
        );
    }

    if (error || feedError || !post) {
        return (
            <MainLayout>
                <p className="p-8 text-red-500">
                    Failed to load post.
                </p>
            </MainLayout>
        );
    }

    const suggestions = feed?.posts?.filter(
        (p) => p.id !== post.id
    ) ?? [];

    return (
        <MainLayout>
            <PostMasonry
                post={post}
                suggestions={suggestions}
            />
        </MainLayout>
    );
}

export default PostPage;