import React, { Component } from 'react';
import '../App.css';
import './css/index.css';
import axios from 'axios';
import NavbarMenu from './NavbarMenu';
import {Table, Button, Grid} from 'semantic-ui-react';

class Viewpost extends Component{
    render() {
        return (
          <div>
                <NavbarMenu />
                <Bloglist />
          </div>
        );
      }
}

class Bloglist extends Component{
    constructor(props){
        super(props);
        this.state={blogs:[]};
    }
    componentDidMount(){
        axios.post('http://localhost/blog/myposts',{email:localStorage.getItem('useremail')})
        .then(response=>{
            this.setState({blogs:response.data});
        })
        .catch(function(err){
            console.log(err);
        })
    }
    render(){   
        return(
            <Grid container>
                <br /> <br /> 
                <Table celled>
                    {this.state.blogs.map((dynamicComponent, i)=><Tablebody key={i} componentData={dynamicComponent}/>)}
                </Table>
            </Grid>
        );
    }
}

class Tablebody extends Component{
    render(){
        console.log(this.props.componentData._id);
        return <Table.Row>
                <Table.Cell selectable><a target="_blank" href={"edit/"+this.props.componentData._id}>{this.props.componentData.title}</a></Table.Cell>
                <Table.Cell><Button color='teal' target="_blank" href={"view/"+this.props.componentData._id}>View<icon class='write' /></Button></Table.Cell>
                <Table.Cell><Button color='red' href={"delete/"+this.props.componentData._id}>Delete<icon class='write' /></Button></Table.Cell>
            </Table.Row>
    }
}

export default Viewpost;