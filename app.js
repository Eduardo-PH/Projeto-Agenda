const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_cadastro', 'postgres', 'eduardo2001', {
    host: 'localhost',
    dialect:'postgres'
  });

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Falha ao se conectar: " + erro)
})