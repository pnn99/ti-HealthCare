CREATE DATABASE IF NOT EXISTS INTER;

USE INTER;

-- DROP DATABASE IF EXISTS INTER;

CREATE TABLE Usuario (
    cpf VARCHAR(14) PRIMARY KEY NOT NULL,
    nome VARCHAR(45),
    telefone VARCHAR(15),
    senha VARCHAR(45),
    estado VARCHAR(2),
    cidade VARCHAR(45),
    bairro VARCHAR(45)
);

CREATE TABLE Equipe (
    idEquipe INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nomeEquipe VARCHAR(45)
);

CREATE TABLE Colaborador (
    idFuncionario INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    nome VARCHAR(45),
    telefone VARCHAR(15),
    idEquipe INT,
    FOREIGN KEY (idEquipe) REFERENCES Equipe(idEquipe)
);

CREATE TABLE ServicoTipo (
    idTipo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descricao VARCHAR(45)
);

CREATE TABLE Servico (
    idServico INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    idTipo INT,
    Horario DATETIME,
    idEquipe INT,
    idUsuario VARCHAR(14),
    FOREIGN KEY (idEquipe) REFERENCES Equipe(idEquipe),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(cpf),
    FOREIGN KEY (idTipo) REFERENCES ServicoTipo(idTipo)
);
