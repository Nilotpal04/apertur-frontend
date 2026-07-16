import PhotoCard from "./PhotoCard";
import mockPosts from "../../data/mockPosts";

function Feed() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="columns-4 gap-6">
        {mockPosts.map((post) => (
          <PhotoCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </main>
  );
}

export default Feed;