import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carrusel() {
  return (
    <>
        <Carousel className='carousel carousel-inner slide w-75 m-auto '>
            <Carousel.Item>
                <img className="d-block w-100" src="./slider1.jpg" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./slider2.jpg" alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./slider3.jpg" alt="Third Slice"/>
            </Carousel.Item>
        </Carousel> 
    </>
  )
}

export default Carrusel