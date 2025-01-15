// Online Quiz Game

// Array to store quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A: Berlin", "B: Madrid", "C: Paris", "D: Rome"],
        correctAnswer: "C",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A: Earth", "B: Mars", "C: Jupiter", "D: Saturn"],
        correctAnswer: "B",
    },
    {
        question: "What is 5 + 3?",
        options: ["A: 5", "B: 8", "C: 9", "D: 7"],
        correctAnswer: "B",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["A: Harper Lee", "B: J.K. Rowling", "C: Mark Twain", "D: Charles Dickens"],
        correctAnswer: "A",
    },
];
// Initialize score
let score = 0;
// Function to display a random quiz question
function askQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const questionObj = quizQuestions[randomIndex];
    
    console.log(`Question: ${questionObj.question}`);
    questionObj.options.forEach(option => console.log(option));
    
    // Prompt user for an answer
    const userAnswer = prompt("Enter the correct option (A, B, C, or D):").toUpperCase();
    // Check the answer and give feedback
    if (userAnswer === questionObj.correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The correct answer was ${questionObj.correctAnswer}.`);
    }
}
// Function to start the quiz
function startQuiz() {
    console.log("Welcome to the Quiz Game!");
    const totalQuestions = quizQuestions.length;
    for (let i = 0; i < totalQuestions; i++) {
        askQuestion();
    }
    // Display final score
    console.log(`Quiz Over! Your final score is: ${score}/${totalQuestions}`);
}

// Start the quiz
startQuiz();
