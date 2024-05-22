import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const AffiliateProduct = () => {
    let [allpro,setAllPro] = useState([])

    let data = useSelector((state)=>state)
    console.log("kirte",data.currentuser.value.id)

    useEffect(()=>{
        async function allpro(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allpro")
            console.log(data)
            setAllPro(data.data)
        }
        allpro()
    },[])

  return (
    allpro.map(item=>(
        <li>{item.name} -- {`http://localhost:3000/product/${item.slug}?userid=${data.currentuser.value.id}`}</li>
    ))
  )
}

export default AffiliateProduct