


// Define questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correctAnswer: 0
    },
    {
        question: "What is the speed of light?",
        options: ["299,792 km/s", "150,000 km/s", "1,000,000 km/s", "300,000 km/s"],
        correctAnswer: 0
    }
];


let currentQuestionIndex = 0;
let userAnswers = [];

// Show the current question and options
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('option1').textContent = question.options[0];
    document.getElementById('option2').textContent = question.options[1];
    document.getElementById('option3').textContent = question.options[2];
    document.getElementById('option4').textContent = question.options[3];
    document.getElementById('next-button').style.display = 'none'; // Hide next button initially
}

// Handle the user's answer selection
function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    document.getElementById('next-button').style.display = 'block'; // Show next button
}

// Show the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show the results after quiz completion
function showResults() {
    let score = 0;
    const resultContainer = document.getElementById("answer-report");
    resultContainer.innerHTML = ""; // Clear previous results

    questions.forEach((question, index) => {
        const answerEntry = document.createElement("div");
        answerEntry.classList.add("answer-entry");

        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.textContent = question.question;
        answerEntry.appendChild(questionElement);

        const userAnswer = document.createElement("div");
        userAnswer.classList.add("answer");

        if (userAnswers[index] === question.correctAnswer) {
            userAnswer.classList.add("correct");
            userAnswer.textContent = `Your answer: ${question.options[userAnswers[index]]}`;
            score++;
        } else {
            userAnswer.classList.add("incorrect");
            userAnswer.textContent = `Your answer: ${question.options[userAnswers[index]]}`;
            const correctAnswer = document.createElement("div");
            correctAnswer.classList.add("answer", "correct");
            correctAnswer.textContent = `Correct answer: ${question.options[question.correctAnswer]}`;
            answerEntry.appendChild(correctAnswer);
        }

        answerEntry.appendChild(userAnswer);
        resultContainer.appendChild(answerEntry);
    });

    document.getElementById("score").textContent = `Your Score: ${score}/${questions.length}`;
    
    // Displaying the message based on the score
    const overallResult = document.getElementById("overall-result");
    if (score === questions.length) {
        overallResult.textContent = "Congratulations! You got all answers correct!";
        overallResult.style.color = "green"; // Make the message green
    } else {
        overallResult.textContent = `Try Again! You got ${score} out of ${questions.length} correct.`;
        overallResult.style.color = "red"; // Make the message red
    }

    document.getElementById("retry-button").style.display = 'block'; // Show retry button
    document.querySelector(".score-section").style.display = 'block'; // Show score section
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    showQuestion();
    document.querySelector(".score-section").style.display = 'none'; // Hide score section
    document.querySelector(".quiz-container").style.display = 'block'; // Show quiz container
    document.getElementById('next-button').style.display = 'none';
}

showQuestion(); // Start the quiz when the page loads
