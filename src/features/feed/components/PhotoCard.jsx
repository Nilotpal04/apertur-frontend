function PhotoCard({ post }) {
    return (
        <article
            className="
                mb-6
                break-inside-avoid
                group
                cursor-pointer
            "
        >

            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    bg-[var(--contact-sheet)]
                "
            >
            <img
                src={`${post.image_url}?auto=format&fit=crop&w=800`}
                alt={post.title}
                loading="lazy"
                className="
                    w-full
                    rounded-2xl
                    transition
                    duration-700
                    group-hover:scale-105
                "
            />
            </div>

            <div
                className="
                    flex
                    items-start
                    justify-between
                    px-2
                    pt-3
                "
            >

                <div>
                    <h3
                        className="
                            text-sm
                            text-[var(--darkroom-ink)]
                        "
                    >
                        {post.title}
                    </h3>

                    <p
                        className="
                            mt-1
                            text-xs
                            text-[var(--contact-sheet)]
                        "
                    >
                        {post.location}
                    </p>
                </div>

                <button
                    className="
                        opacity-0
                        transition
                        group-hover:opacity-100
                    "
                >
                    ⋯
                </button>

            </div>

        </article>
    );
}

export default PhotoCard;