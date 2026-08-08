import { useFeed } from "../hooks/useFeed";
import { useState, useEffect } from "react";

import Feed from "./Feed";

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

function FeedContainer({ feedPosts = null }) {
    const { data, isLoading, error } = useFeed();
    const [posts, setPosts] = useState([]);

    const displayPosts = feedPosts ?? posts;

    useEffect(() => {
        if (data?.posts) {
            setPosts(shuffleArray(data.posts));
        }
    }, [data?.posts]);

    if (isLoading) return null;
    if (error) return null;

    return (
            <Feed
                posts={displayPosts}
            />
    );
}

export default FeedContainer;