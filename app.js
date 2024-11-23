const questions = [
  {
    question: "What is the capital of Spain?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Madrid"
  },
  {
    question: "Which country has the largest population?",
    choices: ["USA", "China", "India", "Russia"],
    correctAnswer: "China"
  },
  {
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific"
  },
  {
    question: "What is the longest river in the world?",
    choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    choices: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('next-btn');

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  // Clear the previous choices
  choicesContainer.innerHTML = '';

  // Display the choices
  currentQuestion.choices.forEach(choice => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.classList.add('btn');
    choiceButton.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(choiceButton);
  });
}

function checkAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedChoice === currentQuestion.correctAnswer) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! The correct answer was: " + currentQuestion.correctAnswer);
  }
  scoreDisplay.textContent = "Score: " + score;
  nextButton.disabled = false; // Enable the next button after answering
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    nextButton.disabled = true; // Disable next button until an answer is chosen
  } else {
    alert("Quiz finished! Your final score is: " + score);
    nextButton.disabled = true; // Disable next button after quiz is finished
  }
}

nextButton.addEventListener('click', nextQuestion);

// Start the quiz
displayQuestion();
nextButton.disabled = true; // Disable next button initially
