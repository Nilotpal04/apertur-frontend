function PhotoCard({ post }) {
  return (
    <article className="group mb-6 break-inside-avoid cursor-pointer">

      {post.ratio === "portrait" && (
        <div className="aspect-[4/5] rounded-2xl bg-[var(--contact-sheet)]"></div>
      )}

      {post.ratio === "square" && (
        <div className="aspect-square rounded-2xl bg-[var(--contact-sheet)]"></div>
      )}

      {post.ratio === "landscape" && (
        <div className="aspect-[16/9] rounded-2xl bg-[var(--contact-sheet)]"></div>
      )}

      {post.ratio === "tall" && (
        <div className="aspect-[2/3] rounded-2xl bg-[var(--contact-sheet)]"></div>
      )}

      <div className="mt-3 flex items-center justify-between px-1">
        <p className="truncate text-sm">
          {post.title}
        </p>

        <button className="rounded-lg p-1 hover:bg-[var(--contact-sheet)]">
          ⋯
        </button>
      </div>

    </article>
  );
}

export default PhotoCard;