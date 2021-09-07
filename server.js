const express = require('express');
const app = express();  
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//express hbs view engine
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/productos',(req,res)=>{
    res.render('productos');
});

app.get('/registrar',(req,res)=>{
    res.render('registrar');
});

app.get('/home',(req,res)=>{
    res.render('home');
});

app.get('/shoppingCart',(req,res)=>{
    res.render('shoppingCart');
});

app.get('/iniciarSesion',(req,res)=>{
    res.render('iniciarSesion');
});

app.listen(port,()=>{ 
    console.log(`Escuchando peticiones en el puerto ${port}`);
})