import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SinnglePro from './sinnglePro';



async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allpro')

   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const Product = async () => {
    const data = await getData()
    console.log(data)
  return (
    // data.map(item=>(
    //     <>
    //         <li>{item.name}</li>
    //     <li>
    //            <Image
    //   src={`http://localhost:8000${item.image}`}
    //   width={500}
    //   height={500}
    //   alt="Picture of the author"
    // />
    //     </li>

    //     <li>
    //     {item.saleprice ? <><span><del>{item.regularprice}</del></span> <span>{item.saleprice}</span></>:<span>{item.regularprice}</span>}

    //     </li>
    //     </>
    // ))
    <Container>
      <Row className="justify-content-md-center">
        {data.map(item=>(
          <Col xs lg="3">
          <SinnglePro item={item}/>
        </Col>
        ))}
        
        
      </Row>
    </Container>
  )
}

export default Product