import { Flashlight, LogIn } from "lucide-react";
import { set } from "react-hook-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            accessToken: null,
            isAuthenticated: false,

            login: (token) =>
                set({
                    accessToken: token,
                    isAuthenticated: true,
                }),

            logout: () => 
                set({
                    accessToken: null,
                    isAuthenticated: false,
                }),
        }),
        {
            name: "apertur-auth"
        }
    )
)

export default useAuthStore;