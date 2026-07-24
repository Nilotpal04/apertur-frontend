import PhotoCard from "./PhotoCard";
import mockPosts from "../data/mockPosts";


function Feed(){

    return (
        <section>

            <h1>
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