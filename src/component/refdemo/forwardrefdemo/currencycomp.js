import { useRef } from "react";
import AmountComp from './amountcomp'
function CurrencyComp()
{
    const inputref=useRef()
    return <div>
           <AmountComp ref={inputref}/>
          <button
            onClick={()=>{
                inputref.current.value="$1000"
            }}
           >Set Currency</button>

    </div>
}

export default CurrencyComp