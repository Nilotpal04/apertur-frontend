import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../features/auth/services/auth.service";

import useAuthStore from "../store/auth.store";


function AuthProvider({children}){


const setUser = useAuthStore(
    state=>state.setUser
);


const clearUser = useAuthStore(
    state=>state.clearUser
);



useQuery({

    queryKey:["current-user"],

    queryFn:getCurrentUser,

    retry:false,


    onSuccess:(data)=>{

        setUser(data);

    },


    onError:()=>{

        clearUser();

    }

});


return children;

}


export default AuthProvider;