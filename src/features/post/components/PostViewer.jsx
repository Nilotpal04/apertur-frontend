import { Heart, Bookmark, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

            <div
                className="
                    grid
                    lg:grid-cols-[1.5fr_500px]
                    gap-14
                    items-start
                "
            >

                {/* Photo */}

                <div
                    className="
                        rounded-3xl
                        overflow-hidden
                        bg-neutral-100
                    "
                >
                    <img
                        src={post.image_url}
                        alt={post.content}
                        className="
                            w-full
                            object-cover
                        "
                    />
                </div>

                {/* Sidebar */}

                <aside className="sticky top-28">

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

        </section>
    );
}

export default PostViewer;