const db = require('./db')

const Emp = db.sequelize.define('empresas',{
    nome: {
        type: db.Sequelize.STRING
      },
      cnpj: {
        type: db.Sequelize.STRING
      },
      data: {
        type: db.Sequelize.STRING
      },
      email: {
        type: db.Sequelize.STRING
      },
      telefone: {
        type: db.Sequelize.STRING
      },
      cep: {
        type: db.Sequelize.STRING
      },
      endereco: {
        type: db.Sequelize.STRING
      }
})

//Emp.sync({force: true})

module.exports = Emp