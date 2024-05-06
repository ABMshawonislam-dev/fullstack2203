import React from 'react'

async function getData(id) {
    const res = await fetch(`http://localhost:8000/api/v1/product/singlecat?slug=${id}`)

   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const Catdetails = async ({params}) => {
    console.log(params)
    const data = await getData(params.slug)


  return (
    data.map(item=>(

        <div>{item.name}</div>
    ))
  )
}

export default Catdetails