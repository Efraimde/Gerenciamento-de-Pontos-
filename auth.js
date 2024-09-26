const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, 'sua_chave_secreta', (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id; // Salvar o ID do usuário decodificado para uso futuro
        next();
    });
};

module.exports = { checkToken };
