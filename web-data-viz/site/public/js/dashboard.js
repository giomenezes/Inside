var qtdUsuario = 0;
var qtdEstilo = 0;

var arrayMes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

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

fetch(`/dashboard/buscarUltimosCadastros`).then(function (response) {
    if (response.ok) {
        response.json().then(function (json) {
            
            for (let i = 0; i < json.length; i++) {
                graphCadastros.data.datasets[0].data.push(json[i].usuario);
                xInfo.push(arrayMes[json[i].mes -1]);

                qtdUsuario += json[i].usuario;
            }

            graphCadastros.update();
        });
    }
});

var popular = "";

fetch(`/dashboard/estiloPopular`).then(function (response) {
    if (response.ok) {
        response.json().then(function (json) {
            
            for (let i = 0; i < json.length; i++) {
                graphEstilos.data.datasets[0].data.push(json[i].qtd);
                estilosCol.push(json[i].nomeEstilo);

                var maior = 0;

                for (let k = 0; k < json.length; k++) {
                    if (json[i].qtd > json[k].qtd) {
                        maior++;
                    }
                }

                if (maior == json.length - 1) {
                    popular = json[i].nomeEstilo;
                }

                qtdEstilo += json[i].qtd;
            }

            if (popular == "") {
                popular = "Empate"
            }

            document.getElementById("spanPopular").innerHTML = popular;

            graphEstilos.update();
        });
    }    
});

fetch(`/dashboard/cadastradosHoje`).then(function (response) {
    if (response.ok) {
        response.json().then(function (json) {
            document.getElementById('spanHoje').innerHTML = json[0].qtd;
        })
    }
});

fetch(`/dashboard/taxaEngajamento`).then(function (response) {
    if (response.ok) {
        response.json().then(function (json) {
            var taxa = json[0].taxa;
            document.getElementById('TEU').innerHTML = Number(taxa).toFixed(1) + "%";
        })
    }
});



