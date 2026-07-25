import { useFeed } from "../hooks/useFeed";
import PhotoCard from "./PhotoCard";

function Feed() {
    const {
        data,
        isLoading,
        error
    } = useFeed();
    
    if (isLoading) {
        return (
            <p>
                Loading Feed...
            </p>
        );
    }

    if (error) {
        return (
            <p>
                Failed to load feed
            </p>
        );
    }

    return (
        <section className="px-8 py-6">
            <h1
                className="
                    mb-8
                    text-3xl
                    font-semibold
                    text-[var(--darkroom-ink)]
                "
            >
                Apertur Feed
            </h1>

            <div
                className="
                    columns-2
                    md:columns-3
                    xl:columns-4
                    gap-6
                "
            >

                {
                    data?.posts?.map((post) => (
                        <PhotoCard
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Feed;