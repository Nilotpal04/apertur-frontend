import MainLayout from "../components/layout/MainLayout";
import FeedContainer from "../features/feed/components/FeedContainer";

function Home() {
    return (
        <MainLayout>
            <FeedContainer />
        </MainLayout>
    );
}

export default Home;