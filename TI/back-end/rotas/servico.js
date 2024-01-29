// servico.js
const express = require('express');
const router = express.Router();
const { Servico } = require('../models/Estrutura_banco');

// Rota para listar todos os serviços
router.get('/servicos', async (req, res) => {
    try {
        const servicos = await Servico.findAll();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo serviço
router.post('/servicos', async (req, res) => {
    const novoServico = req.body;
    try {
        const servicoCriado = await Servico.create(novoServico);
        res.status(201).json(servicoCriado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um serviço pelo ID
router.put('/servicos/:id', async (req, res) => {
    const idServico = req.params.id;
    const novosDadosServico = req.body;
    try {
        await Servico.update(novosDadosServico, { where: { idServico } });
        res.send('Serviço atualizado com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir um serviço pelo ID
router.delete('/servicos/:id', async (req, res) => {
    const idServico = req.params.id;
    try {
        await Servico.destroy({ where: { idServico } });
        res.send('Serviço excluído com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

