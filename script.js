// --- БАЗА ДАННЫХ ВОПРОСОВ ---
const categoriesData = [
    {
        name: "Базовые операции",
        questions: [
            { points: 10, q: "Какая логическая операция истинна только тогда, когда истинны все входящие в нее простые высказывания", a: "Конъюнкция, Логическое умножение, И" },
            { points: 50, q: "Вычислите устно значение выражения: (1∨0)∧0.", a: "Ложь (0)" },
            { points: 100, q: "В таблице истинности для выражения из 4 переменных (A, B, C, D) заполнено несколько строк. Сколько ВСЕГО строк должно быть в этой таблице?", a: "16 строк" }
        ]
    },
    {
        name: "Математическая инверсия",
        questions: [
            { points: 10, q: " Назовите противоположный знак (результат инверсии) для математического знака 'строго меньше' (<).", a: "Больше или равно." },
            { points: 50, q: "Избавьтесь от логического отрицания в выражении: ¬(X≥15).", a: "X < 15." },
            { points: 100, q: "Примените инверсию ко всему сложному высказыванию: ¬(X<5∨X>10).", a: "(X≥5)∧(X≤10)." }
        ]
    },
    {
        name: "Задачи ОГЭ (Задание №3)",
        questions: [
            { points: 10, q: "Для какого из приведённых чисел истинно высказывание: (X>2)∧¬(X>3)? Варианты: 1; 2; 3; 4.", a: "3" },
            { points: 50, q: "Напишите НАИМЕНЬШЕЕ целое число X, для которого истинно высказывание: ¬(X<12)∧¬(X≥17).", a: "12" },
            { points: 100, q: "Напишите НАИБОЛЬШЕЕ целое число X, для которого ЛОЖНО высказывание: (X>40)∨¬(X>39).", a: "40" },
        ]
    },
];

// Копия для текущей сессии
let categories = JSON.parse(JSON.stringify(categoriesData));

// --- СОСТОЯНИЕ ИГРЫ ---
let teams = [];
let currentQuestion = null;

// --- ЭЛЕМЕНТЫ DOM ---
const screenStart = document.getElementById('start-screen');
const screenSetup = document.getElementById('setup-screen');
const screenGame = document.getElementById('game-screen');
const screenSummary = document.getElementById('summary-screen');
const modal = document.getElementById('question-modal');

// --- ЛОГИКА ---

// 1. Переход к настройкам
document.getElementById('btn-start').addEventListener('click', () => {
    switchScreen(screenSetup);
});

