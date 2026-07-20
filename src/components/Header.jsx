import { Search } from "lucide-react";
import useAuthStore from "../store/auth.store";

function Header() {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );
  return (
    <header className="flex h-20 items-center justify-between border-b border-[var(--contact-sheet)] px-8">

      <div className="relative w-full max-w-xl">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--contact-sheet)]"
        />

        <input
          type="text"
          placeholder="Discover photographs, photographers, places..."
          className="
            h-12
            w-full
            rounded-xl
            border
            border-[var(--contact-sheet)]
            bg-transparent
            pl-12
            pr-4
            text-sm
            outline-none
            transition
            focus:border-[var(--aged-brass)]
          "
        />

      </div>
      <p>
        {isAuthenticated ? "Logged In" : "Guest"}
      </p>

      <button
        className="
          ml-8
          h-11
          w-11
          rounded-full
          border
          border-[var(--contact-sheet)]
          hover:border-[var(--aged-brass)]
          transition"
      />
    </header>
  );
}

export default Header;