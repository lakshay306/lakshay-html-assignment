const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who wrote 'Harry Potter'?", answer: "j.k. rowling" }
];

let score = 0;

for (let i = 0; i < quizQuestions.length; i++) {
    // prompt() opens a popup box in the browser
    let userAnswer = prompt(quizQuestions[i].question);

    // Handle case where user clicks 'Cancel'
    if (userAnswer === null) break;

    const cleaned = userAnswer.toLowerCase().trim();

    if (cleaned === quizQuestions[i].answer) {
        alert("Correct!");
        score++;
    } else {
        // FIXED: Added backticks around the whole string
        alert(`Wrong. Correct answer: ${quizQuestions[i].answer}`);
    }
}

// FIXED: Added backticks here too
alert(`Quiz Completed! Your Score: ${score} / ${quizQuestions.length}`);
