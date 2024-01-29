// equipe.js
const express = require('express');
const router = express.Router();
const { Equipe } = require('../models/Estrutura_banco');

// Rota para listar todas as equipes
router.get('/equipes', async (req, res) => {
    try {
        const equipes = await Equipe.findAll();
        res.json(equipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar uma nova equipe
router.post('/equipes', async (req, res) => {
    const novaEquipe = req.body;
    try {
        const equipeCriada = await Equipe.create(novaEquipe);
        res.status(201).json(equipeCriada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma equipe pelo nome da equipe
router.put('/equipes/:nomeEquipe', async (req, res) => {
    const nomeEquipe = req.params.nomeEquipe;
    const novosDadosEquipe = req.body;
    try {
        await Equipe.update(novosDadosEquipe, { where: { nomeEquipe } });
        res.send('Equipe atualizada com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir uma equipe pelo nome da equipe
router.delete('/equipes/:nomeEquipe', async (req, res) => {
    const nomeEquipe = req.params.nomeEquipe;
    try {
        await Equipe.destroy({ where: { nomeEquipe } });
        res.send('Equipe excluída com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
