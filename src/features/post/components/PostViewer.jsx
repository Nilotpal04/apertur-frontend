import { Heart, Bookmark, MapPin, ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ViewerCard from "./ViewerCard";

function PostViewer({ post }) {
    return (
        <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            
            <div className="bg-[var(--contact-sheet)]">
                <img
                    src={post.image_url}
                    alt={post.content}
                    className="
                        w-full
                        max-h-[650px]
                        object-contain
                    "
                />
            </div>

            <div className="p-5">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-200" />

                    <div>
                        <p className="text-sm font-semibold">
                            @{post.username}
                        </p>

                        <p className="text-sm text-neutral-500">
                            {post.content}
                        </p>
                    </div>
                </div>

                {post.location_name && (
                    <p className="mt-3 text-sm text-neutral-500">
                        📍 {post.location_name}
                    </p>
                )}

                <div className="mt-5 flex gap-3">
                    <button className="rounded-full border px-5 py-2">
                        ♡ {post.likes_count}
                    </button>

                    <button className="rounded-full border px-5 py-2">
                        ♧ Frame
                    </button>
                </div>
            </div>
        </article>
    );
}

export default PostViewer;