function PhotoCard({ post }) {
    return (
        <article className="mb-6 break-inside-avoid group cursor-pointer">
            <div className="overflow-hidden rounded-2xl bg-[var(--contact-sheet)]">
                <img
                    src={post.image_url}
                    alt={post.content}
                    loading="lazy"
                    className="w-full rounded-xl object-cover transition duration-700 group-hover:scale-105"
                />
            </div>

            <div className="flex items-start justify-between px-2 pt-3">
                <div>
                    <h3 className="text-sm text-[var(--darkroom-ink)]">
                        {post.content}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--contact-sheet)]">
                        {post.username}
                    </p>
                </div>

                <button className="text-neutral-400 hover:text-black transition">
                    ...
                </button>
            </div>
        </article>
    )
}

export default PhotoCard;