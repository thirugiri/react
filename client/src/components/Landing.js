import React, { Component } from 'react';
import '../App.css';
import './css/index.css';
import NavbarMenu from './NavbarMenu';
import BackgroundSlideshow from 'react-background-slideshow'
import {Grid, Header, Icon} from 'semantic-ui-react'
import image1 from './img/home1.png'
import image2 from './img/home2.jpg'
import image3 from './img/home3.jpg'

class Landing extends Component {
  render() {
    return (
      <div>
        	<NavbarMenu  />
          <div class="ui container" id="slideresponsive">
            <BackgroundSlideshow images={[ image1, image2, image3 ]} style="z-index:-200;"/>        
          </div>
          <div class="inverted vertical segment" id="bgresponsive"><br/><br/>
          <Header as='h2' icon textAlign='center'>
            <Icon name='compose' circular />
            <Header.Content>
              Welcome to BLog
            </Header.Content>
            <Header.Subheader>Best place to Textify your Imaginations</Header.Subheader>
          </Header>
          </div>
      </div>
    );
  }
}

export default Landing;
