import Dock from "../components/Dock";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <main className="min-h-screen bg-[var(--bone-paper)] text-[var(--darkroom-ink)]">
      <div className="flex h-screen">

        <Dock />

        <div className="flex flex-1 flex-col">

          <Header />

          {children}

        </div>

      </div>
    </main>
  );
}

export default MainLayout;