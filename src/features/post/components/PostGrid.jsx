import PostViewer from "./PostViewer";

function PostGrid({ post }) {
    return (
        <div
            className="
                grid
                grid-cols-[minmax(0,900px)_320px]
                gap-6
                items-start
            "
        >
            <PostViewer post={post} />

            <div>
                Right Feed
            </div>
        </div>
    );
}

export default PostGrid;