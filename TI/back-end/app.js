const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const publicPath = path.join(__dirname, 'public');
const cors = require('cors');

// Configuração do banco e outros módulos
const conecta_banco = require('./models/conecta_banco');
const { Usuario, Equipe, Colaborador, ServicoTipo, Servico, Admin, syncModels } = require('./models/conecta_banco');

// Sincronizando modelos com o banco de dados
//syncModels();
// Middleware para habilitar o CORS para todas as origens
app.use(cors());

// Configuração para servir arquivos estáticos na pasta 'public'
app.use(express.static(publicPath));

// Configurando o middleware body-parser para processar JSON
app.use(bodyParser.json());

// Importando e utilizando as rotas
const adminRoutes = require('./rotas/admin');
const usuarioRoutes = require('./rotas/usuario');
const equipeRoutes = require('./rotas/equipes');
const colaboradorRoutes = require('./rotas/colaborador');
const servicoTipoRoutes = require('./rotas/servicoTipo');
const servicoRoutes = require('./rotas/servico');

app.use('/admin', adminRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/equipe', equipeRoutes);
app.use('/colaborador', colaboradorRoutes);
app.use('/servico-tipo', servicoTipoRoutes);
app.use('/servico', servicoRoutes);

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo à página principal!');
});

// Configuração para iniciar o servidor
const PORT = 8082;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

