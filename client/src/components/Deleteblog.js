import React, { Component } from 'react';
import '../App.css';
import './css/index.css';
import axios from 'axios';
import NavbarMenu from './NavbarMenu';

class Deleteblog extends Component{
    constructor(props){
        super(props);
        this.state={url:"https://learnhosting.herokuapp.com/blog/delete/"+this.props.match.params.id};
    }
    componentDidMount(){
        axios.get(this.state.url)
        .then(response=>{
            alert('Post Deleted Sucessfully');
            window.location='/myposts';
        })
        .catch(function(err){
            console.log(err);
        });
    }
    render(){
        return(
            <NavbarMenu />
        );
    }
}

export default Deleteblog;