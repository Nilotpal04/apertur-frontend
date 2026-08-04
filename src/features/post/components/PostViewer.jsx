import { Heart, Bookmark, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ViewerCard from "./ViewerCard";

function PostViewer({ post }) {
    const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto py-8">

            <button
                onClick={() => navigate(-1)}
                className="
                    mb-8
                    flex
                    items-center
                    gap-2
                    text-neutral-500
                    hover:text-black
                    transition
                "
            >
                <ArrowLeft size={18} />
                Back
            </button>
            <ViewerCard>
                <div
                    className="
                        grid
                        lg:grid-cols-[1.2fr_420px]
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            bg-neutral-50
                            p-8
                        "
                    >
                    
                        <img
                            src={post.image_url}
                            alt={post.content}
                            className="
                                w-full
                                max-h-[65vh]
                                object-contain
                                rounded-2xl
                            "
                        />
                    </div>

                    <aside
                        className="
                            border-1
                            border-neutral-200
                            p-8
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <h2
                                    className="
                                        text-3xl
                                        font-semibold
                                    "
                                >
                                    {post.content}
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-neutral-500
                                    "
                                >
                                    by @{post.username}
                                </p>

                            </div>

                        </div>

                        {
                            post.location_name && (
                                <div
                                    className="
                                        mt-6
                                        flex
                                        items-center
                                        gap-2
                                        text-neutral-500
                                    "
                                >
                                    <MapPin size={18} />

                                    {post.location_name}

                                </div>
                            )
                        }

                        <div
                            className="
                                mt-10
                                flex
                                gap-3
                            "
                        >

                            <button
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    px-5
                                    py-3
                                    hover:bg-neutral-100
                                    transition
                                "
                            >
                                <Heart size={18} />

                                {post.likes_count}
                            </button>

                            <button
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    px-5
                                    py-3
                                    hover:bg-neutral-100
                                    transition
                                "
                            >
                                <Bookmark size={18} />

                                Frame
                            </button>

                        </div>

                    </aside>

                </div>
            </ViewerCard>
        </section>
    );
}

export default PostViewer;