var express = require('express');
var path = require('path');
const moment=require('moment');
var app = express();
const mongoose=require('mongoose');
app.locals.moment=moment;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

mongoose.connect("mongodb://localhost/app",{useNewUrlParser:true});
const con=mongoose.connection;
con.on('open',function(){
  console.log("连接成功");
})

app.use('/add', require('./routes/add'))



// error handler
app.use(function (err, req, res, next) {
  res.send('error');
});
app.listen(4000);
module.exports = app;