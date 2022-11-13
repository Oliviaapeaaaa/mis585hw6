import React from 'react';
import Feature from '../feature/Feature';
import './whatService.css';
import service from '../../pictures/service.jpeg';

const WhatService = () => {
  return (
    <div className="land__whatService section__margin" id="services">
      <div className='land__whatService-feature'>
        <Feature title=" Great Service"
          text="Benefit from a comprehensive landscape maintenance plan designed to meet your needs and exceed your expectations, all delivered by a team invested in your success." />
      </div>
      <div className="land__whatService-heading">
        <h1 className="gradient__text">Depth of Commercial Landscape Services </h1>
        <p>With a steadfast focus on you and your goals, we’re changing the way landscape services are delivered.
          From design to development, maintenance and enhancements, our depth of experience makes us a seamless partner for the entire lifecycle of your landscape</p>
      </div>
      <div className='conbineBox'>
        <div className="land__whatService-container">
          <Feature title="DESIGN" text="Translate your vision into constructible design with the help of our passionate and creative planners and landscape architects. 
      Our award-winning team marries the benefits of the personal attention you’d expect from a boutique firm, with the unparalleled resources only BrightView can offer." />
          <Feature title="DEVELOPMENT" text="Use a proven Landscape development company that has mastered how to bring big dreams to life with a simple “get it done” approach." />
          <Feature title="MAINTAINCE" text="The state of your landscape speaks volumes about your property. 
      Benefit from a comprehensive commercial landscape maintenance plan designed to meet your needs and exceed your expectations, no matter the environment or season." />
        </div>
        <div>
          <img className="land__whatService-container-img" src={service} />
        </div>
      </div>
    </div>
  )
}

export default WhatService;