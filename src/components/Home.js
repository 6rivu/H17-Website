import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import h171 from '../images/IMG_0003.JPG';
import h172 from '../images/IMG_0323.JPG';
import h173 from '../images/10.png';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  return (
    <section className="home-section">
      <div className="carousel_back">
        <Carousel>
          <Carousel.Item>
            <img src={h173} className="uniform-image mx-auto d-block"></img>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={h172} className="uniform-image mx-auto d-block"></img>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={h171} className="uniform-image mx-auto d-block"></img>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>

      </div>
      <div className="about-section">
        <h1 className='centered-heading'>About</h1>
        <p className="intro">
          Hostel 17 is home to about 1,400 male students of IIT Bombay. Centrally located on campus, this 10-floor high-rise offers stunning views of Powai Lake. The hostel is divided into four wings and provides a vibrant and comfortable living environment. The mess, with a seating capacity of around 200, is known for its hygiene, diverse menu options, including Jain, boiled, and non-vegetarian food, and the friendly and cooperative nature of its staff. It is well-equipped with modern amenities such as refrigerators, a toaster, and a grill roaster.
          <br /><br />
          The proximity of the hostel to academic departments and lecture halls makes it a hub of activity, frequently visited by students and faculty. Hostel 10 ensures the comfort of its residents by promptly addressing any challenges and offering a range of facilities. These include washing machines, dryers, ironing stations, a mess terrace, a garden area for fresh air, a lounge with a plasma TV, and comfortable seating. The hostel also features a study room, a common room with indoor games, a gym, a pool room, and basketball and badminton courts. Additionally, a popular night canteen adds to the convenience of residents.
          <br /><br />
          The residents of Hostel 17 are as passionate about cultural and sports activities as they are about academics. The hostel boasts numerous inter-IIT participants in sports and cultural events, fostering a community of talent, creativity, and camaraderie. Hostel 17 is not just a place to stay but a vibrant environment where students thrive both personally and academically.
          </p>
      </div>
    </section>
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
