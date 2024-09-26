const express = require('express');
const router = express.Router();
const { Ponto } = require('../models'); // Importar o modelo Ponto

// Rota para obter todos os pontos
router.get('/', async (req, res) => {
    try {
        const pontos = await Ponto.findAll();
        res.json(pontos);
    } catch (error) {
        console.error('Erro ao buscar pontos:', error);
        res.status(500).json({ error: 'Erro ao buscar pontos' });
    }
});

// Rota para adicionar um novo ponto
router.post('/', async (req, res) => {
    try {
        const novoPonto = await Ponto.create(req.body);
        res.status(201).json(novoPonto);
    } catch (error) {
        console.error('Erro ao adicionar ponto:', error);
        res.status(500).json({ error: 'Erro ao adicionar ponto' });
    }
});

// Rota para editar um ponto existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ponto = await Ponto.findByPk(id);
        if (!ponto) {
            return res.status(404).json({ error: 'Ponto não encontrado' });
        }
        const pontoAtualizado = await ponto.update(req.body);
        res.json(pontoAtualizado);
    } catch (error) {
        console.error('Erro ao editar ponto:', error);
        res.status(500).json({ error: 'Erro ao editar ponto' });
    }
});

// Rota para excluir um ponto existente
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ponto = await Ponto.findByPk(id);
        if (!ponto) {
            return res.status(404).json({ error: 'Ponto não encontrado' });
        }
        await ponto.destroy();
        res.status(204).send(); // Resposta sem conteúdo
    } catch (error) {
        console.error('Erro ao excluir ponto:', error);
        res.status(500).json({ error: 'Erro ao excluir ponto' });
    }
});

module.exports = router; // Exporta o router


