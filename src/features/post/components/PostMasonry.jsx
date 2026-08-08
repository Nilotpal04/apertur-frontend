import PostViewer from "./PostViewer";
import PhotoCard from "../../feed/components/PhotoCard";

function PostMasonry({ post, suggestions }) {
    return (
        <section className="px-8 pb-12">
            <div
                className="
                    grid
                    grid-cols-4
                    gap-6
                    items-start
                "
            >

                <div
                    className="
                        col-span-2
                        row-span-2
                    "
                >
                    <PostViewer post={post} />
                </div>

                {suggestions.map((suggestion) => (
                    <PhotoCard
                        key={suggestion.id}
                        post={suggestion}
                    />
                ))}
            </div>
        </section>
    );
}

export default PostMasonry;