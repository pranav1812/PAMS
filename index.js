const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

// init app
const app=express();

// load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

var PORT=3000;

app.get('/',(req,res)=>{
    res.render('layout',{
        title:'hello world'
    });
});

app.listen(3000);

