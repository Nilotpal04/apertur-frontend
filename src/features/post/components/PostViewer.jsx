import { Heart, Bookmark, MapPin, ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ViewerCard from "./ViewerCard";

function PostViewer({ post }) {
    const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto py-6 px-4">
            <button
                onClick={() => navigate(-1)}
                className="
                    mb-4
                    flex
                    items-center
                    gap-2
                    text-neutral-600
                    hover:text-black
                    transition
                    text-sm
                    font-medium
                "
            >
                <ArrowLeft size={16} />
                Back
            </button>
            
            <ViewerCard>
                <div
                    className="
                        grid
                        grid-cols-[1fr_320px]
                        bg-white
                    "
                >
                    {/* Image Section - Left */}
                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            p-4
                            bg-[var(--contact-sheet)]
                            min-h-[500px]
                        "
                    >
                        <img
                            src={post.image_url}
                            alt={post.content}
                            className="
                                max-h-[480px]
                                max-w-full
                                object-contain
                                rounded-lg
                            "
                        />
                    </div>

                    {/* Info Section - Right */}
                    <div
                        className="
                            p-5
                            flex
                            flex-col
                            bg-white
                            border-l
                            border-neutral-200
                            justify-between
                        "
                    >
                        {/* Top: Avatar + User + Caption */}
                        <div className="flex-1">
                            {/* Avatar and User */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                                    {post.username?.charAt(0).toUpperCase() || <User size={20} />}
                                </div>
                                <div>
                                    <p className="font-medium text-sm">
                                        {post.username}
                                    </p>
                                </div>
                            </div>

                            {/* Caption */}
                            <h2 className="mt-3 text-base font-normal leading-snug line-clamp-2">
                                {post.content}
                            </h2>

                            {post.location_name && (
                                <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
                                    <MapPin size={14} />
                                    {post.location_name}
                                </div>
                            )}
                        </div>

                        {/* Bottom: Like and Frame buttons */}
                        <div className="mt-4 pt-4 border-t border-neutral-200 flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 rounded-full border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 px-4 py-2.5 transition text-sm font-medium text-neutral-700">
                                <Heart size={18} />
                                {post.likes_count}
                            </button>

                            <button className="flex-1 flex items-center justify-center gap-2 rounded-full border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 px-4 py-2.5 transition text-sm font-medium text-neutral-700">
                                <Bookmark size={18} />
                                Frame
                            </button>
                        </div>
                    </div>
                </div>
            </ViewerCard>
        </section>
    );
}

export default PostViewer;