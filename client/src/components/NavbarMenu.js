import React, { Component } from 'react';
import '../App.css';
import './css/index.css';
import { Button, Icon, Input, Menu, Modal, Header, Dropdown } from 'semantic-ui-react';
import SocialButton from './SocialButton';

class NavbarMenu extends Component{
	state = {
		userid:''
	}
  	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	constructor (props, context) {
    super(props, context);

  	}
 	logout =() => {
 		this.setState({userid: ''})
     localStorage.setItem('userid',"false");
		 window.location.href="/";
    }




	handleSocialLogin = (user) => {
		
		localStorage.setItem('userid',user.profile.firstName);
		localStorage.setItem('useremail',user.profile.email);
		window.location.reload();
	}

	handleSocialLoginFailure = (err) => {
	  console.error(err)
	}
	render(){
		const { activeItem } = this.state
		if(!localStorage.getItem('userid')||localStorage.getItem('userid')=="false"){
			console.log(this.state.userid);
			return(
				<div>
				<Menu stackable>
					<Menu.Item><img src='https://goo.gl/Xr4dgB' /></Menu.Item>
					<Menu.Item header href="/">BLogTest</Menu.Item>
				  	<Menu.Item active={activeItem === 'aboutUs'} onClick={this.handleItemClick}  href='about'><Icon name='send' />About</Menu.Item>
						<Modal trigger={<Menu.Item><Icon name='write'/>Write Your Blog</Menu.Item>}>
							<Modal.Header><Header as='h2' textAlign='center'>Welcome To BLogTest</Header></Modal.Header>
							<Modal.Content>
								<Modal.Description>
										 <Header as='h5'>Sign in with </Header><SocialButton
																							provider='facebook'
																							appId='164452347684255'
																							onLoginSuccess={this.handleSocialLogin}
																							onLoginFailure={this.handleSocialLoginFailure}
																						>
																							<Icon name='facebook' />Facebook
																						</SocialButton>
										 or <Button color='google plus'><Icon name='google plus' /> Google</Button>
								</Modal.Description>
							</Modal.Content>
					</Modal>
				  	<Menu.Menu position='right'>
					  	<Menu.Item position='right'><Input className='icon' icon='search' placeholder='Search... '/></Menu.Item>

						  	<Modal trigger={<Menu.Item><Icon name='user circle'/>SignIn</Menu.Item>}>
							    <Modal.Header><Header as='h2' textAlign='center'>Welcome To BLogTest</Header></Modal.Header>
							    <Modal.Content>
								    <Modal.Description>
								         <Header as='h5'>Sign in with </Header><SocialButton
		      																				provider='facebook'
		      																				appId='164452347684255'
																						      onLoginSuccess={this.handleSocialLogin}
																						      onLoginFailure={this.handleSocialLoginFailure}
																						    >
																						      <Icon name='facebook' />Facebook
																						    </SocialButton>
								         or <Button color='google plus'><Icon name='google plus' /> Google</Button>
								    </Modal.Description>
							    </Modal.Content>
							</Modal>
						  	<Modal trigger={<Menu.Item><Icon name='user plus'/>SignUp</Menu.Item>}>
							    <Modal.Header><Header as='h2' textAlign='center'>Welcome To BLogTest</Header></Modal.Header>
							    <Modal.Content>
								    <Modal.Description>
								      	<Header as='h5'>Sign up with </Header><Button color='facebook'><Icon name='facebook' /> Facebook</Button> or <Button color='google plus'><Icon name='google plus' /> Google</Button>
								    </Modal.Description>
							    </Modal.Content>
							</Modal>


					</Menu.Menu>
		   	</Menu>
				</div>
			);
		}
		else{
			return(
				<Menu stackable>
					<Menu.Item><img src='https://goo.gl/Xr4dgB' /></Menu.Item>
					<Menu.Item header href="/">BLogTest</Menu.Item>
				  	<Menu.Item active={activeItem === 'aboutUs'} onClick={this.handleItemClick}  href='/about'><Icon name='send' />About</Menu.Item>
				  	<Menu.Item active={activeItem === 'jobs'} onClick={this.handleItemClick} href='/writeblog'><Icon name='write' />Write Your Blog</Menu.Item>
				  	<Menu.Menu position='right'>
					  	<Menu.Item position='right'><Input className='icon' icon='search' placeholder='Search...' /></Menu.Item>
					  	<Dropdown item text= {"Hi "+localStorage.getItem('userid')}>
							<Dropdown.Menu>
								<Dropdown.Item href="/myposts">Your Posts</Dropdown.Item>
								<Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Menu>
		   	</Menu>

			);
		}
	}
}
export default NavbarMenu;
