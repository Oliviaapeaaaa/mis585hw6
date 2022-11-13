import React from 'react'

import { Brand, Feature, Navbar, WhatService} from './components';
import { Footer, Header, } from './containers';

import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatService />
        <Feature />
        <Footer />
    </div>
  )
}

export default App