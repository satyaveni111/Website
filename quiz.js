// Array of quiz questions
const quiz = [
    {
        question: "What is the default value of an uninitialized wire in Verilog?",
        options: {
            A: "0",
            B: "1",
            C: "x (unknown)",
            D: "z (high impedance)"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is a blocking assignment?",
        options: {
            A: "assign",
            B: "=",
            C: "<=",
            D: "if-else"
        },
        correctAnswer: "B"
    },
    {
        question: "What keyword is used to declare a module in Verilog?",
        options: {
            A: "mod",
            B: "module",
            C: "design",
            D: "component"
        },
        correctAnswer: "B"
    }
];

// Initialize variables
let currentQuestionIndex = 0;
let correctScore = 0;
let wrongScore = 0;
let timeLeft = 600; // 10 minutes in seconds

// Function to display a question
// Function to display a question
// Function to display a question
// Function to display a question
function loadQuestion() {
let options = document.querySelectorAll('input[name="answer"]');
options.forEach(option => {
option.checked = false; // Uncheck all options
});

// Reset background color and text color of all labels
let labels = document.querySelectorAll('label');
labels.forEach(label => {
label.style.backgroundColor = ''; // Reset background color of the labels
label.style.color = ''; // Reset text color of the labels
});

let currentQuestion = quiz[currentQuestionIndex];

document.getElementById('question').textContent = currentQuestion.question;
document.getElementById('labelA').textContent = currentQuestion.options.A;
document.getElementById('labelB').textContent = currentQuestion.options.B;
document.getElementById('labelC').textContent = currentQuestion.options.C;
document.getElementById('labelD').textContent = currentQuestion.options.D;

// Add event listener for each option to check the answer immediately
options.forEach(option => {
option.addEventListener('change', function () {
    checkAnswerImmediately(option);
});
});
}

// Function to check the answer immediately when an option is selected
function checkAnswerImmediately(selectedOption) {
let correctAnswer = quiz[currentQuestionIndex].correctAnswer;
let label = document.querySelector(`label[for=${selectedOption.id}]`);

// Reset background color of all labels
let labels = document.querySelectorAll('label');
labels.forEach(label => {
label.style.backgroundColor = ''; // Reset background color of all labels
});

// Highlight the selected answer immediately
if (selectedOption.value === correctAnswer) {
label.style.color = "green"; // Correct answer in green
} else {
label.style.color = "red"; // Wrong answer in red
}
}



// Function to check the answer and highlight the options
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        let answer = selectedOption.value;
        let correctAnswer = quiz[currentQuestionIndex].correctAnswer;

        // Highlight the selected answer
        let label = document.querySelector(`label[for=${selectedOption.id}]`);
        if (answer === correctAnswer) {
            label.style.color = "green"; // Correct answer in green
            correctScore += 1;
        } else {
            label.style.color = "red"; // Wrong answer in red
            wrongScore += 1;
        }

        // Move to the next question after a short delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quiz.length) {
                loadQuestion();
            } else {
                endAssessment(); // End the quiz if no more questions
            }
        }, 2000); // 1-second delay to show color feedback
    } else {
        document.getElementById('feedback').textContent = "Please select an option!";
    }
}

// End assessment function
function endAssessment() {
    // Hide everything except the scorecard
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('sub').style.display = 'none';
    document.getElementById('diffcultyLevel').style.display = 'none';
    document.getElementById('verilog').style.display = 'none';
    document.getElementById('easy').style.display = 'none';
    document.getElementById('endAssessmentBtn').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';

    // Display the correct and wrong scores
    document.getElementById('correctAnswerScore').textContent = "Correct Answers: " + correctScore;
    document.getElementById('wrongAnswerScore').textContent = "Wrong Answers: " + wrongScore;
}

// Timer function
function startTimer() {
    const timerDisplay = document.getElementById('time');

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Display time left
        timerDisplay.textContent = `${minutes}:${seconds}`;

        // Stop the timer at 0 and end the assessment
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endAssessment(); // Call the endAssessment function to show the scorecard
        }

        timeLeft--;
    }, 1000); // Update the timer every second
}

// Shuffle quiz questions and load the first question on page load
window.onload = function () {
    shuffleQuiz(quiz);  // Shuffle the quiz questions
    loadQuestion();     // Load the first question
    startTimer();       // Start the timer
};

// Function to shuffle the quiz questions
function shuffleQuiz(quizArray) {
    for (let i = quizArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]]; // Swap
    }
    return quizArray;
}
