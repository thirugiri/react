var express= require('express');
var app = express();
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var mongoose=require('mongoose');
var Blogrouter= require('./src/route/Blogrouter')
if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
}

mongoose.Promise=require('bluebird');
mongoose.connect('mongodb://localhost:27017/blogtest')
	.then(()=> {
		console.log('database connected sucessfully');
	})
	.catch(err=>{
		console.log('App Starting error:', err.stack);
		process.exit(1);
	});

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/blog',Blogrouter);
app.listen(process.env.PORT || 5000, function() {
	console.log('Express server is up and running!');
  });
  