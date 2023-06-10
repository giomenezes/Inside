var minimalista = {
    nome: 'Estilo Minimalista',
    ambiente: 'Limpos e arejados, apenas com o necessário',
    cor: 'Monocromáticas e/ou claras',
    material: 'Metal e madeira',
    mobiliario: 'Simples com boa durabilidade',
    iluminacacao: 'Natural e artificial apenas para detalhes',
    value: 0
};

var industrial = {
    nome: 'Estilo Industrial',
    ambiente: 'Ambientes integrados e amplos',
    cor: 'Cores vibrantes para destaque, como cores primárias',
    material: 'Cimento queimado, concreto aparente',
    mobiliario: 'Equipamentos inox com mobilias mais modernas e arrojadas',
    iluminacacao: 'Iluminação indireta',
    value: 0
};

var tropical = {
    nome: 'Estilo Tropical',
    ambiente: 'Ambientes artisticos com muito verde',
    cor: 'Cores que lembram a fauna, como amarelo, laranja, vermelho, azul, lilás, rosa e branco',
    material: 'Madeira e tecidos naturais',
    mobiliario: 'Estampas, texturas, tudo voltado para a natureza',
    iluminacacao: 'Bastante luz natural',
    value: 0
};

var boho = {
    nome: 'Estilo Boho',
    ambiente: 'Bastante acessórios com muita textura e verde',
    cor: 'Cores terrosas e claras',
    material: 'Materiais naturais',
    mobiliario: 'Peças garimpadas',
    iluminacacao: 'Natural e artificial apenas para detalhes',
    value: 0
};

var cottage = {
    nome: 'Estilo Cottage',
    ambiente: 'Ambientes confortáveis com acabamentos rústicos',
    cor: 'Branco, azul, verde e tons terrosos',
    material: 'Materiais naturais, porcelanato, arebesco e bastante texturas',
    mobiliario: 'Móveis de madeira com peças no estilo vitoriano',
    iluminacacao: 'Iluminação natural, com poucos destaques com iluminação indireta',
    value: 0
};

var tradicional = {
    nome: 'Estilo Tradicional',
    ambiente: 'Ambientes que lembram a decoração europeia clássica',
    cor: 'Cores fortes como vermelho, azul e marrom',
    material: 'Madeiras luxuosas',
    mobiliario: 'Simples com boa durabilidade',
    iluminacacao: 'Equilíbrio entre a luz natural e artificial',
    value: 0
};

var contemporaneo = {
    nome: 'Estilo Contemporâneo',
    ambiente: 'Ambientes geométricos e suaves, básicos mas ousados',
    cor: 'Cores neutras com destaques em cores vivas e forte',
    material: 'Madeira, metais e pedras',
    mobiliario: 'Móveis que se destacam, seja pela cor, tamanho ou design',
    iluminacacao: 'Equilíbrio entre a luz natural e artificial',
    value: 0
};

var moderno = {
    nome: 'Estilo Moderno',
    ambiente: 'Modernos e arejados, com bastante espaço',
    cor: 'Cores neutras e monocromáticas',
    material: 'Aço, vidro e concreto',
    mobiliario: 'Móveis funcionais, simples e confortáveis',
    iluminacacao: 'Janelas amplas para valorizar a luz natural',
    value: 0
};

var artDeco = {
    nome: 'Estilo Art Déco',
    ambiente: 'Ambientes artisticos e luxuosos',
    cor: 'Cores fortes e brilhosas',
    material: 'Madeiras nobres com peças ricas',
    mobiliario: 'Móveis simples e confortáveis',
    iluminacacao: 'Iluminação indireta',
    value: 0
};

var escandinavo = {
    nome: 'Estilo Escandinavo',
    ambiente: 'Ambientes simples e funcionais, livres de tecnologia',
    cor: 'Cores claras e neutras',
    material: 'Elementos naturais, com preferência a madeiras claras e estofados',
    mobiliario: 'Simples com boa durabilidade',
    iluminacacao: 'Janelas amplas para valorizar a luz natural',
    value: 0
};

var ecletico = {
    nome: 'Estilo Eclético',
    ambiente: 'Ambientes imprevisivéis e com bastante variedade de acessórios',
    cor: 'Tons ousados e claros, com bastante contraste',
    material: 'Materiais naturais misturados com metais, pedras',
    mobiliario: 'Móveis variavéis com souvenirs',
    iluminacacao: 'Natural e artificial apenas para detalhes',
    value: 0
};

