import Masonry from "react-masonry-css";
import PhotoCard from "./PhotoCard";

const breakpoints = {
    default: 4,
    1536: 4,
    1280: 3,
    768: 2,
    640: 1,
};

function Feed({ posts }) {
    return (
        <section className="px-8 pb-12">
            <Masonry
                breakpointCols={breakpoints}
                className="flex gap-6"
                columnClassName="space-y-6"
            >
                {posts.map(post => (
                    <PhotoCard
                        key={post.id}
                        post={post}
                    />
                ))}
            </Masonry>
        </section>
    );
}

export default Feed;