const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const db = {};

// Importar o modelo Ponto
db.Ponto = require('./ponto');

// Função para sincronizar os modelos
const syncModels = async () => {
    try {
        await sequelize.sync(); // Sincroniza os modelos
        console.log('Modelos sincronizados com o banco de dados.');
    } catch (err) {
        console.error('Erro ao sincronizar modelos:', err);
    }
};

syncModels(); // Chama a função para sincronizar

module.exports = db;
