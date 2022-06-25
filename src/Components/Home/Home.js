import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
<div className="container-fluid">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img img-fluif"
      src="https://i.ibb.co/PDhQcYq/tv.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/PDhQcYq/tv.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://i.ibb.co/PDhQcYq/tv.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Home;