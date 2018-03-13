import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import React, { Component} from 'react';
import '../App.css';
import './css/index.css';
import NavbarMenu from './NavbarMenu';
import {Grid, Form, Button, Icon} from 'semantic-ui-react';
import Editor from 'react-medium-editor';
import axios from 'axios';


class Writeblog extends Component {
  constructor(props)
  {
    super(props);
    this.state={title:'', desc:'',text:'BLog here.... Select text for Styling..',author:localStorage.getItem('userid'),email:localStorage.getItem('useremail')}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handletitleChange=this.handletitleChange.bind(this);
    this.handledescChange=this.handledescChange.bind(this);
  };

 handleChange(text, medium) {
    this.setState({text: text});
  }
  handletitleChange(event){
    this.setState({title:event.target.value});
  }
  handledescChange(event){
    this.setState({desc:event.target.value});
  }
  handleSubmit(event){
    console.log(this.state);
    axios.post('https://learnhosting.herokuapp.com/blog/publish',{post:this.state})
    .then(function(response){
      console.log(response);
      alert('Blog Published Sucessfully');
      window.location='/myposts';
    })
    .catch(function(err){
      console.log(err);
    });
  }
  render() {
    return (
      <div>
      <NavbarMenu />
      <Grid container>
          <Grid.Row>
          <Grid.Column width={16}>
          <br /><br />
          <Form onSubmit={this.handleSubmit}>
             <Form.Field>
               <label>Title</label>
               <input type='text' placeholder='Title of Blog' onChange={this.handletitleChange} required/>
             </Form.Field>
             <br />
             <Form.Field>
               <label>Description</label>
               <input type='text' placeholder='Description about blog' onChange={this.handledescChange} required/>
             </Form.Field>
             <br />
             <h1>BLog Your Thoughts Below..</h1>
             <Editor
               tag="pre"
               text={this.state.text}
               onChange={this.handleChange}
               options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
             />
             <br /><br /><br />
             <Button type='submit' positive animated >
               <Button.Content visible>Publish</Button.Content>
               <Button.Content hidden>
               <Icon name='right arrow' />
               </Button.Content>
            </Button>
          </Form>
          </Grid.Column>
          </Grid.Row>

      </Grid>
      </div>
    );
  }
}

export default Writeblog;
