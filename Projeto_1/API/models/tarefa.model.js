const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tarefa = new mongoose.Schema({
    titulo:{type:String,required:true},
    descricao:{type:String},
    dataEntrega:{type:Date},
    importancia:{type:Number,default:0}
})

module.exports=mongoose.model("tarefa",tarefa)