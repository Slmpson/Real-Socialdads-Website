const quizContainer = document.querySelector('.quiz');
const resultsContainer = document.querySelector('.results');
const submitButton = document.querySelector('.submit');



const showResults = () => {

};

buildQuiz();

submitButton.addEventListener('click', showResults)


const categories = [
    history = [
        {
            question: "Question 1",
            answer: {
                a: "Answer 1",
                b: "Answer 2",
                c: "Answer 3",
                d: "Answer 4"
            },
            correctAnswer: "c"
        },
        {
            question: "Question 2",
            answer: {
                a: "Answer 1",
                b: "Answer 2",
                c: "Answer 3",
                d: "Answer 4"
            },
            correctAnswer: "a" 
        }
    ]
];

const buildQuiz = () => {
    const output = [];

    // for each question
    categories.forEach(currentQuestion, questionNumber) => {

        // variable to store list of possible answers
        const answers = [];

        
    }
};