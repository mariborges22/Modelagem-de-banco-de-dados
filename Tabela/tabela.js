const Sequelize=require("sequelize")
const connection=require("../Database/database");
const Tabela=connection.define('tabela', {
    função:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descrição:{
        type:Sequelize.TEXT,
        allowNull:false
    }, cardinalidade:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

Tabela.sync({force:false})

module.exports=Tabela;