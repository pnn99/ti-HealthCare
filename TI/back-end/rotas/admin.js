const express = require('express');
const router = express.Router();
const { Admin } = require('../models/Estrutura_banco');

// Rota específica para admin
router.get('/', (req, res) => {
    res.send('Bem-vindo à área de administração!');
});

// Rota para listar todos os administradores
router.get('/admins', async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo administrador
router.post('/admins', async (req, res) => {
    const novoAdmin = req.body;
    try {
        const adminCriado = await Admin.create(novoAdmin);
        res.status(201).json(adminCriado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um administrador pelo ID
router.put('/admins/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosAdmin = req.body;
    try {
        await Admin.update(novosDadosAdmin, { where: { id } });
        res.send('Administrador atualizado com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir um administrador pelo ID
router.delete('/admins/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Admin.destroy({ where: { id } });
        res.send('Administrador excluído com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
