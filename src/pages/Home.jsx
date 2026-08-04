import MainLayout from "../components/layout/MainLayout";
import Feed from "../features/feed/components/Feed";

function Home() {
    return (
        <MainLayout>
            <Feed />
        </MainLayout>
    );
}

export default Home;