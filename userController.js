const UserController = {
    getAllUsers: (req, res) => {
        res.send("Todos os usuários");
    },
    getUserById: (req, res) => {
        res.send(`Usuário com ID: ${req.params.id}`);
    },
    createUser: (req, res) => {
        res.send("Usuário criado");
    },
    updateUser: (req, res) => {
        res.send(`Usuário atualizado com ID: ${req.params.id}`);
    },
    deleteUser: (req, res) => {
        res.send(`Usuário deletado com ID: ${req.params.id}`);
    }
};

module.exports = UserController;
