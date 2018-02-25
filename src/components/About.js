import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './css/index.css';
import NavbarMenu from './NavbarMenu';

class About extends Component {
  render() {
    return (
      <div>
        	<NavbarMenu />
        	<Content />
      </div>
    );
  }
}

class Content extends Component{
	render(){
		return(
  			<div class="ui container" id="about">
  				<h1 class="ui header"> <i class="settings orange icon"></i>About Us</h1>
  				<h4 class="ui header" id="aboutcontent">Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries.
  				It was developed by Pyra Labs, which was bought by Google in 2003.
  				Generally, the blogs are hosted by Google at a subdomain of blogspot.com.
  				Blogs can also be hosted in the registered custom domain of the blogger (like www.example.com).
  				A user can have up to 100 blogs per account.
  				<br />
  				Up until May 1, 2010, Blogger allowed users to publish blogs on other hosts, via FTP.
  				All such blogs had (or still have) to be moved to Google/s own servers, with domains other than blogspot.com allowed via custom URLs.
  				Unlike WordPress.com, Blogger allows its users to use their own domain free of charge, while WordPress.com charges around $13 to use a custom domain.
  				Blogger cannot be installed on a web server.
  				One has to use DNS facilities to redirect a custom URL to a blogspot domain.
  				</h4>


  			</div>		
		);
	}
}

export default About;
