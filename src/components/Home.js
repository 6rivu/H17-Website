import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  return (
    <div className="carousel_back">

    <Carousel>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="/images/sydney-1.jpg" className="uniform-image mx-auto d-block">
        </img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="/images/sydney-2.jpg" className="uniform-image mx-auto d-block"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="/images/sydney-3.jpg" className="uniform-image mx-auto d-block"></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;






// const Home = () => {
//   return (
//     <section id="home" className="home">
//       <div className="home-content">
//         <h1>Welcome to Hostel-17</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
//           dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
//           occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
//         {/* <button className="cta-button">Learn More</button> */}
//       </div>
//     </section>
//   );
// };

// export default Home;
