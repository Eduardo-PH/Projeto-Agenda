const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cad = require('./models/Cad')
const Emp = require('./models/Emp')

// Configurando Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
// Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())    
//Rotas

    app.get('/', function(req, res){
        res.render('home')
    })

    app.get('/caduse', function(req, res){
        res.render('cadastro')
    })

    app.post('/add', function(req, res){
       Cad.create({
        nome: req.body.name,
        login: req.body.login,
        senha: req.body.senha
       }).then(function(){
        res.redirect('/cademp')
       }).catch(function(erro){
        res.send("Houve um erro: " + erro)
       })
    })

    app.get('/cademp', function(req, res){
        res.render('empresa')
    })

    app.post('/addemp', function(req, res){
        Emp.create({
         nome: req.body.name,
         cnpj: req.body.cnpj,
         data: req.body.data,
         email: req.body.email,
         telefone: req.body.telefone,
         cep: req.body.cep,
         endereco: req.body.endereco
        }).then(function(){
         res.redirect('/')
        }).catch(function(erro){
         res.send("Houve um erro: " + erro)
        })
     })

app.listen(8080 , function(){
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});