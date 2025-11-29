const readline = require("readline");

const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who wrote 'Harry Potter'?", answer: "j.k. rowling" }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let index = 0;

function askQuestion() {
    if (index < quizQuestions.length) {
        rl.question(quizQuestions[index].question + " ", function(userAnswer) {
            const cleaned = userAnswer.toLowerCase().trim();

            if (cleaned === quizQuestions[index].answer) {
                console.log("Correct!");
                score++;
            } else {
                console.log(`Wrong. Correct answer: ${quizQuestions[index].answer}`);
            }

            index++;
            askQuestion();
        });
    } else {
        console.log(`\nQuiz Completed! Your Score: ${score} / ${quizQuestions.length}`);
        rl.close();
    }
}

askQuestion();