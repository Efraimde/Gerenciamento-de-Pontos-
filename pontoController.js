const { Ponto } = require('../models'); // Ajuste o caminho conforme necessário

exports.getAllPontos = async (req, res) => {
    try {
        const pontos = await Ponto.findAll();
        res.json(pontos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter pontos' });
    }
};

exports.createPonto = async (req, res) => {
    const { nomePonto, status, nomeFuncionario, horarioEntrada, horarioSaida } = req.body;

    try {
        const novoPonto = await Ponto.create({
            nomePonto,
            status,
            nomeFuncionario,
            horarioEntrada,
            horarioSaida
        });
        res.status(201).json(novoPonto);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar ponto' });
    }
};
