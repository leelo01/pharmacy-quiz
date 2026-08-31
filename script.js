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

const allResults = ['Organic Chemistry', 'Pharmacognosy', 'Pharmaceutics', 'Pharmacy Ethics', 'IBS', 'Analytical Chemistry'];
const resultEmojis = { 'Organic Chemistry': '🧪', 'Pharmacognosy': '🌿', 'Pharmaceutics': '💊', 'Pharmacy Ethics': '⚖️', 'IBS': '🧠', 'Analytical Chemistry': '🔬' };
const resultColors = { 'Organic Chemistry': '#9f7aea', 'Pharmacognosy': '#48bb78', 'Pharmaceutics': '#4299e1', 'Pharmacy Ethics': '#ed8936', 'IBS': '#f56565', 'Analytical Chemistry': '#4a5568' };
const resultImages = { 'Organic Chemistry': 'organic.jpeg', 'Pharmacognosy': 'pharmacognosy.jpeg', 'Pharmaceutics': 'pharmaceutics.jpeg', 'Pharmacy Ethics': 'orientation and legslation.jpeg', 'IBS': 'ibs.jpeg', 'Analytical Chemistry': 'Analytical.jpeg' };

const resultDescriptions = {
    'Analytical Chemistry': { description: 'Analytical chemistry is the branch of chemistry focused on identifying and quantifying the chemical components of substances. It involves various techniques and instruments to analyze samples, determine their composition, and ensure quality and safety in fields like pharmaceuticals, environmental science, and food testing.', traits: ['be an introvert', 'don\'t speak much, but know exactly what and when to speak', 'be a bookworm', 'live life at a slow and calm pace', 'prefer a small, close friend group over having many friends', 'be extremely organised', 'value every action you take throughout the day', 'have a great memory, rarely forgetful, and be talented at recalling things', 'be a quiet observer'] },
    'IBS': { description: 'Integrated Body Systems is the study of how the body’s major systems—like the nervous, cardiovascular, and respiratory systems—work together to maintain health and function. It highlights the interconnection between systems and is essential for understanding how the body responds to disease and treatment.', traits: ['be an extrovert', 'be the life of the party', 'be naturally funny', 'not be strict to the rules', 'be a multitasker', 'be an avid music listener', 'be a creative thinker', 'have a presence that everyone can feel', 'be highly interactive and reactive'] },
    'Pharmacy Ethics': { description: 'Pharmacy Orientation, Legislation, and Ethics is a foundational area of pharmacy education that introduces students to the roles and responsibilities of pharmacists within the healthcare system. It covers the history and evolution of the pharmacy profession, key laws and regulations governing the practice, and the ethical principles that guide professional conduct. This subject emphasizes the importance of legal compliance, patient confidentiality, professional integrity, and ethical decision-making in ensuring safe and effective pharmaceutical care.', traits: ['be a strict rule follower', 'be extremely responsible', 'be honest', 'not take many risks', 'be a natural guardian', 'be someone people trust for advice and believe has wise opinions', 'be people smart—you understand people easily and know how to communicate with them and guide them'] },
    'Pharmaceutics': { description: 'Pharmaceutics is the science of designing, developing, and manufacturing pharmaceutical dosage forms for safe and effective drug delivery. It encompasses the transformation of a drug substance into a usable medicine, ensuring optimal drug efficacy and patient safety.', traits: ['be a natural entrepreneur/leader', 'be street smart', 'adapt to change easily', 'have many different hobbies', 'be flexible', 'gain new knowledge to come up with your own unique ideas', 'be a problem solver who likes dealing with new challenges to solve and gain new experiences'] },
    'Pharmacognosy': { description: 'Pharmacognosy is the study of medicinal drugs derived from natural sources such as plants, animals, and microorganisms. It involves the identification, extraction, and analysis of bioactive compounds, as well as understanding their biological effects and potential therapeutic uses. Pharmacognosy combines elements of botany, chemistry, and pharmacology, playing a crucial role in the discovery and development of new medications, especially in traditional and herbal medicine.', traits: ['rely on nature for treatment', 'love going out, exploring new places, and discovering different cultures', 'be patient and calm', 'handle problems gently', 'bring comfort to the room', 'have an artistic soul', 'be a good listener'] },
    'Organic Chemistry': { description: 'Organic chemistry is the branch of chemistry that focuses on the structure, properties, composition, reactions, and synthesis of carbon-based compounds, which include not only hydrocarbons but also compounds with other elements like oxygen, nitrogen, sulfur, and halogens. It plays a central role in the development of pharmaceuticals, plastics, fuels, and many other products essential to modern life.', traits: ['be detail oriented', 'be tenacious and stubborn about a preferred hobby or routine', 'love patterns', 'be stress tolerant', 'be a perfectionist'] }
};