// 2. Генерация полей для имен команд
document.getElementById('btn-gen-teams').addEventListener('click', () => {
    const count = document.getElementById('team-count').value;
    const container = document.getElementById('teams-inputs-container');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Название команды ${i}`;
        input.value = `Команда ${i}`;
        input.classList.add('team-name-input');
        container.appendChild(input);
    }
    document.getElementById('btn-save-teams').classList.remove('hidden');
});

// 3. Сохранение команд и Старт игры
document.getElementById('btn-save-teams').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.team-name-input');
    teams = [];
    inputs.forEach(input => {
        teams.push({
            name: input.value,
            score: 0
        });
    });
    
    initGame();
});

function initGame() {
    switchScreen(screenGame);
    renderScoreboard();
    renderBoard();
}

// Рендер таблицы счета
function renderScoreboard() {
    const sb = document.getElementById('scoreboard');
    sb.innerHTML = '';
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    
    sortedTeams.forEach(team => {
        const div = document.createElement('div');
        div.className = 'team-score';
        div.innerHTML = `<b>${team.name}</b>: ${team.score}`;
        sb.appendChild(div);
    });
}

// Рендер игрового поля
function renderBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    
    categories.forEach(cat => {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = cat.name;
        board.appendChild(header);
    });
    
    const maxQuestions = categories[0].questions.length;

    for (let i = 0; i < maxQuestions; i++) {
        categories.forEach((cat, catIndex) => {
            const q = cat.questions[i];
            const btn = document.createElement('button');
            btn.className = 'question-btn';
            
            if (q.points === 100) {
                btn.classList.add('special-btn');
                btn.textContent = "★ " + q.points;
            } else {
                btn.textContent = q.points;
            }
            
            if (q.played) {
                btn.classList.add('disabled');
                btn.textContent = "";
            } else {
                btn.onclick = () => openQuestion(catIndex, i);
            }
            
            board.appendChild(btn);
        });
    }
}

// Открытие вопроса
function openQuestion(catIndex, qIndex) {
    const cat = categories[catIndex];
    const q = cat.questions[qIndex];
    
    currentQuestion = { catIndex, qIndex, points: q.points };
    
    document.getElementById('question-category-display').textContent = cat.name;
    document.getElementById('question-points-display').textContent = q.points;
    document.getElementById('question-text').textContent = q.q;
    
    // Ответ пока скрыт
    document.getElementById('answer-text').textContent = q.a;
    
    document.getElementById('answer-block').classList.add('hidden');
    document.getElementById('btn-show-answer').classList.remove('hidden');
    
    modal.style.display = 'block';
}

document.getElementById('btn-show-answer').addEventListener('click', () => {
    document.getElementById('btn-show-answer').classList.add('hidden');
    document.getElementById('answer-block').classList.remove('hidden');
    
    const header = document.getElementById('answer-header');
    const prompt = document.getElementById('scoring-prompt');

    if (currentQuestion.points === 100) {
        header.style.display = 'none'; 
        prompt.textContent = "КТО СПРАВИЛСЯ ЛУЧШЕ?"; 
        prompt.style.fontSize = "2rem"; 
        prompt.style.color = "var(--gold)"; 
        prompt.style.fontWeight = "bold";
    } else {
        header.style.display = 'block';
        prompt.textContent = "Кто ответил верно?";
        prompt.style.fontSize = "1rem";
        prompt.style.color = "inherit";
        prompt.style.fontWeight = "normal";
    }
    
    const container = document.getElementById('team-buttons-container');
    container.innerHTML = '';
    
    teams.forEach((team, index) => {
        const btn = document.createElement('button');
        btn.className = 'team-select-btn';
        btn.textContent = team.name;
        btn.onclick = () => awardPoints(index);
        container.appendChild(btn);
    });
});

// Начисление баллов
function awardPoints(teamIndex) {
    if (teamIndex !== null) {
        teams[teamIndex].score += currentQuestion.points;
    }
    categories[currentQuestion.catIndex].questions[currentQuestion.qIndex].played = true;
    closeModal();
    renderScoreboard();
    renderBoard();
}

// Кнопка "Никто"
document.getElementById('btn-no-score').addEventListener('click', () => {
    awardPoints(null);
});

// Закрытие модалки
document.querySelector('.close-modal').addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

// --- НОВАЯ ЛОГИКА ЗАВЕРШЕНИЯ ИГРЫ ---
document.getElementById('btn-finish-game').addEventListener('click', finishGame);

function finishGame() {
    switchScreen(screenSummary);
    
    // Сортировка команд по очкам (от большего к меньшему)
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    
    if (sortedTeams.length > 0) {
        // Находим максимальный балл
        const maxScore = sortedTeams[0].score;
        
        // Находим ВСЕХ, у кого этот максимальный балл
        const winners = sortedTeams.filter(t => t.score === maxScore);
        
        // Формируем строку с именами победителей
        const winnerNames = winners.map(w => w.name).join(' и ');
        
        document.getElementById('winner-name').textContent = winnerNames;
        document.getElementById('winner-score').textContent = `${maxScore} очков`;
    }

    // Таблица результатов с логикой "одинаковые очки = одинаковое место"
    const resultsContainer = document.getElementById('final-results-table');
    resultsContainer.innerHTML = '';

    let currentRank = 0;
    let lastScore = -1;

    sortedTeams.forEach((team) => {
        // Если очки отличаются от предыдущего, увеличиваем счетчик мест
        // Если очки такие же, место остается прежним
        if (team.score !== lastScore) {
            currentRank++;
            lastScore = team.score;
        }

        const row = document.createElement('div');
        row.className = 'result-row';
        
        // Определяем медальку по НОМЕРУ места
        let medal = '';
        if (currentRank === 1) medal = '🥇';
        else if (currentRank === 2) medal = '🥈';
        else if (currentRank === 3) medal = '🥉';
        else medal = `${currentRank}.`;

        row.innerHTML = `
            <span>${medal} ${team.name}</span>
            <span>${team.score}</span>
        `;
        resultsContainer.appendChild(row);
    });
}

document.getElementById('btn-restart').addEventListener('click', () => {
    categories = JSON.parse(JSON.stringify(categoriesData));
    document.getElementById('teams-inputs-container').innerHTML = '';
    document.getElementById('btn-save-teams').classList.add('hidden');
    document.getElementById('team-count').value = 2;
    switchScreen(screenStart);
});

function switchScreen(targetScreen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');

}
