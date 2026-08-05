import  Sidebar  from "./Sidebar";
import Topbar from "./Topbar";

function MainLayout({children}){
    return (
        <div
            className="min-h-screen bg-neutral-50"
        >
            <Sidebar/>

            <div className="ml-15">
                <Topbar/>

                <main className="p-3"
                >
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout;