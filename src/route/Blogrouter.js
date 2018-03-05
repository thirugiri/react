var express = require('express');
var app=express();
var Blogrouter=express.Router();
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var blogSchema= new Schema({
        title:String,
        desc:String,
        author:String,
        text:String
    
},{
    collection: 'blogs'
});

var Blog=mongoose.model('Blog',blogSchema);

Blogrouter.route('/publish').post(function(req,res){
    console.log(req.body);
    var blogpost= req.body;
    var blog= new Blog(blogpost.post);
    blog.save()
    .then(blog=>{
        res.json('Item added Successfully');
    })
    .catch(err=>{
        res.status(400).send('Something Went Wrong');
    });
});

Blogrouter.route('/myposts').get(function(req,res){
    Blog.find(function(err,postblog){
        if(err){
            console.log(err);
        }
        else
            res.json(postblog);
    });
});

Blogrouter.route('/view/:id').get(function(req,res){
    var id=req.params.id;
    Blog.findById(id, function(err,postblog){
        if(err){
            console.log(err);
        }
        else
            res.json(postblog);
    });
});


Blogrouter.route('/delete/:id').get(function(req,res){
    var id=req.params.id;
    console.log('am working');
    Blog.findByIdAndRemove(id, function(err,postblog){
        if(err){
            console.log(err);
        }
        else
            res.json(postblog);
    });
});

module.exports = Blogrouter;