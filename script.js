const questions = [
    {
        question: "1. What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "2. What is the capital of India?",
        answers: ["Paris", "London", "new delhi", "Madrid"],
        correct: 2
    },
    {
        question: "3. What is the capital of Nepal?",
        answers: ["Paris", "kathmandu", "Berlin", "Madrid"],
        correct: 1
    },
    {
        question: "4. What is the capital of spain?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 3
    },
    {
        question: "5. What is the capital of Italy?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correct: 3
    },
    {
        question: "6. What is the capital of UK?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 1
    },
    {
        question: "7. What is the capital of German?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answersRevealed = false;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `
            <h3>${questions[currentQuestion].question}</h3>
            ${questions[currentQuestion].answers.map((answer, index) => `
                <button onclick="checkAnswer(${index})">${answer}</button>
            `).join('')}
        `;
    } else {
        showResults();
    }
}

function checkAnswer(selected) {
    userAnswers.push(selected);
    if (selected === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h3>Your score is ${score} out of ${questions.length}</h3>`;
    document.getElementById('toggle-answers').style.display = 'block';
}

document.getElementById('toggle-answers').addEventListener('click', () => {
    const quizContainer = document.getElementById('quiz-container');
    if (!answersRevealed) {
        quizContainer.innerHTML = questions.map((q, index) => `
            <h3>${q.question}</h3>
            ${q.answers.map((answer, i) => `
                <p style="color: ${i === q.correct ? 'green' : (i === userAnswers[index] ? 'red' : 'black')}">
                    ${answer}
                </p>
            `).join('')}
        `).join('');
        document.getElementById('toggle-answers').textContent = 'Hide Answers';
    } else {
        showResults();
        document.getElementById('toggle-answers').textContent = 'Show Answers';
    }
    answersRevealed = !answersRevealed;
});

window.onload = loadQuestion;
