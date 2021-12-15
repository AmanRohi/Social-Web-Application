const express = require('express');
const port = 8000;
const app = express();
const cookieParser = require('cookie-parser');
const expressEjsLayouts = require('express-ejs-layouts');





//  using the middleares

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./Assets'));


app.use(expressEjsLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('./',require('./routes'));


app.listen(port,(err)=>{
    if(err){console.log('Error in loading the server '); return;}
    console.log('Successfully connected with the server on port : ',port);
})
