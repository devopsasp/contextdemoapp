import { useRef } from "react";

function MyRefComp()
{
    const inputref=useRef()



    return <div>
             <input type='text' ref={inputref}/>
            <button
              onClick={()=>{
                //inputref.current.style.fontSize="30px"
              //  inputref.current.placeholder="hi there"
              }}
            >Change style</button>
    </div>
}

export default MyRefComp