var organico = {
    nome: 'Estilo Orgânico',
    ambiente: 'Ambientes com curvas, formas arredondadas que trazem leveza e fluidez',
    cor: 'Cores neutras e terrosas',
    material: 'Materiais naturais e delicados',
    mobiliario: 'Móveis curvos e arredondados',
    iluminacacao: 'Bastante luz natural',
    value: 0
};

var oriental = {
    nome: 'Estilo Oriental',
    ambiente: 'Ambientes equilíbrados e harmônicos',
    cor: 'Equílibro entre cores fortes e claras',
    material: 'Porcelanas, estampas e madeiras escuras',
    mobiliario: 'Poucos itens, com muito aconchego',
    iluminacacao: 'Janelas amplas para valorizar a luz natural',
    value: 0
};

var provencal = {
    nome: 'Estilo Provençal',
    ambiente: 'Ambientes naturais e arejados',
    cor: 'Cores pastel quentes',
    material: 'Materiais naturais com textura natural',
    mobiliario: 'Móveis envelhecidos com arranhões, pátina, entalhes em madeira',
    iluminacacao: 'Natural e artificial apenas para detalhes',
    value: 0
};

var rustico = {
    nome: 'Estilo Rústico',
    ambiente: 'Ambientes simples, naturais, sólidos e rudez',
    cor: 'Cores naturais',
    material: 'Mateiriais naturais bem brutos',
    mobiliario: 'Móveis artesanais e decoração sem arte',
    iluminacacao: 'Janelas amplas para valorizar a luz natural',
    value: 0
}

var vintage = {
    nome: 'Estilo Vintage',
    ambiente: 'Ambientes confortantes e equilibrados, sofisticados',
    cor: 'Cores neutras e tons pastéis',
    material: 'Materiais naturais e metal',
    mobiliario: 'Móveis em madeira com estampas florais',
    iluminacacao: 'Iluminação indireta',
    value: 0
}

var finalAmb = null;
var finalCor = null;
var finalMat = null;
var finalMob = null;

var winner = undefined;

var answer1A = '';
var answer1B = '';
var answer1C = '';
var answer1D = '';
var answer1E = '';
var answer1F = '';
var answer1G = '';
var answer1H = '';
var answer1I = '';
var answer1J = '';
var answer1K = '';
var answer1L = '';
var answer1M = '';
var answer1N = '';
var answer1O = '';
var answer1P = '';

var rodada = 1;
var contador = 1;

