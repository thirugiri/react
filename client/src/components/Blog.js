import React, { Component } from 'react';
import '../App.css';
import './css/index.css';
import axios from 'axios';
import NavbarMenu from './NavbarMenu';
import {Table, Button, Grid, Header, Icon, Row, Col, Item} from 'semantic-ui-react';

class Blog extends Component{
    constructor(props){
        super(props);
        this.state={blogurl:"http://localhost:5000/blog/view/"+this.props.match.params.id,blog:[]};
    }
    componentDidMount(){
        axios.get(this.state.blogurl)
        .then(response=>{
            this.setState({blog:response.data});
            
        })
        .catch(function(err){
            console.log(err);
        })
    }
    render() {
        return (
          <div>
                <NavbarMenu />
                <Grid container>
                    <br /><br /><br />
                    <Grid.Row>
                        <Header as='h2' icon textAlign='center'>
                            <Header.Content>{this.state.blog.title}</Header.Content>
                        </Header>
                    </Grid.Row>
                    <br/>
                    <Grid.Row>
                        <Header as='h5' icon textAlign='center'>
                            <Header.Content dangerouslySetInnerHTML={{__html: this.state.blog.text}}></Header.Content>
                        </Header>
                    </Grid.Row>
                    
                </Grid>
          </div>
        );
      }
}

export default Blog;