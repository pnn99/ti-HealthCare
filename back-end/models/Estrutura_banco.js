const Sequelize = require('sequelize');
const conecta_banco = require('./conecta_banco');

// Modelo para a tabela Usuario
const Usuario = conecta_banco.sequelize.define('Usuario', {
    cpf: {
        type: Sequelize.STRING(14),
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING(45),
    },
    telefone: {
        type: Sequelize.STRING(15),
    },
    senha: {
        type: Sequelize.STRING(45),
    },
    estado: {
        type: Sequelize.STRING(2),
    },
    cidade: {
        type: Sequelize.STRING(45),
    },
    bairro: {
        type: Sequelize.STRING(45),
    },
});

// Modelo para a tabela Equipe
const Equipe = conecta_banco.sequelize.define('Equipe', {
    idEquipe: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nomeEquipe: {
        type: Sequelize.STRING(45),
    },
});

// Modelo para a tabela Colaborador
const Colaborador = conecta_banco.sequelize.define('Colaborador', {
    idFuncionario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING(45),
    },
    telefone: {
        type: Sequelize.STRING(15),
    },
});

// Relacionamento entre Colaborador e Equipe
Colaborador.belongsTo(Equipe, { foreignKey: 'idEquipe' });

// Modelo para a tabela ServicoTipo
const ServicoTipo = conecta_banco.sequelize.define('ServicoTipo', {
    idTipo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING(45),
    },
});

// Modelo para a tabela Servico
const Servico = conecta_banco.sequelize.define('Servico', {
    idServico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Horario: {
        type: Sequelize.DATE,
    },
    idUsuario: {
        type: Sequelize.STRING(14),
    },
});

// Relacionamentos entre Servico, Equipe, Usuario e ServicoTipo
Servico.belongsTo(Equipe, { foreignKey: 'idEquipe' });
Servico.belongsTo(Usuario, { foreignKey: 'idUsuario' });
Servico.belongsTo(ServicoTipo, { foreignKey: 'idTipo' });

// Sincronizando os modelos com o banco de dados
Usuario.sync();
Equipe.sync();
Colaborador.sync();
ServicoTipo.sync();
Servico.sync();

const syncModels = async () => {
    await conecta_banco.sequelize.sync();
  };

// Exportando os modelos para uso em outros lugares
module.exports = {Usuario,Equipe,Colaborador,ServicoTipo,Servico};
