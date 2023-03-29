import {createContext, useState} from "react";
export  const AuthContext = createContext();
function AuthContextprovide({children}){
   const [isAuth, setAuth] = useState(false);
   const login = ()=>{
    setAuth(true);
   }
   const logout=  ()=>{
    setAuth= ()=>{
        setAuth(false);
    }
   }
    return(
        <AuthContextprovide value={{isAuth, login,logout}}>
            {children}
        </AuthContextprovide>
    )  
}
export default AuthContextprovide