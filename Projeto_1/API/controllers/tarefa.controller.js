const tarefaModel = require("../models/tarefa.model");

//---------------SALVANDO TAREFA-----------------------
const saveTarefa = async (req, res) => {
    try {
        const aeronave = new tarefaModel(req.body);
        const response = await aeronave.save();
        res.send(response);
      } catch (err) {
        res.status(400).json({ erro: err.message });
      }
  };
//-----------------------------BUSCANDO TAREFA-------------------------
const findTarefa = async(req,res)=>{
    try{
        const response=await tarefaModel
        .findById({_id:req.params.id})
        if(!response){
            throw new Error("Id não encontrado!");
        }
        res.status(200).json(response);
    }catch (err){
        res.status(404).json({erro:err.message});
    }
};

//--------------------------------BUSCANDO TAREFAS--------------------------
const findTarefas = async(req,res)=>{
    try{
        const response = await tarefaModel
        .find({})
        res.status(200).json(response);
    }catch(err){
        res.status(404).json({erro:err.message})
    }
}

//-------------------------------------ATUALIZANDO TAREFA----------------------
const update = async (req, res) => {
    try {
      response = await tarefaModel.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!response) {
        throw new Error("Id não encontrado!");
      }
      res.status(200).json(response);
    } catch (err) {
      res.status(404).json({ erro: err.message });
    }
  };

  //-----------------------------DELETANDO PESSOA-------------------------------
const deleteTarefa = async function(req, res) {
    try {
      const response = await tarefaModel.findOneAndDelete({
        _id: req.params.id
      });
      if (!response) {
        throw new Error("Id não encontrado!");
      }
      res.json({ deletado: response });
    } catch (err) {
      res.json({
        erro: err.message
      });
    }
  };

  module.exports={
      saveTarefa,
      findTarefa,
      findTarefas,
      update,
      deleteTarefa
  }