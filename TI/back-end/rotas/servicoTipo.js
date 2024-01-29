// servicoTipo.js
const express = require('express');
const router = express.Router();
const { ServicoTipo } = require('../models/Estrutura_banco');

// Rota para listar todos os tipos de serviço
router.get('/servico-tipos', async (req, res) => {
    try {
        const tiposServico = await ServicoTipo.findAll();
        res.json(tiposServico);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo tipo de serviço
router.post('/servico-tipos', async (req, res) => {
    const novoTipoServico = req.body;
    try {
        const tipoServicoCriado = await ServicoTipo.create(novoTipoServico);
        res.status(201).json(tipoServicoCriado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um tipo de serviço pelo ID
router.put('/servico-tipos/:id', async (req, res) => {
    const idTipo = req.params.id;
    const novosDadosTipoServico = req.body;
    try {
        await ServicoTipo.update(novosDadosTipoServico, { where: { idTipo } });
        res.send('Tipo de serviço atualizado com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir um tipo de serviço pelo ID
router.delete('/servico-tipos/:id', async (req, res) => {
    const idTipo = req.params.id;
    try {
        await ServicoTipo.destroy({ where: { idTipo } });
        res.send('Tipo de serviço excluído com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

