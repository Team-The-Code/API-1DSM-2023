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

    $questionText.textContent = questions[currentQuestionAtividade].question
    $questionText2.textContent = questions[currentQuestionAtividade].conteudo

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
        question: "Metodologia Agil",
        conteudo: "Texto",
        answer: [
            {text: "Resposta 1", correct: true},
            {text: "Resposta 2", correct: false},
            {text: "Resposta 3", correct: false},
            {text: "Resposta 4", correct: false},
            {text: "Resposta 5", correct: false}
        ]
    },
    {
        question: "Pergunta 2",
        conteudo: "Texto",
        answer: [
            {text: "Resposta 1", correct: false},
            {text: "Resposta 2", correct: false},
            {text: "Resposta 3", correct: false},
            {text: "Resposta 4", correct: true},
            {text: "Resposta 5", correct: false}
        ]
    },
    {
        question: "Pergunta 3",
        conteudo: "Texto",
        answer: [
            {text: "Resposta 1", correct: false},
            {text: "Resposta 2", correct: true},
            {text: "Resposta 3", correct: false},
            {text: "Resposta 4", correct: false},
            {text: "Resposta 5", correct: false}
        ]
    },
    {
        question: "Pergunta 4",
        conteudo: "Texto",
        answer: [
            {text: "Resposta 1", correct: false},
            {text: "Resposta 2", correct: false},
            {text: "Resposta 3", correct: true},
            {text: "Resposta 4", correct: false},
            {text: "Resposta 5", correct: false}
        ]
    },
    {
        question: "Pergunta 5",
        conteudo: "Texto",
        answer: [
            {text: "Resposta 1", correct: false},
            {text: "Resposta 2", correct: false},
            {text: "Resposta 3", correct: false},
            {text: "Resposta 4", correct: false},
            {text: "Resposta 5", correct: true}
        ]
    },

]
