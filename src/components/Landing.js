import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './css/index.css';
import NavbarMenu from './NavbarMenu';
import BackgroundSlideshow from 'react-background-slideshow'
import {Grid} from 'semantic-ui-react'
import image1 from './img/home1.png'
import image2 from './img/home2.jpg'
import image3 from './img/home3.jpg'

class Landing extends Component {
  render() {
    return (
      <div>
        	<NavbarMenu />
          <BackgroundSlideshow images={[ image1, image2, image3 ]} style="z-index:-200;"/>        
      </div>
    );
  }
}

export default Landing;
