function PhotoCard({ post }) {
    return (
        <article
            className="
                break-inside-avoid
                mb-6
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
                    src={post.image_url}
                    alt={post.caption}
                    className="
                        w-full
                        object-cover
                        transition
                        duration-500
                        hover:scale-105
                    "
                />

            </div>


            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-2
                    pt-3
                "
            >

                <p
                    className="
                        text-sm
                        text-[var(--darkroom-ink)]
                    "
                >
                    {post.caption}
                </p>

                <button
                    className="
                        text-lg
                        text-[var(--darkroom-ink)]
                    "
                >
                    ⋯
                </button>

            </div>

        </article>
    )
}

export default PhotoCard;