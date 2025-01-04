//define question
const questions = [
    {
        question: "How does Traditional Ecological Knowledge (TEK) contribute to stream resilience in Malaysia?",
        options: [
            "By promoting sustainable land and water management practices",
            "By improving biodiversity knowledge",
            "By developing better weather and climate observation techniques",
            "By increasing industrial development near water bodies"
        ],
        correctAnswer: 0
    },
    {
        question: "Which aspect of Traditional Ecological Knowledge (TEK) is most effective in managing water resources for stream resilience?",
        options: [
            "Land and water management practices",
            "Cultural and ritual practices",
            "Medicinal and food knowledge",
            "Weather and climate observation"
        ],
        correctAnswer: 0
    },
    {
        question: "How does Traditional Ecological Knowledge (TEK) help in maintaining biodiversity in stream ecosystems?",
        options: [
            "By reducing the dependence on modern technologies",
            "By recognizing the relationship between local plants, animals, and ecosystems",
            "By discouraging community involvement in conservation efforts",
            "By encouraging deforestation and land clearing"
        ],
        correctAnswer: 1
    },
    {
        question: "What role does Traditional Ecological Knowledge (TEK) play in enhancing community participation in stream management?",
        options: [
            "It isolates communities from modern conservation efforts",
            "It helps empower local communities to actively manage and protect streams",
            "It has no role in stream management",
            "It focuses solely on protecting water quality without considering the community's role"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary cause of increasing pressure on Malaysian streams?",
        options: [
            "Overfishing",
            "Pollution, urbanization, and deforestation",
            "Climate change alone",
            "Lack of education"
        ],
        correctAnswer: 1
    }
];


// The rest of your quiz code remains the same.



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


// Call this at the end of the quiz or appropriate event
endQuiz();
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

// Example function to start the quiz or next question
function startQuiz() {
    // Hide the Quit Game button at the start of the quiz
    document.getElementById('quit-button').style.display = 'block';
    // Additional code to start the quiz
}