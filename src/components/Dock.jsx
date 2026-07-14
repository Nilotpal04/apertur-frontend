import {
    House,
    Map,
    PlusSquare,
    Frame,
    Bell
} from "lucide-react"

function Dock() {
    return (
        <aside className="flex w-20 flex-col items-center border-r border-[#C9BBA8] py-6">
            <div className="mb-12 flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1A17]">
                ●
            </div>
            <nav className="flex flex-1 flex-col items-center gap-10">
                <button className="rounded-xl p-3 transition hover:bg-[#EFE8DE]">
                    <House size={22}/>
                </button>
                <button className="rounded-xl p-3 transition hover:bg-[#EFE8DE]">
                    <Map size={22}/>
                </button>
                <button className="rounded-xl p-3 transition hover:bg-[#EFE8DE]">
                    <PlusSquare size={22}/>
                </button>
                <button className="rounded-xl p-3 transition hover:bg-[#EFE8DE]">
                    <Frame size={22}/>
                </button>
                <button className="rounded-xl p-3 transition hover:bg-[#EFE8DE]">
                    <Bell size={22}/>
                </button>
            </nav>
        </aside>
    );
}

export default Dock;