// var perguntas = [
//     'Ambientes mais limpos (clean), apenas com o necessário',
//     'Ambientes mais cheios, com bastante textura e cor',
//     'Ambientes que te remetam a natureza, com bastante iluminação natural e cores claras',
//     'Ambientes mais frios com muita textura e quadros para compor o ambiente, mas sem o deixer muito carregado',
//     'Ambientes com texturas misturas, muitas cores e muitos acessórios decorando o ambiente (quadros, esculturas, revistas)',
//     'Ambientes modernos, com tecnologias, luzes quentes para detalhes e cores mais monocromáticas',
//     'Ambientes modernos mas com foco na arte que o compõe, formas sinuosas, cores para detalhar pontos específicos',
//     'Ambientes que lhe trazem sensações mais quentes e confortavéis, cores claras na estrutura, mas a decoração com cor dando vida ao local e com uma mistura de iluminação artificial com a natural',
//     'Ambientes mais tradicionais, com detalhes em porcelana, que remetam a épocas antigas e móveis extravagantes',
//     'Ambientes misturando vários estilos, moderno com rústico, tropical com boho, o céu é o limite',
//     'Ambientes com móveis que tenham a aparência nostálgica e, preferencialmente, com arquitetura mais antiga, com colunas ou arcos',
// ]

// var pergAmbientes = [
//     'Ambientes mais limpos (clean)',
// ]

// Quiz Questions and Answers
const quizQuestions = [
    {
      question: "Tipo de ambiente que prefere:",
      options: ["Limpos(clean)", "Cheios com bastante textura e cor", "Os que me remetem a natureza", "Os que possuem texturas mistas e muitos acessórios decorando o ambiente", "Modernos com muita tecnologia", "Modernos com foco na arte que o compõe", "Os que trazem sensasões mais quentes e confortáveis", "Mais tradicionais, com móveis extravagantes", "Aqueles que conseguem misturar vários estilos de forma harmonica", "Os que são mais nostálgicos, que são compostos com móveis e uma arquitetura que lembrem aquelas de antigamente"],
    },
    {
      question: "Composição de cores:",
      options: ["Monocromática", "Colorida", "Leve", "Pastel", "Escura"],
    },
    {
      question: "Composição com materiais:",
      options: ["Bastante vidro e porcelanato", "Madeira e materiais mais confortáveis", "Algo mais industrial, com ferro aparente e tijolos", "Porcelanato e muito verde acompanhando"],
    }
  ];
  
// Variables to track quiz state
let currentQuestion = 0;
let score = 0;

// Function to display quiz questions and options
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next");
  
  // Clear previous options
  optionsElement.innerHTML = "";
  
  // Display current question
  questionElement.textContent = quizQuestions[currentQuestion].question;
  
  // Display options for current question
  quizQuestions[currentQuestion].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", selectOption);
    optionsElement.appendChild(button);
  });
  
  // Disable next button until an option is selected
  nextButton.disabled = true;
}

// Function to handle option selection
function selectOption(event) {
  const selectedOption = event.target.textContent;
  const nextButton = document.getElementById("next");
  
  // Highlight selected option
  const options = document.querySelectorAll("#options button");
  options.forEach(option => {
    option.classList.remove("selected");
  });
  event.target.classList.add("selected");
  
  // Enable next button
  nextButton.disabled = false;
}

// Function to check the answer and move to the next question
function checkAnswer() {
  const selectedOption = document.querySelector("#options .selected");
  
  // Check if an option is selected
  if (selectedOption) {
    // Check if the selected option is correct
    if (selectedOption.textContent === quizQuestions[currentQuestion].options[0]) {
      score++;
    }
    
    // Disable options and next button
    const options = document.querySelectorAll("#options button");
    options.forEach(option => {
      option.disabled = true;
    });
    document.getElementById("next").disabled = true;
    
    // Move to the next question after 1 second
    setTimeout(() => {
      currentQuestion++;
      
      // Check if quiz is completed
      if (currentQuestion === quizQuestions.length) {
        displayResult();
      } else {
        displayQuestion();
      }
    }, 1000);
  }
}

// Function to display the final score
function displayResult() {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const scoreMessage = document.getElementById("score-message");
  
  // Hide quiz container and display result container
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  
  // Display score
  scoreMessage.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
}