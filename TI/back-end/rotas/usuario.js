const express = require('express');
const router = express.Router();
const path = require('path'); // Importe o módulo 'path' aqui
const { Usuario } = require('../models/Estrutura_banco');

// Rota para listar todos os usuários
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar um novo usuário
router.post('/usuarios', async (req, res) => {
    const novoUsuario = req.body;
    try {
        const usuarioCriado = await Usuario.create(novoUsuario);
        res.status(201).json(usuarioCriado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para exibir o formulário de cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/cadastro.html'));
});

// Rota para atualizar um usuário pelo CPF
router.put('/usuarios/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    const novosDadosUsuario = req.body;
    try {
        await Usuario.update(novosDadosUsuario, { where: { cpf } });
        res.send('Usuário atualizado com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para excluir um usuário pelo CPF
router.delete('/usuarios/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    try {
        await Usuario.destroy({ where: { cpf } });
        res.send('Usuário excluído com sucesso.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
