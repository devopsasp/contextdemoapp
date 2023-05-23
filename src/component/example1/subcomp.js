import { useContext } from "react"
import ThemeContext from "./mycontext"
function SubComp()
{
   const themetype=useContext(ThemeContext)
   
  const ui= themetype==="light"?<div style={{backgroundColor:"beige",width:"200px",height:"200px"}}>{themetype}</div>:<div style={{backgroundColor:"darkblue",width:"200px",height:"200px"}}>{themetype}</div>
  console.log({themetype})
  return  <div>
     
         {ui}

  </div>
  

}
export default SubComp