function somar() {
    if (rodada == 1) {
        if (finalAmb == answer1A) {
            minimalista.value += 1
        } else if (finalAmb == answer1B) {
            industrial.value += 1
        } else if (finalAmb == answer1C) {
            tropical.value += 1
        } else if (finalAmb == answer1D) {
            boho.value += 1
        } else if (finalAmb == answer1E) {
            cottage.value += 1
        } else if (finalAmb == answer1F) {
            tradicional.value += 1
        } else if (finalAmb == answer1G) {
            contemporaneo.value += 1
        } else if (finalAmb == answer1H) {
            moderno.value += 1
        } else if (finalAmb == answer1I) {
            artDeco.value += 1
        } else if (finalAmb == answer1J) {
            escandinavo.value += 1
        } else if (finalAmb == answer1K) {
            ecletico.value += 1
        } else if (finalAmb == answer1L) {
            organico.value += 1
        } else if (finalAmb == answer1M) {
            oriental.value += 1
        } else if (finalAmb == answer1N) {
            provencal.value += 1
        } else if (finalAmb == answer1O) {
            rustico.value += 1
        } else if (finalAmb == answer1P) {
            vintage.value += 1
        }
    } else if (rodada == 2) {
        if (finalCor == answer2A) {
            minimalista.value += 1
        } else if (finalCor == answer2B) {
            industrial.value += 1
        } else if (finalCor == answer2C) {
            tropical.value += 1
        } else if (finalCor == answer2D) {
            boho.value += 1
        } else if (finalCor == answer2E) {
            cottage.value += 1
        } else if (finalCor == answer2F) {
            tradicional.value += 1
        } else if (finalCor == answer2G) {
            contemporaneo.value += 1
        } else if (finalCor == answer2H) {
            moderno.value += 1
        } else if (finalCor == answer2I) {
            artDeco.value += 1
        } else if (finalCor == answer2J) {
            escandinavo.value += 1
        } else if (finalCor == answer2K) {
            ecletico.value += 1
        } else if (finalCor == answer2L) {
            organico.value += 1
        } else if (finalCor == answer2M) {
            oriental.value += 1
        } else if (finalCor == answer2N) {
            provencal.value += 1
        } else if (finalCor == answer2O) {
            rustico.value += 1
        } else if (finalCor == answer2P) {
            vintage.value += 1
        }
    } else if (rodada == 3) {
        if (finalMat == answer3A) {
            minimalista.value += 1
        } else if (finalMat == answer3B) {
            industrial.value += 1
        } else if (finalMat == answer3C) {
            tropical.value += 1
        } else if (finalMat == answer3D) {
            boho.value += 1
        } else if (finalMat == answer3E) {
            cottage.value += 1
        } else if (finalMat == answer3F) {
            tradicional.value += 1
        } else if (finalMat == answer3G) {
            contemporaneo.value += 1
        } else if (finalMat == answer3H) {
            moderno.value += 1
        } else if (finalMat == answer3I) {
            artDeco.value += 1
        } else if (finalMat == answer3J) {
            escandinavo.value += 1
        } else if (finalMat == answer3K) {
            ecletico.value += 1
        } else if (finalMat == answer3L) {
            organico.value += 1
        } else if (finalMat == answer3M) {
            oriental.value += 1
        } else if (finalMat == answer3N) {
            provencal.value += 1
        } else if (finalMat == answer3O) {
            rustico.value += 1
        } else if (finalMat == answer3P) {
            vintage.value += 1
        }
    } else {
        if (finalMob == answer4A) {
            minimalista.value += 1
        } else if (finalMob == answer4B) {
            industrial.value += 1
        } else if (finalMob == answer4C) {
            tropical.value += 1
        } else if (finalMob == answer4D) {
            boho.value += 1
        } else if (finalMob == answer4E) {
            cottage.value += 1
        } else if (finalMob == answer4F) {
            tradicional.value += 1
        } else if (finalMob == answer4G) {
            contemporaneo.value += 1
        } else if (finalMob == answer4H) {
            moderno.value += 1
        } else if (finalMob == answer4I) {
            artDeco.value += 1
        } else if (finalMob == answer4J) {
            escandinavo.value += 1
        } else if (finalMob == answer4K) {
            ecletico.value += 1
        } else if (finalMob == answer4L) {
            organico.value += 1
        } else if (finalMob == answer4M) {
            oriental.value += 1
        } else if (finalMob == answer4N) {
            provencal.value += 1
        } else if (finalMob == answer4O) {
            rustico.value += 1
        } else if (finalMob == answer4P) {
            vintage.value += 1
        }
    }
}

if (rodada == 1) {
    answer1A = minimalista.ambiente;
    answer1B = industrial.ambiente;
    answer1C = tropical.ambiente;
    answer1D = boho.ambiente;
    answer1E = cottage.ambiente;
    answer1F = tradicional.ambiente;

    quizContainer.style.display = 'flex;'
    document.getElementById("image").src = "../assets/quiz/ambient.jpg"
    question.innerHTML = 'Que tipo de ambiente você prefere?'

    contagem.innerHTML = `${contador}/3`
    options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="nextAmb('${answer1A}')">${answer1A}</button>
            <button id="B" class="opcoes" onclick="nextAmb('${answer1B}')">${answer1B}</button>
            <button id="C" class="opcoes" onclick="nextAmb('${answer1C}')">${answer1C}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="nextAmb('${answer1D}')">${answer1D}</button>
            <button id="E" class="opcoes" onclick="nextAmb('${answer1E}')">${answer1E}</button>
            <button id="F" class="opcoes" onclick="nextAmb('${answer1F}')">${answer1F}</button>
        </div>
    `

    contador++
}

function nextAmb(ambiente) {
    console.log(ambiente)
    options.innerHTML = '';

    if (contador == 2) {
        answer1G = contemporaneo.ambiente;
        answer1H = moderno.ambiente;
        answer1I = artDeco.ambiente;
        answer1J = escandinavo.ambiente;
        answer1K = ecletico.ambiente;

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="nextAmb('${ambiente}')">${ambiente}</button>
            <button id="B" class="opcoes" onclick="nextAmb('${answer1G}')">${answer1G}</button>
            <button id="C" class="opcoes" onclick="nextAmb('${answer1H}')">${answer1H}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="nextAmb('${answer1I}')">${answer1I}</button>
            <button id="E" class="opcoes" onclick="nextAmb('${answer1J}')">${answer1J}</button>
            <button id="F" class="opcoes" onclick="nextAmb('${answer1K}')">${answer1K}</button>
        </div>
    `

        contador++
    } else {
        answer1L = organico.ambiente;
        answer1N = oriental.ambiente;
        answer1M = provencal.ambiente;
        answer1O = rustico.ambiente;
        answer1P = vintage.ambiente;

        contagem.innerHTML = `${contador}/3`;
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="round2
            ('${ambiente}')">${ambiente}</button>
            <button id="B" class="opcoes" onclick="round2()">${answer1L}</button>
            <button id="C" class="opcoes" onclick="round2()">${answer1N}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="round2()">${answer1M}</button>
            <button id="E" class="opcoes" onclick="round2()">${answer1O}</button>
            <button id="F" class="opcoes" onclick="round2()">${answer1P}</button>
        </div>
    `
        finalAmb = ambiente;
        rodada++;
        somar();
    }
}

var answer2A = '';
var answer2B = '';
var answer2C = '';
var answer2D = '';
var answer2E = '';
var answer2F = '';
var answer2G = '';
var answer2H = '';
var answer2I = '';
var answer2J = '';
var answer2K = '';
var answer2L = '';
var answer2M = '';
var answer2N = '';
var answer2O = '';
var answer2P = '';

function round2() {
    contador = 1;

    if (rodada == 2) {
        answer2A = minimalista.cor;
        answer2B = industrial.cor;
        answer2C = tropical.cor;
        answer2D = boho.cor;
        answer2E = cottage.cor;
        answer2F = tradicional.cor;

        options.innerHTML = '';
        document.getElementById("image").src = "../assets/quiz/color.jpg"
        question.innerHTML = 'Que tipo de conjunto de cores você prefere?'

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
            <div id="divDireita">
                <button id="A" class="opcoes" onclick="nextCor('${answer2A}')">${answer2A}</button>
                <button id="B" class="opcoes" onclick="nextCor('${answer2B}')">${answer2B}</button>
                <button id="C" class="opcoes" onclick="nextCor('${answer2C}')">${answer2C}</button>
            </div>
            <div id="divDireita">
                <button id="D" class="opcoes" onclick="nextCor('${answer2D}')">${answer2D}</button>
                <button id="E" class="opcoes" onclick="nextCor('${answer2E}')">${answer2E}</button>
                <button id="F" class="opcoes" onclick="nextCor('${answer2F}')">${answer2F}</button>
            </div>
        `

        contador++
    }
}

function nextCor(cor) {
    if (contador == 2) {
        answer2G = contemporaneo.cor;
        answer2H = moderno.cor;
        answer2I = artDeco.cor;
        answer2J = escandinavo.cor;
        answer2K = ecletico.cor;

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="nextCor('${cor}')">${cor}</button>
            <button id="B" class="opcoes" onclick="nextCor('${answer2G}')">${answer2G}</button>
            <button id="C" class="opcoes" onclick="nextCor('${answer2H}')">${answer2H}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="nextCor('${answer2I}')">${answer2I}</button>
            <button id="E" class="opcoes" onclick="nextCor('${answer2J}')">${answer2J}</button>
            <button id="F" class="opcoes" onclick="nextCor('${answer2K}')">${answer2K}</button>
        </div>
    `

        contador++
    } else {
        answer2L = organico.cor;
        answer2N = oriental.cor;
        answer2M = provencal.cor;
        answer2O = rustico.cor;
        answer2P = vintage.cor;

        contagem.innerHTML = `${contador}/3`;
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="round3()">${cor}</button>
            <button id="B" class="opcoes" onclick="round3()">${answer2L}</button>
            <button id="C" class="opcoes" onclick="round3()">${answer2N}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="round3()">${answer2M}</button>
            <button id="E" class="opcoes" onclick="round3()">${answer2O}</button>
            <button id="F" class="opcoes" onclick="round3()">${answer2P}</button>
        </div>
    `
        finalCor = cor;
        rodada++;
        somar();
    }
}

