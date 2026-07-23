import { useFeed } from "../features/feed/hooks/useFeed";


function Home(){

    const {
        data,
        isLoading,
        error
    } = useFeed();


    if(isLoading)
        return <p>Loading...</p>


    if(error)
        return <p>Error loading feed</p>


    return (
        <pre>
            {JSON.stringify(data,null,2)}
        </pre>
    )

}


export default Home;