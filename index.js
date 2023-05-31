const express=require("express")
const app=express();

const bodyparser=require("body-parser");
const Tabela=require("./Tabela/tabela");
const connection = require("./Database/database");
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.get("/", (req,res)=>{
    Tabela.findAll().then(tabelas=>{
        const response={'info tabelas':tabelas}
        res.status(200).send(response)}).catch(err=>{
            res.status(400).send("Tabela não encontrada")
        })
    })


connection.authenticate().then(()=>{
    console.log("Conexão feita com sucesso")
}).catch(err=>{
    console.log(err)
})

app.post("/tabela/save", (req,res)=>{
    var função=req.body.função
    var nome=req.body.nome
    var cardinalidade=req.body.cardinalidade
    
    var descrição=req.body.descrição
    if(função!=undefined && nome!=undefined && cardinalidade!=undefined && descrição!=undefined){

    Tabela.create({
        função:função,
        nome:nome,
        cardinalidade,
        
        descrição:descrição
    }).then(()=>{
        res.status(200).send({'info tabela':{
        função:função,
        nome:nome,
        cardinalidade:cardinalidade,
        descrição:descrição

        }})
    }).catch(err=>{
        res.status(400).send("Erro ao inserir os dados")
    })
    }else{
        res.status(500).send("Dados inválidos")
    }})
    


app.listen(1020,()=>{
    console.log('Servidor on na 1020')
})