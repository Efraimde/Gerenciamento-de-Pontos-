const express = require('express');
const router = express.Router();
const { checkToken } = require('../middleware/auth'); // Verifique se o caminho está correto
const UserController = require('../controllers/UserController'); // Verifique se o arquivo existe

// Use o middleware para verificar o token em rotas específicas
router.use(checkToken);

// Rota para obter todos os usuários
router.get('/', UserController.getAllUsers); // Certifique-se de que o UserController está implementado

// Rota para criar um novo usuário
router.post('/', UserController.createUser); // Certifique-se de que o método está implementado

module.exports = router;
