import { useUrl } from "./mycustomhook";
function DisplayComp()
{
 const data=useUrl('http://localhost:3000/items')

 return <div>
   <label>Data received</label>
   <ul>
   {
    data.map((e)=><li>{e.itemname} {e.price}</li>)
   }
   </ul>
 
 </div>
}
export default  DisplayComp