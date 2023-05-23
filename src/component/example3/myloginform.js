import { useState,useContext } from "react"
import ProfileContext from "./profilecontext"
function MyLoginForm()
{
     const [username,setUsername]=useState()
     const [password,setPassword]=useState()
     const {showProfile ,setShowProfile}=useContext(ProfileContext)
     return <div>
           <label>Enter User Name</label> <input type='text' 
             onChange={(e)=>{
                     setUsername(e.target.value)

             }}
           /><br/>
          <label> Enter Password</label> <input type='password' 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
           /><br/>
           <button
            onClick={()=>{
                if(username==='admin' && password==='pass123')
                {
                    setShowProfile(true)
                }
            }}
           >Login</button>

     </div>
}
export default MyLoginForm