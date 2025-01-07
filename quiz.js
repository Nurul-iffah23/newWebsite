const questions = [
    {
        question: "How does TEK help streams in Malaysia?",
        options: [
            "Promotes sustainable land and water use",
            "Improves biodiversity knowledge",
            "Develops better climate tools",
            "Increases industrial development"
        ],
        correctAnswer: 0
    },
    {
        question: "What TEK practice manages water best?",
        options: [
            "Land and water management",
            "Cultural practices",
            "Medicinal knowledge",
            "Weather observation"
        ],
        correctAnswer: 0
    },
    {
        question: "How does TEK support biodiversity?",
        options: [
            "Reduces modern tech use",
            "Links plants, animals, and ecosystems",
            "Discourages conservation",
            "Encourages deforestation"
        ],
        correctAnswer: 1
    },
    {
        question: "How does TEK involve communities?",
        options: [
            "Isolates communities",
            "Empowers them to protect streams",
            "Has no role in management",
            "Focuses only on water quality"
        ],
        correctAnswer: 1
    },
    {
        question: "What pressures streams in Malaysia most?",
        options: [
            "Overfishing",
            "Pollution and deforestation",
            "Only climate change",
            "Lack of education"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

// Show the current question and options
function showQuestion() {
    const question = questions[currentQuestionIndex];

    // Update question text
    document.getElementById('question').textContent = question.question;
    document.getElementById('option1').textContent = question.options[0];
    document.getElementById('option2').textContent = question.options[1];
    document.getElementById('option3').textContent = question.options[2];
    document.getElementById('option4').textContent = question.options[3];

    // Show question number (e.g., 1/5)
    document.getElementById('question-number').textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    // Reset previous answers' colors
    resetAnswerSelection();

    // Hide next button initially
    document.getElementById('next-button').style.display = 'none';
}

// Handle the user's answer selection
function selectAnswer(answerIndex) {
    // Highlight the selected option
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected')); // Remove previous selections
    document.getElementById('option' + (answerIndex + 1)).classList.add('selected'); // Add selection class

    // Store the answer
    userAnswers[currentQuestionIndex] = answerIndex;

    // Show next button
    document.getElementById('next-button').style.display = 'block';
}

// Reset the styling of all answers
function resetAnswerSelection() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected')); // Remove any previous selection
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

// Quit game button
function quitGame() {
    var quitButton = document.getElementById('quit-button');
    var retryButton = document.getElementById('retry-button');
    var feedback = document.getElementById('answer-report');

    quitButton.innerHTML = "Exiting...";
    quitButton.disabled = true;
    feedback.innerHTML = "You have exited the quiz. Redirecting to the homepage...";

    // After 2 seconds, redirect the user to the homepage (or any page you'd like)
    setTimeout(function() {
        window.location.href = "mainPage.html";  // Change this to your desired exit page
    }, 2000); // 2-second delay before redirection
}

// Function to show Quit Game button when the quiz ends
function endQuiz() {
    // Hide "Next" button and show "Try Again" and "Quit Game" buttons
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('retry-button').style.display = 'block';
    document.getElementById('quit-button').style.display = 'block';  // Show Quit button
}

// Start quiz
function startQuiz() {
    // Hide the Quit Game button at the start of the quiz
    document.getElementById('quit-button').style.display = 'none';
    // Additional code to start the quiz
}

// Initialize the quiz
showQuestion(); // Start the quiz when the page loads
