import LoginContext from "./logincontext";
import { useState } from "react";
import LoginForm from "./loginform";
function LoginComp()
{
    const [user,setUser]=useState({username:''})
    return <div><LoginContext.Provider value={{user,setUser}}>
    <LoginForm/>
    </LoginContext.Provider>
    </div>
}
export default LoginComp