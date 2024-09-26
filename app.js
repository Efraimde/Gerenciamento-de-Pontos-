document.addEventListener('DOMContentLoaded', () => {
    const pontoForm = document.getElementById('pontoForm');
    const pontoList = document.getElementById('pontoList');

    // Função para carregar pontos
    async function loadPontos() {
        try {
            const response = await fetch('http://localhost:3000/pontos');
            const pontos = await response.json();
            pontoList.innerHTML = '';

            pontos.forEach(ponto => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex flex-column'; // Alterado para coluna
                li.innerHTML = `
                    <div><strong>Nome do Ponto:</strong> ${ponto.nomePonto}</div>
                    <div><strong>Status:</strong> ${ponto.status}</div>
                    <div><strong>Funcionário:</strong> ${ponto.nomeFuncionario}</div>
                    <div><strong>Horário de Entrada:</strong> ${ponto.horarioEntrada}</div>
                    <div><strong>Horário de Saída:</strong> ${ponto.horarioSaida}</div>
                    <div class="mt-2 d-flex justify-content-between">
                        <button class="btn btn-danger btn-sm" onclick="deletePonto(${ponto.id})">Excluir</button>
                        <button class="btn btn-primary btn-sm" onclick="editPonto(${ponto.id}, '${ponto.nomePonto}', '${ponto.status}', '${ponto.nomeFuncionario}', '${ponto.horarioEntrada}', '${ponto.horarioSaida}')">Editar</button>
                    </div>
                `;
                pontoList.appendChild(li);
            });
        } catch (error) {
            console.error('Erro ao carregar pontos:', error);
        }
    }

    // Função para adicionar ponto
    pontoForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const pontoId = document.getElementById('pontoId').value;
        const pontoData = {
            nomePonto: document.getElementById('nomePonto').value,
            status: document.getElementById('status').value,
            nomeFuncionario: document.getElementById('nomeFuncionario').value,
            horarioEntrada: document.getElementById('horarioEntrada').value,
            horarioSaida: document.getElementById('horarioSaida').value,
        };

        try {
            const method = pontoId ? 'PUT' : 'POST';
            const url = pontoId ? `http://localhost:3000/pontos/${pontoId}` : 'http://localhost:3000/pontos';
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pontoData),
            });

            if (response.ok) {
                loadPontos();
                pontoForm.reset();
                document.getElementById('pontoId').value = '';
            }
        } catch (error) {
            console.error('Erro ao adicionar ponto:', error);
        }
    });

    // Função para editar ponto
    window.editPonto = (id, nomePonto, status, nomeFuncionario, horarioEntrada, horarioSaida) => {
        document.getElementById('pontoId').value = id;
        document.getElementById('nomePonto').value = nomePonto;
        document.getElementById('status').value = status;
        document.getElementById('nomeFuncionario').value = nomeFuncionario;
        document.getElementById('horarioEntrada').value = horarioEntrada;
        document.getElementById('horarioSaida').value = horarioSaida;
    };

    // Função para excluir ponto
    window.deletePonto = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/pontos/${id}`, { method: 'DELETE' });

            if (!response.ok) {
                throw new Error(`Erro ao excluir o ponto: ${response.statusText}`);
            }

            // Recarrega os pontos após a exclusão
            loadPontos();
        } catch (error) {
            console.error('Erro ao excluir ponto:', error);
        }
    };

    loadPontos(); // Carregar pontos ao iniciar
});
