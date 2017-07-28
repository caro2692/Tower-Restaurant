import React from 'react';
import WineAbout from './WineAbout';
import RoofAbout from './RoofAbout';
import FoodAbout from './FoodAbout';
import '../App.css';
import {Carousel} from 'react-bootstrap';

const About = () => {
	return (
    <div className="background">
    <Carousel>
      <Carousel.Item>
        <div className="img-container">
          <img className="carousel-img" alt="900x500" src="http://cdn.rsvlts.com/wp-content/uploads/2014/08/lead_large.png"/>
        </div>
      <Carousel.Caption>
          <h3>Rooftop Vibes</h3>
          <p>Enjoy unparalleled views of Bangkok, Thailand from the tallest and most exclusive roof in the city.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img className="carousel-img" alt="900x500" src="https://dangercharters-1165.kxcdn.com/wp-content/uploads/2012/11/Fine-wines-on-Danger-Charters-Wind-Wine-Sunset-Sail.jpg.jpg"/>
        </div>
      <Carousel.Caption>
          <h3>Extensive Wine List</h3>
          <p>Enjoy a bottle from our extensive wine list and taste the flavors of the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img className="carousel-img" alt="900x500" src="http://iamafoodblog.com/wp-content/uploads/2015/04/how-to-make-the-ultimate-cheese-plate-5w.jpg"/>
        </div>
      <Carousel.Caption>
          <h3>Scrumptios Snacks</h3>
          <p>Chef Ross Kiser prepares exquisite dishes that are consistently rated in the "Top Dishes of Thailand".</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

	);
};

export default About;
