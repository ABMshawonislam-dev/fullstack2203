"use client"
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
      src="http://localhost:8000/uploads/1710926024666-699602484-istockphoto-905699064-612x612.jpg"
      width={1920}
      height={500}
      alt="Picture of the author"/>
        <Carousel.Caption>
        <Image
      src="http://localhost:8000/uploads/1710926024666-699602484-istockphoto-905699064-612x612.jpg"
      width={1920}
      height={500}
      alt="Picture of the author"/>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src="http://localhost:8000/uploads/1710926024666-699602484-istockphoto-905699064-612x612.jpg"
      width={1920}
      height={500}
      alt="Picture of the author"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src="http://localhost:8000/uploads/1710926024666-699602484-istockphoto-905699064-612x612.jpg"
      width={1920}
      height={500}
      alt="Picture of the author"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner