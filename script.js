// Nepo baby quiz questions with weighted scoring
const quizData = [
    {
        question: "What is your parents' highest level of education?",
        answers: [
            "High school or less",
            "Some college or associate degree",
            "Bachelor's degree",
            "Advanced degree (Master's, PhD, JD, MD)"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "How did you get your first job or internship?",
        answers: [
            "Applied online with no connections",
            "Through a school career fair",
            "Family friend made an introduction",
            "Parent works at the company or in the industry"
        ],
        weights: [0, 1, 5, 7]
    },
    {
        question: "What best describes your family's financial situation growing up?",
        answers: [
            "Struggled to make ends meet",
            "Comfortable, but careful with money",
            "Well-off, never worried about money",
            "Wealthy, had household staff or multiple properties"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "Did you have unpaid internships during college?",
        answers: [
            "No, I had to work paid jobs",
            "One unpaid internship",
            "Multiple unpaid internships",
            "Multiple unpaid internships in expensive cities (parents paid rent)"
        ],
        weights: [0, 3, 5, 7]
    },
    {
        question: "How did you pay for college?",
        answers: [
            "Full scholarships, grants, or worked my way through",
            "Mix of loans, work, and some family support",
            "Parents paid for most or all of it",
            "Trust fund or parents paid in full, plus living expenses"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "What kind of high school did you attend?",
        answers: [
            "Public school in an underfunded district",
            "Good public school",
            "Private school or magnet school",
            "Elite private school (think $40k+ per year)"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "Have your family connections helped your career?",
        answers: [
            "No connections in my field",
            "Some distant connections, rarely helpful",
            "Parents know people in my industry",
            "Parents are major players in my industry"
        ],
        weights: [0, 1, 5, 7]
    },
    {
        question: "What was your living situation right after college?",
        answers: [
            "Roommates in a small apartment I paid for",
            "Lived at home briefly to save money",
            "Parents helped with rent in the city",
            "Lived rent-free in family-owned property"
        ],
        weights: [0, 2, 4, 7]
    },
    {
        question: "Did you take a 'gap year' or travel extensively?",
        answers: [
            "No, I had to work immediately",
            "Brief vacation after graduation",
            "A few months of travel funded by family",
            "Year+ of travel, 'finding myself' on family's dime"
        ],
        weights: [0, 1, 4, 7]
    },
    {
        question: "How would you describe your professional network?",
        answers: [
            "Built entirely by myself from scratch",
            "Mix of my connections and some family friends",
            "Significantly boosted by family connections",
            "Inherited a powerful network from family"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "How often did you have to 'code-switch' or modify your behavior/speech for professional settings?",
        answers: [
            "Constantly, major effort",
            "Regularly",
            "Occasionally",
            "Never thought about it"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "Did your neighborhood have well-funded schools, low pollution, and access to healthy food?",
        answers: [
            "No to all",
            "Mixed",
            "Mostly yes",
            "Yes to everything"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "Has your name ever been a barrier? (callbacks, pronunciation, 'professionalism')",
        answers: [
            "Significant barrier",
            "Moderate issue",
            "Minor",
            "Never an issue"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "How often are you seen as an individual vs. representative of your entire race/ethnicity?",
        answers: [
            "Always representing",
            "Often",
            "Sometimes",
            "I'm always seen as an individual"
        ],
        weights: [0, 2, 5, 7]
    },
    {
        question: "In professional spaces, is your cultural background seen as 'sophisticated' or 'ethnic/exotic'?",
        answers: [
            "Exoticized/othered",
            "Depends",
            "Neutral",
            "Seen as cultured/sophisticated"
        ],
        weights: [0, 2, 5, 7]
    }
];

// State variables
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM elements
const startSection = document.getElementById('quiz-start');
const questionsSection = document.getElementById('quiz-questions');
const resultsSection = document.getElementById('quiz-results');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score');

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    startSection.classList.remove('active');
    questionsSection.classList.add('active');

    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

    answerButtons.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index, button));
        answerButtons.appendChild(button);
    });

    nextBtn.disabled = true;
    selectedAnswer = null;
}

function selectAnswer(answerIndex, buttonElement) {
    const currentQuestion = quizData[currentQuestionIndex];
    const allButtons = answerButtons.querySelectorAll('.answer-btn');

    // Remove previous selection
    allButtons.forEach(btn => btn.classList.remove('selected'));

    selectedAnswer = answerIndex;

    // Highlight selected answer
    buttonElement.classList.add('selected');

    // Add weight to score
    score += currentQuestion.weights[answerIndex];

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionsSection.classList.remove('active');
    resultsSection.classList.add('active');

    const maxScore = 105; // 15 questions * 7 max points each
    const percentage = Math.round((score / maxScore) * 100);

    let ranking = '';
    let message = '';

    if (percentage >= 80) {
        ranking = 'Supreme Nepo Baby';
        message = 'Born with a platinum spoon. Your family connections are basically a cheat code for life.';
    } else if (percentage >= 60) {
        ranking = 'Certified Nepo Baby';
        message = 'You had significant advantages. The doors were already unlocked for you.';
    } else if (percentage >= 40) {
        ranking = 'Nepo-Adjacent';
        message = 'You had some privileges and connections that gave you a boost.';
    } else if (percentage >= 20) {
        ranking = 'Mostly Self-Made';
        message = 'You worked for most of what you got, with some family support along the way.';
    } else {
        ranking = 'Self-Made';
        message = 'You built everything from scratch. Respect.';
    }

    scoreDisplay.innerHTML = `
        <div style="font-size: 2.5rem; font-weight: bold; color: #667eea; margin-bottom: 15px;">${percentage}%</div>
        <div style="font-size: 1.8rem; font-weight: bold; color: #333; margin-bottom: 10px;">${ranking}</div>
        <div style="font-size: 1rem; color: #666; line-height: 1.5;">${message}</div>
    `;
}

function restartQuiz() {
    resultsSection.classList.remove('active');
    startSection.classList.add('active');

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
}
