function ViewerCard({ children }) {
    return (
        <div
            className="
                w-full
                max-w-[900px]
                rounded-2xl
                overflow-hidden
                border
                border-neutral-200
                bg-white
            "
        >
            {children}
        </div>
    );
}

export default ViewerCard;