import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,

    setUser:(user) =>
        set({
            user,
            isAuthenticated: true,
            isLoading: false,
        }),
    
    clearUser:() =>
        set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
        }),

    setLoading:(value) =>
        set({
            isLoading: value
        })
}));

export default useAuthStore;