import { useForm } from "react-hook-form"
import { useState } from "react";
import { login } from "../services/auth.service";

import useAuthStore from "../../../store/auth.store";

function LoginForm() {
    const loginUser = useAuthStore((state) => state.login);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit
    } = useForm();
    
    const onSubmit = async (data) => {
        setError("");
        try {
            setIsLoading(true);
            const response = await login(data);
            loginUser(response.access_token);
        } catch(error) {

            setError(
                error.response?.data?.detail || "Something went wrong."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md rounded-3xl border border-[var(--contact-sheet)] bg-white/60 p-8"
        >
            <h1 className="mb-8 text-3xl font-semibold">
                Welcome back
            </h1>

            <div className="space-y-5">

                <input 
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full rounded-xl border border-[var(--contact-sheet)] p-3 outline-none"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="w-full rounded-xl border border-[var(--contact-sheet)] p-3 outline-none"
                />
                {error && (
                    <p className="text-sm text-red-600">
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-xl bg-[var(--darkroom-ink)] py-3 text-[var(--bone-paper)]"
                >
                    {isLoading ? "Signing In..." : "Sign In"}
                </button>
            </div>
        </form>
    )
}

export default LoginForm;