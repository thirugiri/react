var express = require('express');
var app=express();
var Blogrouter=express.Router();
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var blogSchema= new Schema({
        title:String,
        desc:String,
        text:String,
        author:String,
        email:String    
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

Blogrouter.route('/myposts').post(function(req,res){
    Blog.find({email:req.body.email},function(err,postblog){
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

Blogrouter.route('/update/:id').post(function(req,res){
    var id=req.params.id;
    Blog.findByIdAndUpdate(id,{"title":req.body.title, "desc":req.body.desc, "text":req.body.text}, function(err,postblog){
        if(err){
            console.log(err);
        }
        else
            res.json(postblog);
    });
});

Blogrouter.route('*').get(function(req,res){
    res.send("Error 404 Not Found");
})

Blogrouter.route('/delete/:id').get(function(req,res){
    var id=req.params.id;
    Blog.findByIdAndRemove(id, function(err,postblog){
        if(err){
            console.log(err);
        }
        else
            res.json(postblog);
    });
});

module.exports = Blogrouter;