var answer3A = '';
var answer3B = '';
var answer3C = '';
var answer3D = '';
var answer3E = '';
var answer3F = '';
var answer3G = '';
var answer3H = '';
var answer3I = '';
var answer3J = '';
var answer3K = '';
var answer3L = '';
var answer3M = '';
var answer3N = '';
var answer3O = '';
var answer3P = '';

function round3() {
    contador = 1;

    if (rodada == 3) {
        answer3A = minimalista.material;
        answer3B = industrial.material;
        answer3C = tropical.material;
        answer3D = boho.material;
        answer3E = cottage.material;
        answer3F = tradicional.material;

        options.innerHTML = '';
        document.getElementById("image").src = "../assets/quiz/fabrics.jpg"
        question.innerHTML = 'Que tipo de materiais você prefere?'

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
            <div id="divDireita">
                <button id="A" class="opcoes" onclick="nextMat('${answer3A}')">${answer3A}</button>
                <button id="B" class="opcoes" onclick="nextMat('${answer3B}')">${answer3B}</button>
                <button id="C" class="opcoes" onclick="nextMat('${answer3C}')">${answer3C}</button>
            </div>
            <div id="divDireita">
                <button id="D" class="opcoes" onclick="nextMat('${answer3D}')">${answer3D}</button>
                <button id="E" class="opcoes" onclick="nextMat('${answer3E}')">${answer3E}</button>
                <button id="F" class="opcoes" onclick="nextMat('${answer3F}')">${answer3F}</button>
            </div>
        `
        contador++
    }
}

function nextMat(material) {
    if (contador == 2) {
        answer3G = contemporaneo.material;
        answer3H = moderno.material;
        answer3I = artDeco.material;
        answer3J = escandinavo.material;
        answer3K = ecletico.material;

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="nextMat('${material}')">${material}</button>
            <button id="B" class="opcoes" onclick="nextMat('${answer3G}')">${answer3G}</button>
            <button id="C" class="opcoes" onclick="nextMat('${answer3H}')">${answer3H}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="nextMat('${answer3I}')">${answer3I}</button>
            <button id="E" class="opcoes" onclick="nextMat('${answer3J}')">${answer3J}</button>
            <button id="F" class="opcoes" onclick="nextMat('${answer3K}')">${answer3K}</button>
        </div>
    `

        contador++
    } else {
        answer3L = organico.material;
        answer3N = oriental.material;
        answer3M = provencal.material;
        answer3O = rustico.material;
        answer3P = vintage.material;

        contagem.innerHTML = `${contador}/3`;
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="round4()">${material}</button>
            <button id="B" class="opcoes" onclick="round4()">${answer3L}</button>
            <button id="C" class="opcoes" onclick="round4()">${answer3N}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="round4()">${answer3M}</button>
            <button id="E" class="opcoes" onclick="round4()">${answer3O}</button>
            <button id="F" class="opcoes" onclick="round4()">${answer3P}</button>
        </div>
    `
        finalMat = material;
        rodada++;
        somar();
    }
}

var answer4A = '';
var answer4B = '';
var answer4C = '';
var answer4D = '';
var answer4E = '';
var answer4F = '';
var answer4G = '';
var answer4H = '';
var answer4I = '';
var answer4J = '';
var answer4K = '';
var answer4L = '';
var answer4M = '';
var answer4N = '';
var answer4O = '';
var answer4P = '';

function round4() {
    contador = 1;

    if (rodada == 4) {
        answer4A = minimalista.mobiliario;
        answer4B = industrial.mobiliario;
        answer4C = tropical.mobiliario;
        answer4D = boho.mobiliario;
        answer4E = cottage.mobiliario;
        answer4F = tradicional.mobiliario;

        options.innerHTML = '';
        document.getElementById("image").src = "../assets/quiz/furniture.jpg"
        question.innerHTML = 'Que tipo de mobilía você prefere?'

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
            <div id="divDireita">
                <button id="A" class="opcoes" onclick="nextMob('${answer4A}')">${answer4A}</button>
                <button id="B" class="opcoes" onclick="nextMob('${answer4B}')">${answer4B}</button>
                <button id="C" class="opcoes" onclick="nextMob('${answer4C}')">${answer4C}</button>
            </div>
            <div id="divDireita">
                <button id="D" class="opcoes" onclick="nextMob('${answer4D}')">${answer4D}</button>
                <button id="E" class="opcoes" onclick="nextMob('${answer4E}')">${answer4E}</button>
                <button id="F" class="opcoes" onclick="nextMob('${answer4F}')">${answer4F}</button>
            </div>
        `
        contador++
    }
}

