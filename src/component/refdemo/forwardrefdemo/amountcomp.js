import { forwardRef } from "react";

function AmountComp(props,ref)
{
    return <div>
          <h3>Set Amount</h3>
         <input type='text' ref={ref}/></div>
}

export default forwardRef(AmountComp)