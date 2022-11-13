import React from 'react';
import './header.css';
import ai from '../../pictures/ai.jpeg';

const  Header= () => {
  return (
    <div className="land__header section__padding" id="home"> 

    <div className='land__header-content'>

    <h1 className="gradient__text">Let&apos;s Consider Your Commercial Landscape Needs Solved</h1>
      <p>BrightView is the nation’s leading commercial landscape company. We take pride in delivering consistently excellent results for clients across the country, 
        throughout the lifecycle of their landscapes. </p>

        <div className="land__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Discount</button>
      </div>
    </div>
    <div className="land__header-image">
      <img src={ai} />
    </div>
    </div>
  )
}

export default Header;