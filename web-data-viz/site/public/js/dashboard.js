var estilosCol = [];
var graphEstilos = new Chart(document.getElementById(`estilos`), {
    type: 'bar',
    data: {
        labels: estilosCol,
        datasets: [{
            label: 'Estilos mais adorados pelos usuários',
            data: [],
            backgroundColor: [
                '#03071e',
                '#370617',
                '#6a040f',
                '#9d0208',
                '#d00000',
                '#dc2f02',
                '#e85d04',
                '#f48c06',
                '#faa307',
                '#ffba08',
                '#f6aa1c',
                '#bc3908',
                '#941b0c',
                '#621708',
                '#220901',
                '#8d0801'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

var xInfo = [];
var graphCadastros = new Chart(document.getElementById(`cadastros`), {
    type: 'line',
    data: {
        labels: xInfo,
        datasets: [{
            label: 'Cadastros realizados',
            data: [],
            fill: false,
            borderColor: '#868890',
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 3,
            backgroundColor: '#868890',
            pointBorderColor: '#868890',
            pointBorderWidth: 3,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

var interacoes = [];
var graphInteracao = new Chart(document.getElementById(`interacao`), {
    type: 'pie',
    data: {
        labels: interacoes,
        datasets: [{
            label: 'Quiz e Torneio',
            data: [],
            backgroundColor: [
                '#fb5607',
                '#ffbe0b'
            ],
            hoverOffset: 4
        }]
    },
});

var usuariosLeitores = [];
var graphCadastrados = new Chart(document.getElementById(`cadastrados`), {
    type: 'pie',
    data: {
        labels: usuariosLeitores,
        datasets: [{
            label: 'Cadastrados que interagem e Não Cadastrados que interagem',
            data: [],
            backgroundColor: [
                '#ff006e',
                '#3a86ff'
            ],
            hoverOffset: 4
        }]
    }
});