import Dock from "./components/Dock";

function App() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#1C1A17]">
      <div className="flex h-screen">
        <Dock/>
        <div className="flex flex-1 flex-col">
          <header className="h-20 border-b border-[#C9BBA8]">
          </header>
          
          <section className="flex-1">
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;