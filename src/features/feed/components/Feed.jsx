import { useFeed } from "../hooks/useFeed"
import PhotoCard from "./PhotoCard";

import mockPosts from "../data/mockPosts";

function Feed(){
    const {
        data,
        isLoading,
        error
    } = useFeed();

    if(isLoading){
        return (
            <p>
                Loading Feed...
            </p>
        )
    }

    if(error){
        return (
            <p>
                Failed to load feed
            </p>
        )
    }

    return (
        <section>
            <h1>
                Apertur Feed
            </h1>

            <div
                className="
                    columns-4
                    gap-6
                "
            >

            {
                mockPosts.map((post)=>(
                    <PhotoCard
                        key={post.id}
                        post={post}
                    />
                ))
            }
            </div>
        </section>
    )
}

export default Feed;