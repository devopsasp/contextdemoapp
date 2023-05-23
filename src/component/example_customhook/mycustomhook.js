import { useEffect, useState } from "react"
import axios from "axios"
export function useUrl(url)
{
    const [data,setData]=useState()

      useEffect(()=>{
   axios.get(url).then((response)=>{
    const data=response.data
    setData(data)
   })
      },[])
      return data
}
 