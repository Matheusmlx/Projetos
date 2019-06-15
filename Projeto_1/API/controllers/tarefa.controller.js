const tarefaModel = require("../models/tarefa.model");

//---------------SALVANDO TAREFA-----------------------
const saveTarefa = async (req, res) => {
    const {titulo}=req.body
    if (!req.is("application/json")) {
        res
          .status(400)
          .json({ erro: "Bad Request! content-type deve ser application/json" });
      } else {
          //Tratando a unique de titulo
        if(await tarefaModel.findOne({titulo}))
            return res.status(400).send({error:'Esse titulo ja existe tente outro'})
        
        try {
          const tarefa = new tarefaModel(req.body);
          await tarefa.save();
          res.status(201).json({
            criado: tarefa._id
          });
        } catch (err) {
          res.status(400).json({ erro: err.message });
        }
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