const graphEstilos = document.getElementById('estilos');

new Chart(graphEstilos, {
    type: 'bar',
    data: {
        labels: ['Art Déco', 'Boho', 'Cottage', 'Contemporâneo', 'Eclético', 'Escandinavo', 'Industrial', 'Minimalista', 'Moderno', 'Orgânico', 'Oriental', 'Provençal', 'Rústico', 'Tradicional', 'Tropical', 'Vintage'],
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
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

var xInfo = [];
var dados = {
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
}

var graphCadastros = new Chart(document.getElementById(`cadastros`), {
    type: 'line',
    data: dados,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

var graphInteracao = new Chart(document.getElementById(`interacao`), {
    type: 'pie',
    data: data,
});

const dataCad = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

var graphCadastrados = new Chart(document.getElementById(`cadastrados`), {
    type: 'pie',
    data: dataCad,
});