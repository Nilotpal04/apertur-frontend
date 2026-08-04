import { useParams } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout"

function PostPage() {
    const {id} = useParams();

    return (
        <MainLayout>
            <div className="max-w-6xl mx-auto py-8">
                <h1 className="text-3xl font-semibold">
                    Post Page
                </h1>

                <p className="mt-4 text-neutral-500">
                    post ID:
                </p>

                <p className="font-mono">
                    {id}
                </p>
            </div>
        </MainLayout>
    );
}

export default PostPage;