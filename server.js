const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar o middleware CORS
const pontoRoutes = require('./routes/pontoroutes'); // Certifique-se de que o nome está correto
const sequelize = require('./config/database'); // Importar a configuração do banco de dados

const app = express();
const PORT = 3000;

// Middleware para permitir CORS
app.use(cors()); // Permite CORS para todas as origens

// Middleware para parsear JSON
app.use(bodyParser.json());

// Monta as rotas
app.use('/pontos', pontoRoutes); // Certifique-se de que pontoRoutes está exportando um router

// Conectar ao banco de dados e iniciar o servidor
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
};

startServer(); // Chama a função para iniciar o servidor
