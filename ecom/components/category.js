import Link from 'next/link'
import React from 'react'

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allcat')

   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Category =async () => {
    const data = await getData()
    console.log(data)
  return (
    data.map(item=>(
        <li>
            <Link href={`/category/${item._id}`}>{item.name} </Link>
            {item.subcatlist.length >0 &&
                    <div className='dropdown'>
                {item.subcatlist.map(ditem=>(
                    <li>{ditem.name}</li>
                ))}
            
            </div>
            }
              

        </li>
    ))
  )
}

export default Category