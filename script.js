// The complete scoring map from our analysis
const questions = [
    {
        question: 'Do you describe yourself as an introvert, extrovert, or an ambivert?',
        answers: [
            { text: 'Introvert', result: 'Analytical Chemistry' },
            { text: 'Extrovert', result: 'IBS' },
            { text: 'Ambivert', result: 'Pharmacy Ethics' }
        ]
    },
    {
        question: 'How do you prefer spending your free time?',
        answers: [
            { text: 'Learn something new', result: 'Pharmacognosy' },
            { text: 'Travel somewhere new', result: 'IBS' },
            { text: 'Attend a party/concert with friends', result: 'Pharmaceutics' },
            { text: 'Read a book/novel', result: 'Analytical Chemistry' },
            { text: 'Spend a cozy day at home', result: 'Pharmacy Ethics' }
        ]
    },
    {
        question: 'Usually, do you have your day fully planned?',
        answers: [
            { text: 'Yes, I know exactly what to do...', result: 'Pharmaceutics' },
            { text: 'Maybe, I can plan some errands...', result: 'Pharmacy Ethics' },
            { text: 'No, I just wake up and go with the flow...', result: 'Organic Chemistry' }
        ]
    },
    {
        question: 'When it comes to change... how do you handle it?',
        answers: [
            { text: 'I absolutely hate change...', result: 'Analytical Chemistry' },
            { text: "I don't like change, but I will try my best...", result: 'Pharmacy Ethics' },
            { text: "I don't mind change, as long as it's temporary...", result: 'Pharmaceutics' },
            { text: 'I love change! It\'s the only way of discovering...', result: 'Organic Chemistry' }
        ]
    },
    {
        question: 'How could you best describe your style in outfits?',
        answers: [
            { text: 'Smart Casual Fit', result: 'Pharmaceutics' },
            { text: 'Boho/Floral Fit', result: 'Pharmacognosy' },
            { text: 'Street Style Fit', result: 'IBS' },
            { text: 'Creative/Unusual Fit', result: 'Organic Chemistry' },
            { text: 'Cozy/Comfortable Fit', result: 'Pharmacy Ethics' }
        ]
    },
    {
        question: 'How many friends do you usually prefer?',
        answers: [
            { text: 'a small, close friend group', result: 'Analytical Chemistry' },
            { text: 'a big, fun friend group', result: 'IBS' },
            { text: 'many friend groups...', result: 'Pharmaceutics' }
        ]
    },
    {
        question: 'Which type of friend are you in a friend group?',
        answers: [
            { text: 'The group leader', result: 'Pharmaceutics' },
            { text: 'The group planner', result: 'Pharmacy Ethics' },
            { text: 'The group therapist', result: 'Pharmacognosy' },
            { text: 'The group entertainer', result: 'IBS' },
            { text: 'The group anchor', result: 'Analytical Chemistry' }
        ]
    },
    {
        question: 'What type of intelligence do you believe you have?',
        answers: [
            { text: 'Book Smart', result: 'Analytical Chemistry' },
            { text: 'Street Smart', result: 'Organic Chemistry' },
            { text: 'People Smart', result: 'IBS' }
        ]
    },
    {
        question: 'When taking a decision, you usually:',
        answers: [
            { text: 'Analyze every step and try to predict...', result: 'Analytical Chemistry' },
            { text: 'Choose the option with the least risks...', result: 'Pharmacy Ethics' },
            { text: 'Ask yourself "what\'s in it for me?"...', result: 'Pharmaceutics' },
            { text: "Don't think much, you just go with your gut...", result: 'Organic Chemistry' }
        ]
    },
    {
        question: 'Finally! What is your taste in music?',
        answers: [
            { text: 'Classical', result: 'Analytical Chemistry' },
            { text: 'Jazz', result: 'Pharmacognosy' },
            { text: 'Indie', result: 'Organic Chemistry' },
            { text: 'Movie Musicals', result: 'Pharmaceutics' },
            { text: 'Pop', result: 'IBS' },
            { text: 'Rap', result: 'Pharmacy Ethics' },
            { text: 'Mahraganat', result: 'Organic Chemistry' }
        ]
    }
];

const allResults = [
    'Organic Chemistry',
    'Pharmacognosy',
    'Pharmaceutics',
    'Pharmacy Ethics',
    'IBS',
    'Analytical Chemistry'
];

