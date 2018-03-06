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
mongoose.connect( "mongodb://csgiri95@gmail.com:giri%401995@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin")
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
  