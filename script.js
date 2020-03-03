
var startQuizBtn = document.getElementById("start-quiz-btn")
var nextButtn = document.getElementById("next-btn")
var questionContainerEl = document.getElementById("question-container")

var questionEl = document.getElementById('question')
var answerBtnElement = document.getElementById('answer-buttons')

var generateRandomQuestions, currentQuestionIndex 

 //var c = 100;

startQuizBtn.addEventListener('click', beginQuiz) 
nextButtn.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

// start quiz what happens when we click start 
function beginQuiz() {
    startQuizBtn.classList.add('hide')
    // this sorts the questions array so the questions randomly generate 50% of the time
    generateRandomQuestions = questions.sort(() => Math.random() - .5)
    // set the current question to zero to begin with the first one
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    nextQuestion()

}

// what happens when the next button is selected during the questions
function nextQuestion(){
    resetQuizQuestion()
    // showing the current question
    displayQuestion(generateRandomQuestions[currentQuestionIndex])

}

// loops through the questions array by displaying one question at a time
//4 questions multiple choice to select from 
function displayQuestion(question) {
    questionEl.innerText = question.question
    questions.answers[i].forEach(answer => { 
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    })
}

function resetQuizQuestion() {
    clearStatusClass(document.body)
    nextButtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }    
}


function answerChoice(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button.dataset.correct)
    })

    if (generateRandomQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }
    }
    
    function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
      }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
      }

    /*function timer01() {
        amountOfTime = amountOfTime - 1;
        if (amountOfTime < 200) {
            time01.innerHTML = amountOfTime;
        }

        if (amountOfTime < 1) {
            window.clearInterval(update);
       alert("Game Over!")
        }

    update = setInterval("timer01()", 1000);
}*/


// I wasn't clear about setting objects inside arrays and arrays inside objects. This goes back to line 41 where I have to use the forEach method.
var questions = [

   
    {
        question: "what is 22 * 8?",
        answers: [{ text: "39", correct: true},
        {text: "69", correct: false},
        {tetx: "99", correct: false},
        {text: "176", correct: false},           
    ]
        },
    
    {
        question: "what is 22 * 8?",
        answers: [{ text: "39", correct: true},
        {text: "69", correct: false},
        {tetx: "99", correct: false},
        {text: "176", correct: false},            
        ]
            },

    {
        question: "what is JavaScript?",
        answers: [{ text: "39", correct: false},
        {text: "69", correct: false},
        {tetx: "programming launguage", correct: true},
        {text: "176", correct: false},
    ]
            },
            
    {
        question: "what is  909 * 8?",
        answers: [{ text: "7272", correct: true},
        {text: "69", correct: false},
        {tetx: "99", correct: false},
        {text: "176", correct: false},
                        
    ]
            },

    {
        question: "what is 22 * 50?",
        answers: [{ text: "110", correct: true},
        {text: "69", correct: false},
        {tetx: "99", correct: false},
        {text: "176", correct: false},
                            
    ]
            },


]
        
