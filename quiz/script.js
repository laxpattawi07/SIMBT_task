const questions = [
    {
        question: "Which anime series revolves around the Elric brothers?",
        answers:
        [
            { text: "Demon Slayer",correct: false},
            { text: "Attack on Titan",correct: false},
            { text: "Fullmetal Alchemist",correct: true},
            { text: "One piece",correct: false},
        ]
    },
    {
        question: "Whose body gained the properties of rubber after unintentionally eating a Devil Fruit?",
        answers:
        [
            { text: "Sanji",correct: false},
            { text: "Monkey D. Luffy",correct: true},
            { text: "Roronoa Zoro",correct: false},
            { text: "Kaido",correct: false},
        ]   
    },
    {
        question: "The Shinigami is in love with apples. Can you recall his name?",
        answers:
        [
            { text: "Ryuk",correct: true},
            { text: "Gelus",correct: false},
            { text: "Gook",correct: false},
            { text: "Rem",correct: false},
        ]   
    },
    {
        question: "Who is known as the ‘One Punch Man’?",
        answers:
        [
            { text: "Saitama",correct: true},
            { text: "Silver Fang",correct: false},
            { text: "Garou",correct: false},
            { text: "Genos",correct: false},
        ]    
    },
    {
        question: "Who was the first character in ‘Dragon Ball Z’ who achieved the Super Saiyan 2?",
        answers:
        [
            { text: "Goku",correct: false},
            { text: "Vegeta",correct: false},
            { text: "Trunks",correct: false},
            { text: "Gohan",correct: true},
        ]    
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}

function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block"; 
}

function showScore(){
    resetstate();
    questionElement.innerHTML = `Your score is ${score} / ${questions.length}  !!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
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