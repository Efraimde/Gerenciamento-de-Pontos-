const { Sequelize } = require('sequelize');

// Configurações do banco de dados
const sequelize = new Sequelize('ponto_digital', 'usuario', '253689', {
    host: 'localhost',
    dialect: 'postgres',
});

// Teste de conexão
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (err) {
        console.error('Não foi possível conectar ao banco de dados:', err);
    }
};

testConnection(); // Chama a função para testar a conexão

module.exports = sequelize;
