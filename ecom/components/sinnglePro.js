"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SinnglePro = ({item}) => {
    
  let handleCart =async (item)=>{
    const rawResponse = await fetch('http://localhost:8000/api/v1/product/createcart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId:item._id,
        quantity: 1,
        cartOwnerId: "65eec30dc9434f434d36d55b"
      })
    });
    const content = await rawResponse.json();
    console.log(content)
  }


  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`http://localhost:8000${item.image}`} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text dangerouslySetInnerHTML={{ __html: item.description }}>
        
      </Card.Text>
      <p> {item.saleprice ? <span><del>{item.regularprice}</del>-- {item.saleprice}</span>:item.regularprice}</p>
      <Button onClick={()=>handleCart(item)} variant="primary">Add To Cart</Button>
    </Card.Body>
  </Card>
  )
}

export default SinnglePro