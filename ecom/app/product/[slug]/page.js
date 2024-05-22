
import React from 'react'

async function getData(slug) {
    const res = await fetch(`http://localhost:8000/api/v1/product/singlepro/${slug}`)

   
    if (!res.ok) {
  
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const SinglePro =async ({params}) => {
    console.log(params.slug)
   
    const data = await getData(params.slug)
    console.log(data)
  return (
    data.map(item=>(
        <h1>{item.name}</h1>
    ))
  )
}

export default SinglePro