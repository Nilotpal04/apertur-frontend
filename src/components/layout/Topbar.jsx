import { Search, UserCircle, UserSearch } from "lucide-react";

function Topbar(){
    return (
        <header className="h-20 border-b flex items-center justify-between px-8 bg-white">
            <div className="flex items-center gap-3 bg-neutral-100 rounded-full px-6 py-4 w-full max-w-3xl">
                <Search size={18}/>

                <input
                    placeholder="Search moods, places, photographers..."
                    className="bg-transparent outline-none w-full"
                />
            </div>

            <UserCircle
                size={34}
                className="cursor-pointer"
            />
        </header>
    )
}

export default Topbar;