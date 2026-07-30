const quiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: 1,
  },
  {
    question: "Which language is used for website logic?",
    options: ["CSS", "JavaScript", "HTML", "SQL"],
    answer: 1,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    answer: 2,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0,
  },
  {
    question: "Which HTML tag is used for images?",
    options: ["<img>", "<image>", "<picture>", "<src>"],
    answer: 0,
  },
  {
    question: "CSS stands for?",
    options: [
      "Computer Style Sheet",
      "Creative Style Sheet",
      "Cascading Style Sheet",
      "Color Style Sheet",
    ],
    answer: 2,
  },
  {
    question: "Which method prints in console?",
    options: ["print()", "console.log()", "echo()", "display()"],
    answer: 1,
  },
  {
    question: "Which keyword declares a variable?",
    options: ["let", "loop", "print", "show"],
    answer: 0,
  },
  {
    question: "Bootstrap is a ______.",
    options: ["Programming Language", "Database", "CSS Framework", "Browser"],
    answer: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = [];

const qnsNumber = document.getElementById("qnsNumber");
const question = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const progressBar = document.getElementById("progressBar");

const timerText = document.getElementById("timer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let timer;
let timeLeft = 30;

function loadQuestion() {
  selectedAnswer = null;

  let q = quiz[currentQuestion];

  qnsNumber.textContent = `Question ${currentQuestion + 1} / ${quiz.length}`;

  question.textContent = q.question;

  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];

    btn.classList.remove("selected");
  });

  progressBar.style.width = ((currentQuestion + 1) / quiz.length) * 100 + "%";
}

optionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    optionBtns.forEach((b) => b.classList.remove("selected"));

    btn.classList.add("selected");

    selectedAnswer = index;
  });
});

function startTimer() {
  clearInterval(timer);

  timeLeft = 30;

  timerText.textContent = timeLeft + "s";

  timer = setInterval(() => {
    timeLeft--;

    timerText.textContent = timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);

      nextQuestion();
    }
  }, 1000);
}

function checkAnswer() {
  if (answered[currentQuestion]) return;

  answered[currentQuestion] = true;

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

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;

    loadQuestion();

    startTimer();
  }
});

nextBtn.addEventListener("click", nextQuestion);

submitBtn.addEventListener("click", () => {
  checkAnswer();

  showResult();
});

function showResult() {
  clearInterval(timer);

  question.style.display = "none";
  document.querySelector(".d-grid").style.display = "none";

  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";

  resultBox.classList.remove("d-none");

  scoreText.textContent = `${score} / ${quiz.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  answered = [];

  resultBox.classList.add("d-none");

  question.style.display = "block";
  document.querySelector(".d-grid").style.display = "grid";

  prevBtn.style.display = "inline-block";
  nextBtn.style.display = "inline-block";
  submitBtn.style.display = "inline-block";

  loadQuestion();
  startTimer();
});

loadQuestion();
startTimer();