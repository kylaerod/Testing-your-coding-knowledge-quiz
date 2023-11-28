const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');

let currentQuestionIndex = 0;

function startQuiz() {
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    questionContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    // Display the question text
    document.getElementById('question').innerText = question.question;

    // Display the answer options
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedAnswer) {
    // Handle logic when an answer is selected
    // You can add scoring, track correct answers, etc.

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // End of the quiz
        // You can display the final score or redirect to another page
        alert('Quiz completed!');
    }
}

// Define your quiz questions and answers
const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris'
    },
    // Add more questions here
];

// Event listeners
startButton.addEventListener('click', startQuiz);