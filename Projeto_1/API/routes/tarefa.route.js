const controller =require('../controllers/tarefa.controller')
const express = require('express');
const router = express.Router();

router.get('/',controller.findTarefas);
router.get('/:id',controller.findTarefa);
router.post('/',controller.saveTarefa);
router.put('/:id',controller.update)
router.delete('/:id',controller.deleteTarefa);

module.exports=router;