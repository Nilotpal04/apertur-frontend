import { Search } from "lucide-react";
import useAuthStore from "../store/auth.store";

function Header() {

 const isAuthenticated = useAuthStore(
    state => state.isAuthenticated
 );

 return (
    <p>
      {
        isAuthenticated 
        ? "Logged In"
        : "Guest"
      }
    </p>
 )

}

export default Header;