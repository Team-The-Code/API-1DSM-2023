/*elementos existentes no html*/
const $starGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".question-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $questionText2 = document.querySelector(".texto")
const $nextQuestionButton = document.querySelector(".next-question")
const $next = document.querySelector(".btn")

let currentQuestionAtividade = 0
let totalCorrect = 0

/*Função para iniciar a atividade
  - Ao clicar no botão "começar" a atividade será iniciada*/

$starGameButton.addEventListener("click", startGame)

function startGame(){
    $starGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

/* Transição das perguntas */
function displayNextQuestion(){
    resetState()
    
    if(questions.length === currentQuestionAtividade){
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionAtividade].conteudo
    $questionText2.textContent = questions[currentQuestionAtividade].question

    questions[currentQuestionAtividade].answer.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $nextQuestionButton.classList.add("hide")
}


/*Selecionar resposta correta*/
function selectAnswer (event){
    const answerClicked = event.target 
    if(answerClicked.dataset.correct){
        document.body.classList.add("correct1")
        totalCorrect++
    }
    else {
        document.body.classList.add("incorrect1")
    }
    document.querySelectorAll(".answer").forEach(button =>{
        if(button.dataset.correct) {
            button.classList.add("correct")
        }
        else {
            button.classList.add("incorrect")
        }
        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionAtividade++
}

/*Passsar para proxima pergunta */
$nextQuestionButton.addEventListener("click", displayNextQuestion)

/*Resultado*/
function finishGame() {
    const totalQuestions = questions.length;
    const performance = Math.floor(totalCorrect * 10 / totalQuestions);

    let message = ""
    switch (true) {
        case (performance >= 90):
        message = "Excelente"
         break

        case (performance >= 70):
        message = "Muito bom"
         break

        case (performance >= 50):
        message = "Bom"
         break

        default:
        message = "Pode melhorar"
    }

    if(performance <= 5 ){
        $questionsContainer.innerHTML = 
        `
        <p class="final-message">
          Você acertou ${totalCorrect} de ${totalQuestions} questões!
        </p>
        <button 
          onclick=window.location.reload() 
          class="button"
        >
          Refazer teste
        </button>
      `
    
      }
        else{
          $questionsContainer.innerHTML = 
        `
          <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestions} questões!
          </p>
          <button 
          onclick=window.location.reload() 
          class="button"
        >
         <a href="./Ciclo2.html"> Voce passou</a>
        </button>
          
        `
       }
    
    
    
    
}
 

/*Banco de perguntas
  - Propriedades:
   question;
   answers (array com as respostas);
   correct (respostas certas e erradas).

  - Variável question com array onde cada posição é um objeto com as respostas*/

const questions = [
    {
        question: "Metodologia Agil - Scrum Master",
        conteudo: "Qual é a função do Scrum Master em uma equipe ágil que utiliza a metodologia Scrum?",
        answer: [
            {text: "Gerenciar o backlog de produtos", correct: false},
            {text: "Desenvolver código e funcionalidades do produto", correct: false},
            {text: "Facilitar o processo Scrum e remover impedimentos", correct: true},
            {text: "Definir as metas de lançamento do produto", correct: false},
            
        ]
    },
    {
        question: "Metodologia ágil- Product Owner",
        conteudo: "Qual é a função principal do Product Owner em uma equipe ágil que utiliza a metodologia Scrum?",
        answer: [
            {text: "Definir a arquitetura técnica do produto", correct: false},
            {text: "Priorizar o backlog do produto e representar os interesses do cliente", correct: true},
            {text: "Facilitar as reuniões diárias da equipe de desenvolvimento", correct: false},
            {text: "Garantir que as tarefas diárias estejam de acordo com o plano do projeto", correct: false},
           
        ]
    },
    {
        question: "Metodologia ágil- Dev Team",
        conteudo: "Qual é a principal responsabilidade do time de desenvolvimento em uma equipe ágil que segue a metodologia Scrum?",
        answer: [
            {text: "Definir as metas de lançamento do produto", correct: false},
            {text: "Priorizar o backlog de produtos e representar os interesses do cliente", correct: false},
            {text: "Desenvolver, testar e entregar as funcionalidades do produto", correct: true},
            {text: "Facilitar as reuniões de retrospectiva da equipe", correct: false},
         
        ]
    },
    {
        question: "História Scrum - Scrum Master",
        conteudo: "Na história do Scrum, qual motivo pelo qual a função do Scrum Master foi introduzida?",
        answer: [
            {text: "Para liderar o desenvolvimento de software", correct: false},
            {text: "Para representar os interesses do cliente. ", correct: false},
            {text: "Para facilitar o processo Scrum e remover impedimentos. ", correct: true},
            {text: "Para definir as metas de lançamento do produto", correct: false},
           
        ]
    },
    {
        question: "História Scrum - Product Owner",
        conteudo: "Qual é a função central desempenhada pelo Product Owner na história Scrum?",
        answer: [
            {text: "Definir a arquitetura técnica do produto", correct: false},
            {text: "Gerenciar o cronograma de desenvolvimento da equipe", correct: false},
            {text: "Priorizar o backlog do produto e representar os interesses do cliente", correct: true},
            {text: "Facilitar as reuniões de planejamento de sprint", correct: false}
        ]
    },
    {
        question: "História Scrum - Dev Team",
        conteudo: "Na história do Scrum, qual é o principal papel desempenhado pelo time de desenvolvimento?",
        answer: [
            {text: "Definir as metas de lançamento do produto", correct: false},
            {text: "Priorizar o backlog do produto e representar os interesses do cliente", correct: false},
            {text: "Executar a criação, teste e entrega das funcionalidades do produto. ", correct: true},
            {text: "Facilitar as reuniões de retrospectiva da equipe", correct: false}
        ]
    }

]
