import { useForm } from "react-hook-form"
import { data } from "react-router-dom";

function LoginForm() {
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                    type="passsword"
                    placeholder="Password"
                    {...register("password")}
                    className="w-full rounded-xl border border-[var(--contact-sheet)] p-3 outline-none"
                />

                <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--darkroom-ink)] py-3 text-[var(--bone-paper)]"
                >
                    Sign In
                </button>
            </div>
        </form>
    )
}

export default LoginForm;