import { useState } from "react";
import MyLoginForm from "./myloginform";
import ProfileComp from "./profilecomp";
import ProfileContext from "./profilecontext";
function HomeComp()
{
    const [showProfile,setShowProfile]=useState(false)

     return <div>
          <ProfileContext.Provider value={{showProfile,setShowProfile}}>
          {showProfile?<ProfileComp/>:<MyLoginForm/>}
          </ProfileContext.Provider>
     </div>
}
export default HomeComp