function ViewerCard({children}) {
    return (
        <section
            className="
                rounded-3xl
                border
                border-neutral-200
                bg-white
                overflow-hidden
            "
        >
            {children}
        </section>
    )
}

export default ViewerCard;