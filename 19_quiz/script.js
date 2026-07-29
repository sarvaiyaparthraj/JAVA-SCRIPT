let quiz = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const qnsNumber = document.getElementById("qnsNumber");
const question = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const progressBar = document.getElementById("progressBar");

async function getQuiz() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();

        quiz = data.results.map(item => {

            let options = [...item.incorrect_answers];
            options.push(item.correct_answer);

            // Shuffle Options
            options.sort(() => Math.random() - 0.5);

            return {
                question: decodeHTML(item.question),
                options: options.map(opt => decodeHTML(opt)),
                answer: options.indexOf(item.correct_answer)
            };
        });

        loadQuestion();

    } catch (error) {
        console.log(error);
    }
}


function decodeHTML(text) {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
}

function loadQuestion() {

    selectedAnswer = null;

    let q = quiz[currentQuestion];

    qnsNumber.innerHTML = `Question ${currentQuestion + 1} / ${quiz.length}`;

    question.innerHTML = q.question;

    optionBtns.forEach((btn, index) => {
        btn.innerHTML = q.options[index];
        btn.classList.remove("selected", "correct", "wrong");
    });

    progressBar.style.width =
        ((currentQuestion + 1) / quiz.length) * 100 + "%";
}


optionBtns.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        optionBtns.forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected");

        selectedAnswer = index;
    });

});


getQuiz();



let timeLeft = 30;
let timer;

const timerText = document.getElementById("timer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function startTimer() {

    clearInterval(timer);

    timeLeft = 30;

    timerText.innerHTML = timeLeft + "s";

    timer = setInterval(() => {

        timeLeft--;

        timerText.innerHTML = timeLeft + "s";

        if (timeLeft <= 0) {

            clearInterval(timer);

            nextQuestion();

        }

    }, 1000);

}

startTimer();


function checkAnswer() {

    if (selectedAnswer === quiz[currentQuestion].answer) {

        score++;

    }

}



function nextQuestion() {

    checkAnswer();

    if (currentQuestion < quiz.length - 1) {

        currentQuestion++;

        loadQuestion();

        startTimer();

    } else {

        showResult();

    }

}

nextBtn.addEventListener("click", nextQuestion);


prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

        startTimer();

    }

});



submitBtn.addEventListener("click", () => {

    checkAnswer();

    showResult();

});



function showResult() {

    clearInterval(timer);

    document.getElementById("question").style.display = "none";

    document.querySelector(".d-grid").style.display = "none";

    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";

    resultBox.classList.remove("d-none");

    scoreText.innerHTML = `${score} / ${quiz.length}`;

}


restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    resultBox.classList.add("d-none");

    document.getElementById("question").style.display = "block";

    document.querySelector(".d-grid").style.display = "grid";

    prevBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "inline-block";

    loadQuestion();

    startTimer();

});