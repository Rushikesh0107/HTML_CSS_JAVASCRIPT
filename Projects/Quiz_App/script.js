let questions = [
    {
        question: "What is my favourite dessert?",
        answers: [
            {text: "Gulaab jaamun", correct: false},
            {text: "Kaaju katli", correct: true},
            {text: "Rasmalai", correct: false},
            {text: "Jalebi", correct: false}
        ]
    },
    {
        question: "Whom do I listen to most?",
        answers: [
            {text: "KR$NA", correct: false},
            {text: "Bella", correct: false},
            {text: "Seedhe Maut", correct: true},
            {text: "Arpit Bala", correct: false}
        ]
    },
    {
        question: "Where do I look myself in 5 years?",
        answers: [
            {text: "Dead", correct: true},
            {text: "Corporate Slave", correct: false},
            {text: "An Artist", correct: false},
            {text: "Junkie", correct: false}
        ]
    },
    {
        question: "Would like to visit?",
        answers: [
            {text: "Australia", correct: false},
            {text: "Europe", correct: false},
            {text: "America", correct: false},
            {text: "Japan", correct: true}
        ]
    },
    {
        question: "My last wish would be?",
        answers: [
            {text: "Die", correct: true},
            {text: "Die", correct: true},
            {text: "Die", correct: true},
            {text: "Die", correct: true}
        ]
    }
]

let questionElement = document.getElementById("question")
let answerButton = document.getElementById("answer-buttons")
let nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "NEXT"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}` + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answers => {
        let button = document.createElement("button")
        button.innerHTML = answers.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!!!`
    nextButton.innerText = "Play Again"
    nextButton.style.display = "block"
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz(); 

 