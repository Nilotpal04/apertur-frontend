import { useFeed } from "../hooks/useFeed"

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

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </section>
    )
}

export default Feed;