let currentQuestion = 0;
let selectedAnswers = [];
let scores = {};

const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function initScores() {
    scores = {};
    allResults.forEach(r => scores[r] = 0);
    selectedAnswers = new Array(questions.length).fill(null);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function updateNavigation() {
    previousBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = selectedAnswers[currentQuestion] === null;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'See Results →' : 'Next →';
}

function updateProgress() {
    // Progress is based on the furthest question reached, so it fills by 10% each time Next is pressed.
    const completed = Math.max(currentQuestion, selectedAnswers.filter(answer => answer !== null).length);
    const progress = ((completed + (selectedAnswers[currentQuestion] !== null ? 1 : 0)) / questions.length) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
    progressText.textContent = `${Math.min(completed + (selectedAnswers[currentQuestion] !== null ? 1 : 0), questions.length)} / ${questions.length}`;
}

function renderQuestion(index) {
    currentQuestion = index;
    const q = questions[index];
    questionText.textContent = `${index + 1}. ${q.question}`;
    answersContainer.innerHTML = '';

    q.answers.forEach((answer, answerIndex) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        if (selectedAnswers[index] === answerIndex) btn.classList.add('selected');
        btn.addEventListener('click', () => selectAnswer(answerIndex));
        answersContainer.appendChild(btn);
    });

    updateProgress();
    updateNavigation();
}

function selectAnswer(answerIndex) {
    selectedAnswers[currentQuestion] = answerIndex;
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        btn.classList.toggle('selected', index === answerIndex);
    });
    updateProgress();
    updateNavigation();
}

function goPrevious() {
    if (currentQuestion > 0) renderQuestion(currentQuestion - 1);
}

function goNext() {
    if (selectedAnswers[currentQuestion] === null) return;
    if (currentQuestion < questions.length - 1) {
        renderQuestion(currentQuestion + 1);
    } else {
        calculateScores();
        showResults();
    }
}

function calculateScores() {
    scores = {};
    allResults.forEach(r => scores[r] = 0);
    selectedAnswers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            const result = questions[questionIndex].answers[answerIndex].result;
            scores[result]++;
        }
    });
}

function showResults() {
    showScreen('resultScreen');
    const total = selectedAnswers.filter(a => a !== null).length;
    const percentages = {};
    allResults.forEach(r => percentages[r] = Math.round((scores[r] / total) * 100));

    let winner = allResults[0];
    let maxScore = scores[winner];
    for (let i = 1; i < allResults.length; i++) {
        if (scores[allResults[i]] > maxScore) {
            maxScore = scores[allResults[i]];
            winner = allResults[i];
        }
    }

    const winnerInfo = resultDescriptions[winner];
    document.getElementById('resultWinner').innerHTML = `
        <div class="winner-content" style="background-image: url('${resultImages[winner]}');">
            <div class="overlay">
                <div class="emoji">${resultEmojis[winner]}</div>
                <h3>You are ${winner}!</h3>
                <p>Your strongest match is ${winner}</p>
            </div>
        </div>
        <div class="result-description">
            <p class="subject-description">${winnerInfo.description}</p>
            <div class="traits-section">
                <h3>Because you got ${winner}, you're most likely to:</h3>
                <ul>${winnerInfo.traits.map(trait => `<li>${trait}</li>`).join('')}</ul>
            </div>
        </div>`;

    const chartDiv = document.getElementById('resultChart');
    chartDiv.innerHTML = '';
    allResults.slice().sort((a, b) => percentages[b] - percentages[a]).forEach(result => {
        const pct = percentages[result];
        const item = document.createElement('div');
        item.className = 'chart-item';
        item.innerHTML = `<span class="label">${resultEmojis[result]} ${result}</span><div class="bar-bg"><div class="bar-fill" style="background:${resultColors[result]}; width:${pct}%;">${pct > 20 ? pct + '%' : ''}</div></div><span class="percentage">${pct}%</span>`;
        chartDiv.appendChild(item);
    });
}

function startQuiz() {
    initScores();
    currentQuestion = 0;
    showScreen('quizScreen');
    renderQuestion(0);
}

function restartQuiz() { startQuiz(); }

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
previousBtn.addEventListener('click', goPrevious);
nextBtn.addEventListener('click', goNext);

showScreen('introScreen');