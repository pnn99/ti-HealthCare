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

// Rota para criar login
router.post('/login', async (req, res) => {
    const { cpf, senha } = req.body;  

    try {
        let usuarioLogin = await Usuario.findOne({ where: { cpf } });  
        if (usuarioLogin && usuarioLogin.senha === senha) {  // Adicionada verificação se usuário existe
            res.send({sucess: true, mensagem:"Login autorizado"});
        } else {
            res.send({sucess: false, mensagem:"Login não autorizado"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints relacionados aos usuários
 */

// Define Swagger options

// Serve Swagger documentation using Swagger UI
/**
 * @swagger
 * /api-docs:
 *   get:
 *     summary: Obtém a documentação da API Swagger
 *     responses:
 *       200:
 *         description: Documentação da API Swagger
 */

// Rota para listar todos os usuários
/**
 * @swagger
 * /usuario/usuarios:
 *   get:
 *     summary: Obtém todos os usuários
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Resposta bem-sucedida
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: John Doe
 *               - id: 2
 *                 name: Jane Doe
 */

// Rota para criar um novo usuário
/**
 * @swagger
 * /usuario/usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             cpf: 11111111111   
 *             nome: melancia
 *             telefone: 111111111 
 *             senha: 1234567899 
 *             estado: minas gerais
 *             cidade: belo horizonte
 *             bairro: lurdes
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: John Doe
 *               email: john@example.com
 */

// Suas outras rotas existentes...

// Rota para criar um novo usuário
/**
 * @swagger
 * /usuario/login:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             cpf: John Doe
 *             senha: john@example.com
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               cpf: John Doe
 *               senha: john@example.com
 */






