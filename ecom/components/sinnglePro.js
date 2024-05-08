"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SinnglePro = ({item}) => {
    console.log(item)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`http://localhost:8000${item.image}`} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text dangerouslySetInnerHTML={{ __html: item.description }}>
        
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default SinnglePro