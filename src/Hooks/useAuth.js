import { useContext } from "react";
import { AuthContext } from "../context/AuthProvide/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
