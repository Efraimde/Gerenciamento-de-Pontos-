const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

// Define o modelo Ponto
const Ponto = sequelize.define('Ponto', {
    nomePonto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeFuncionario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horarioEntrada: {
        type: DataTypes.TIME,
        allowNull: false
    },
    horarioSaida: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    tableName: 'pontos' // Nome da tabela no banco de dados
});

// Exporta o modelo
module.exports = Ponto;
