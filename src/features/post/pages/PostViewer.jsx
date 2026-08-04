function PostViewer({post}){
    return (
        <div className="max-w-5xl mx-auto p-10">
            <img src={post.image} alt={post.content}
                className="w-full rounded-3xl"
            />

            <h1 className="text-2xl mt-6 font-semibold">
                {post.content}
            </h1>

            <p className="mt-2 text-neutral-500">
                @{post.username}
            </p>
        </div>
    )
}

export default PostViewer;