const express = require('express')
const app = express();
const bodyParser = require("body-parser");
//Configurar antes da configuração da Rota PFV
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended: true }));
//configurando o banco 

const db = require("./config/bd.config");

db.on("open", () => {
    console.log("Conectado ao mongo! ");
  });
  db.on("error", (err) => {
    console.log(err);
  });
//CONFIGURANDO AS ROTAS
const tarefaRoute= require('./routes/tarefa.route');

app.use('/tarefa',tarefaRoute);




app.get('/',(req,res)=>{
    res.send("Pagina Inicial");
})

app.listen(3000,()=>{console.log('Servidor On')})