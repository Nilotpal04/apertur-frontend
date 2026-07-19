import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md rounded-3xl border border-[var(--contact-sheet)] bg-white/60 p-8">

      <h1 className="mb-8 text-3xl font-semibold">
        Welcome Back
      </h1>

      <div className="space-y-5">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[var(--contact-sheet)] p-3 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-[var(--contact-sheet)] p-3 outline-none"
        />

        <button className="w-full rounded-xl bg-[var(--darkroom-ink)] py-3 text-[var(--bone-paper)]">
          Sign In
        </button>

      </div>

    </div>
  );
}

export default LoginForm;