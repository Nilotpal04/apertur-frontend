import { useFeed } from "../features/feed/hooks/useFeed";


function Home(){

    console.log("Home rendered");


    const {
        data,
        isLoading,
        error,
        isError,
        isSuccess
    } = useFeed();


    console.log({
        data,
        isLoading,
        error,
        isError,
        isSuccess
    });


    if(isLoading)
        return <h1>Loading feed...</h1>


    if(isError)
        return (
            <h1>
                Error: {error.message}
            </h1>
        )


    return (
        <div>
            <h1>
                Feed loaded
            </h1>

            <pre>
                {JSON.stringify(data,null,2)}
            </pre>

        </div>
    )

}


export default Home;