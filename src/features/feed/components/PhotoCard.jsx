import { useNavigate } from "react-router-dom";

function PhotoCard({ post }) {
    const navigate = useNavigate();

    return (
        <article
        onClick={() => {
            console.log("Clicked!", post.id);
            navigate(`/post/${post.id}`);
        }}
        className="mb-6 break-inside-avoid group cursor-pointer relative">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl bg-[var(--contact-sheet)]">
                <img
                    src={post.image_url}
                    alt={post.content}
                    loading="lazy"
                    className="w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            </div>
            <div className="flex items-start justify-between px-1 pt-2.5">
                <div className="flex flex-col max-w-[90%]">
                    <h3 className="text-sm font-semibold text-[var(--darkroom-ink)] leading-tight line-clamp-2">
                        {post.content}
                    </h3>
                </div>
                <button className="text-neutral-400 hover:bg-neutral-100 p-1 rounded-full transition mt-1">
                    ...
                </button>
            </div>
        </article>
    )
}

export default PhotoCard;