function nextMob(mobiliario) {
    if (contador == 2) {
        answer4G = contemporaneo.mobiliario;
        answer4H = moderno.mobiliario;
        answer4I = artDeco.mobiliario;
        answer4J = escandinavo.mobiliario;
        answer4K = ecletico.mobiliario;

        contagem.innerHTML = `${contador}/3`
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="nextMob('${mobiliario}')">${mobiliario}</button>
            <button id="B" class="opcoes" onclick="nextMob('${answer4G}')">${answer4G}</button>
            <button id="C" class="opcoes" onclick="nextMob('${answer4H}')">${answer4H}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="nextMob('${answer4I}')">${answer4I}</button>
            <button id="E" class="opcoes" onclick="nextMob('${answer4J}')">${answer4J}</button>
            <button id="F" class="opcoes" onclick="nextMob('${answer4K}')">${answer4K}</button>
        </div>
    `

        contador++
    } else {
        answer4L = organico.mobiliario;
        answer4N = oriental.mobiliario;
        answer4M = provencal.mobiliario;
        answer4O = rustico.mobiliario;
        answer4P = vintage.mobiliario;

        contagem.innerHTML = `${contador}/3`;
        options.innerHTML = `
        <div id="divDireita">
            <button id="A" class="opcoes" onclick="finalizar()">${mobiliario}</button>
            <button id="B" class="opcoes" onclick="finalizar()">${answer4L}</button>
            <button id="C" class="opcoes" onclick="finalizar()">${answer4N}</button>
        </div>
        <div id="divDireita">
            <button id="D" class="opcoes" onclick="finalizar()">${answer4M}</button>
            <button id="E" class="opcoes" onclick="finalizar()">${answer4O}</button>
            <button id="F" class="opcoes" onclick="finalizar()">${answer4P}</button>
        </div>
    `
        finalMob = mobiliario;
        rodada++;
        somar();
    }
}

function finalizar() {
    options.innerHTML = '';

    if (minimalista.value > industrial.value) {
        winner = minimalista;
    } else if (winner < industrial.value) {
        winner = industrial;
    } else if (winner < tropical.value) {
        winner = tropical;
    } else if (winner < boho.value) {
        winner = boho;
    } else if (winner < cottage.value) {
        winner = cottage;
    } else if (winner < tradicional.value) {
        winner = tradicional;
    } else if (winner < contemporaneo.value) {
        winner = contemporaneo;
    } else if (winner < moderno.value) {
        winner = moderno;
    } else if (winner < artDeco.value) {
        winner = artDeco;
    } else if (winner < escandinavo.value) {
        winner = escandinavo;
    } else if (winner < ecletico.value) {
        winner = ecletico;
    } else if (winner < organico.value) {
        winner = organico;
    } else if (winner < oriental.value) {
        winner = oriental;
    } else if (winner < provencal.value) {
        winner = provencal;
    } else if (winner < rustico.value) {
        winner = rustico;
    } else if (winner < vintage.value) {
        winner = vintage;
    }

    image.style.display = 'none';
    question.style.display = 'none';
    contagem.style.display = 'none';
    divFinal.style = "display: flex;";
    divFinal.innerHTML = `
    <div id="links">
            <h1>O estilo que mais combina com você é:</h1> 
            <h1>${winner.nome}</h1>
            <p>PARABÉNS! Você descobriu o estilo que mais combina contigo! Agora, você pode ler os nossos posts e identificar melhor com o design que você quer dar para sua casa. Para conseguir salvar esse resultado, você precisa se cadastrar em nosso blog! Caso contrário, você pode descobrir mais sobre outros estilos de design de interiores.</p>
            <button onclick="perfil()">IR PARA SEU PERFIL</button>
            <button onclick="start()">VOLTAR PARA INÍCIO DO QUIZ</button>
            <button onclick="home()">VOLTAR PARA A HOME</button>
        </div>
    `
}

function perfil() {
    if (sessionStorage.NICK_USER != undefined) {
        window.location.href = "../dashboard/perfilUser.html";
    } else {
        alert("Faça seu cadastro e salve seu resultado!");
        window.location.href = "../usuario/cadastro.html";
    }
}

function start() {
    window.location.href = "./start.html";
}

function home() {
    window.location.href = "../index.html";
}



