import { useState,useContext } from "react";
import LoginContext from "./logincontext";

function LoginForm()
{
    const {user,setUser}=useContext(LoginContext)
    return (<div>

         {user.username.length>=5?<h2>{user.username}</h2>:
           <div>
               <label>Enter User Name</label> <input type='text' onChange={(e)=>{setUser({username:e.target.value})}}/>
            </div>
          
         } 

    </div>)
}
export default LoginForm