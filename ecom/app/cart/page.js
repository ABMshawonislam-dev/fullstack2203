"use client"

import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allcart')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Cart = async () => {
    const data = await getData()

    let totalprice = 0

    data.map(item=>{
        totalprice += item.productId.saleprice? item.productId.saleprice*item.quantity:item.productId.regularprice*item.quantity
    })


    let handleIncrese = async (id,type)=>{
        const rawResponse = await fetch(`http://localhost:8000/api/v1/product/createcart?type=${type}`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              productId:id,
            })
          });
          const content = await rawResponse.json();
          console.log(content)
    }

  return (
    <Container>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item=>(
            <tr>
                <td>
                <Image
      src={`http://localhost:8000${item.productId.image}`}
      width={50}
      height={50}
      alt="Picture of the author"
    />
                </td>
                <td>{item.productId.name}</td>
                <td>
                    <button onClick={()=>handleIncrese(item.productId._id,"incre")}>+</button>
                    {item.quantity}
                    <button onClick={()=>handleIncrese(item.productId._id,"decre")}>-</button>    
                </td>
                <td>{item.productId.saleprice? item.productId.saleprice:item.productId.regularprice}</td>
                <td>{item.productId.saleprice? item.productId.saleprice*item.quantity:item.productId.regularprice*item.quantity}</td>
          </tr>
        ))}
        
        
      </tbody>
    </Table>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Price</th>
          <th>Tax (15%)</th>
          <th>Delivery</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalprice}</td>
          <td>{totalprice*15/100}</td>
          <td>50</td>
          <td>{totalprice+(totalprice*15/100)+50}</td>
        </tr>
       
      </tbody>
    </Table>

    <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    </Container>
  )
}

export default Cart