const resultEmojis = {
    'Organic Chemistry': '🧪',
    'Pharmacognosy': '🌿',
    'Pharmaceutics': '💊',
    'Pharmacy Ethics': '⚖️',
    'IBS': '🧠',
    'Analytical Chemistry': '🔬'
};

const resultColors = {
    'Organic Chemistry': '#9f7aea',
    'Pharmacognosy': '#48bb78',
    'Pharmaceutics': '#4299e1',
    'Pharmacy Ethics': '#ed8936',
    'IBS': '#f56565',
    'Analytical Chemistry': '#4a5568'
};

// ============ ADD THIS SECTION ============
const resultImages = {
    'Organic Chemistry': 'organic.jpeg',
    'Pharmacognosy': 'pharmacognosy.jpeg',
    'Pharmaceutics': 'pharmaceutics.jpeg',
    'Pharmacy Ethics': 'orientation and legslation.jpeg',
    'IBS': 'ibs.jpeg',
    'Analytical Chemistry': 'Analytical.jpeg'
};
// ==========================================

let currentQuestion = 0;
let scores = {};

// DOM elements
const introScreen = document.getElementById('introScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Initialize scores
function initScores() {
    scores = {};
    allResults.forEach(r => scores[r] = 0);
}

// Show screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Render question
function renderQuestion(index) {
    const q = questions[index];
    questionText.textContent = `${index + 1}. ${q.question}`;
    answersContainer.innerHTML = '';

    q.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.addEventListener('click', () => handleAnswer(answer.result));
        answersContainer.appendChild(btn);
    });

    // Update progress
    const progress = ((index) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${index + 1} / ${questions.length}`;
}

// Handle answer
function handleAnswer(result) {
    scores[result] = (scores[result] || 0) + 1;

    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion(currentQuestion);
    } else {
        showResults();
    }
}

// ============ REPLACE THIS FUNCTION ============
function showResults() {
    showScreen('resultScreen');

    // Calculate percentages
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentages = {};
    allResults.forEach(r => {
        percentages[r] = Math.round((scores[r] / total) * 100);
    });

    // Find winner (with tie-breaker)
    let winner = allResults[0];
    let maxScore = scores[winner];
    for (let i = 1; i < allResults.length; i++) {
        if (scores[allResults[i]] > maxScore) {
            maxScore = scores[allResults[i]];
            winner = allResults[i];
        }
    }

    // Get the winner's image
    const winnerImage = resultImages[winner];

    // Display winner with background image
    const winnerDiv = document.getElementById('resultWinner');
    winnerDiv.innerHTML = `
        <div class="winner-content" style="background-image: url('${winnerImage}'); background-size: cover; background-position: center; min-height: 250px; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; position: relative;">
            <div style="background: rgba(255, 255, 255, 0.88); padding: 25px 30px; border-radius: 16px; width: 100%; max-width: 400px;">
                <div class="emoji">${resultEmojis[winner]}</div>
                <h3 style="font-size: 1.8rem; color: #553c9a; margin: 8px 0;">You are ${winner}!</h3>
                <p style="color: #4a5568; margin-top: 8px;">Your strongest match is ${winner}</p>
            </div>
        </div>
    `;

    // Display chart
    const chartDiv = document.getElementById('resultChart');
    chartDiv.innerHTML = '';

    // Sort by score descending
    const sorted = allResults.slice().sort((a, b) => percentages[b] - percentages[a]);

    sorted.forEach(result => {
        const pct = percentages[result];
        const color = resultColors[result];
        const emoji = resultEmojis[result];

        const item = document.createElement('div');
        item.className = 'chart-item';
        item.innerHTML = `
            <span class="label">${emoji} ${result}</span>
            <div class="bar-bg">
                <div class="bar-fill" style="background:${color}; width:${pct}%;">
                    ${pct > 20 ? pct + '%' : ''}
                </div>
            </div>
            <span class="percentage">${pct}%</span>
        `;
        chartDiv.appendChild(item);
    });
}
// ==========================================

// Start quiz
function startQuiz() {
    initScores();
    currentQuestion = 0;
    showScreen('quizScreen');
    renderQuestion(0);
}

// Restart quiz
function restartQuiz() {
    startQuiz();
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Show intro on load
showScreen('introScreen');