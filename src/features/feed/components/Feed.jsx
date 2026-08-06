import Masonry from "react-masonry-css";
import { useFeed } from "../hooks/useFeed";
import PhotoCard from "./PhotoCard";
import { useState, useEffect } from "react";

const breakpoints = {
    default: 4,
    1536: 4,
    1280: 3,
    768: 2,
    640: 1,
};

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

function Feed() {
    const { data, isLoading, error } = useFeed();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (data?.posts) {
            setPosts(shuffleArray(data.posts));
        }
    }, [data?.posts]);

    if (isLoading) return null;
    if (error) return null;

    return (
        <section className="px-8 pb-12">
            <Masonry
                breakpointCols={breakpoints}
                className="flex gap-6"
                columnClassName="space-y-6"
            >
                {posts.map((post) => (
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