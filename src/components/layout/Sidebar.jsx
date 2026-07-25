import { Home, Map, Plus, Bookmark, Bell } from "lucide-react";

const navigation = [
    {
        name:"Home",
        icon: Home
    },
    {
        name:"Atlas",
        icon:Map
    },
    {
        name:"Create",
        icon:Plus
    },
    {
        name:"Frames",
        icon:Bookmark
    },
    {
        name:"Notifications",
        icon:Bell
    }
];

function Sidebar(){
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
                .font-aclonica {
                    font-family: 'Aclonica', sans-serif;
                }
            `}</style>

            <aside className="fixed left-0 top-0 h-screen w-20 border-r border-neutral-200 bg-white px-3 py-0 flex flex-col items-center">
                
                <div className="flex items-center justify-center h-16 w-full">
                    <h1 className="text-3xl font-aclonica font-normal text-black">
                        A
                    </h1>
                </div>

                <nav className="flex flex-col items-center w-full space-y-2 mt-2">
                    {
                        navigation.map((item)=>{
                            const Icon = item.icon
                            return (
                                <button
                                    key={item.name}
                                    title={item.name}
                                    className="flex items-center justify-center w-full rounded-xl px-4 py-3 text-neutral-700 hover:bg-neutral-100 transition"
                                >
                                    <Icon size={24}/>
                                </button>
                            )
                        })
                    }
                </nav>
            </aside>
        </>
    )
}

export default Sidebar;