// colaborador.js
const express = require('express');
const router = express.Router();
const { Colaborador } = require('../models/Estrutura_banco');

// Rota para listar todos os colaboradores
router.get('/colaboradores', async (req, res) => {
    try {
        const colaboradores = await Colaborador.findAll();
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo colaborador
router.post('/colaboradores', async (req, res) => {
    const novoColaborador = req.body;
    try {
        const colaboradorCriado = await Colaborador.create(novoColaborador);
        res.status(201).json(colaboradorCriado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um colaborador pelo ID do funcionário
router.put('/colaboradores/:idFuncionario', async (req, res) => {
    const idFuncionario = req.params.idFuncionario;
    const novosDadosColaborador = req.body;
    try {
        await Colaborador.update(novosDadosColaborador, { where: { idFuncionario } });
        res.send('Colaborador atualizado com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir um colaborador pelo ID do funcionário
router.delete('/colaboradores/:idFuncionario', async (req, res) => {
    const idFuncionario = req.params.idFuncionario;
    try {
        await Colaborador.destroy({ where: { idFuncionario } });
        res.send('Colaborador excluído com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

