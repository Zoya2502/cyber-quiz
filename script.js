// --- БАЗА ДАННЫХ ВОПРОСОВ ---
const categoriesData = [
    {
        name: "Пароли и Аккаунты",
        questions: [
            { points: 10, q: "Какой длины минимум должен быть надежный пароль?", a: "Рекомендуется минимум 8 символов (лучше 12+), включая цифры и спецсимволы." },
            { points: 20, q: "Что такое 2FA и почему это важно?", a: "Двухфакторная аутентификация. Это второй слой защиты (код из СМС или приложения) помимо пароля." },
            { points: 30, q: "Задача: Придумайте мнемоническое правило для запоминания сложного пароля 'K8!m$P2'. (1 минута)", a: "Творческое задание. Пример: 'Кот 8 раз ! мяукнул $ Пока 2 спал'." },
            { points: 40, q: "Можно ли сохранять пароли в браузере на чужом компьютере? Почему?", a: "Нет. Владелец ПК может легко извлечь их из настроек браузера." },
            { points: 50, q: "Что такое 'Менеджер паролей' и назовите хотя бы один пример.", a: "Программа для хранения паролей в зашифрованном виде. Примеры: Bitwarden, KeePass, 1Password." },
            { points: 100, q: "ТВОРЧЕСТВО (Стихотворение):\n\nПридумать и выразительно прочитать четверостишие (или рэп) от лица 'Забытого Пароля', который грустит, что его сбросили.\n(Время на подготовку: 5 минут)", a: "Критерии: Оценивается артистизм, рифма и юмор." }
        ]
    },
    {
        name: "Фишинг и Обман",
        questions: [
            { points: 10, q: "Вам пришло письмо: 'Вы выиграли iPhone! Нажмите сюда'. Ваши действия?", a: "Не открывать ссылку, удалить письмо, пометить как спам." },
            { points: 20, q: "Как отличить настоящий сайт банка от фишингового?", a: "Проверить URL (адресную строку), наличие HTTPS, ошибки в дизайне или тексте." },
            { points: 30, q: "Ситуация: Друг пишет в ВК 'Скинь 5000р до завтра, срочно'. Что делать?", a: "Позвонить другу или задать контрольный вопрос, ответ на который знает только он." },
            { points: 40, q: "Что такое 'Социальная инженерия'?", a: "Метод получения доступа к информации, основанный на особенностях психологии людей (обман, доверие)." },
            { points: 50, q: "Загадка:\nЯ прихожу в письме красивом,\nСулю богатство и успех,\nНо если кликнешь — быть беде,\nКто я такой, скажи при всех?", a: "Фишинг / Фишинговое письмо / Спам." },
            { points: 100, q: "ТВОРЧЕСТВО (Сценка):\n\nРазыграть мини-спектакль 'Звонок из Службы Безопасности Банка'.\nОдин играет мошенника, второй — очень подозрительную бабушку.\n(Время: 5-7 минут)", a: "Критерии: Оценивается юмор и правильное поведение 'жертвы' (не называть коды)." }
        ]
    },
    {
        name: "Цифровой след",
        questions: [
            { points: 10, q: "Что такое 'Цифровой след'?", a: "Вся информация, которую вы оставляете в интернете (комментарии, фото, история поиска)." },
            { points: 20, q: "Почему опасно выкладывать фото билетов на самолет или концерт?", a: "По штрих-коду злоумышленники могут украсть билет или узнать личные данные." },
            { points: 30, q: "Можно ли полностью удалить информацию о себе из интернета?", a: "Практически невозможно. 'Интернет помнит всё'." },
            { points: 40, q: "Задача: Найдите 3 ошибки безопасности на фото (Ведущий показывает или описывает фото рабочего стола).", a: "1. Стикер с паролем. 2. Незаблокированный экран. 3. Лежащая кредитка." },
            { points: 50, q: "Что такое 'Доксинг'?", a: "Поиск и публикация персональной информации о человеке без его согласия с целью травли." },
            { points: 100, q: "ТВОРЧЕСТВО (Стоп-кадр):\n\nВсей командой замереть в позе 'Скульптурная композиция: Хакер крадет личность через Wi-Fi в кафе'.\nНужно использовать подручные предметы.\n(Время: 3 минуты)", a: "Критерии: Оценивается оригинальность композиции и детализация." }
        ]
    },
    {
        name: "Вирусы и Защита",
        questions: [
            { points: 10, q: "Что делает антивирус?", a: "Сканирует файлы, ищет вредоносный код и блокирует его." },
            { points: 20, q: "Что такое 'Троян'?", a: "Вредоносная программа, маскирующаяся под полезную." },
            { points: 30, q: "Нужно ли обновлять систему? Почему?", a: "Да. Обновления закрывают 'дыры' в безопасности." },
            { points: 40, q: "Задача:\nНазовите 5 признаков того, что компьютер заражен вирусом.", a: "Тормозит, всплывающие окна, пропадают файлы, не запускаются программы, странные звуки." },
            { points: 50, q: "Что такое VPN?", a: "Технология, шифрующая трафик и скрывающая реальный IP-адрес." },
            { points: 100, q: "ТВОРЧЕСТВО (Пантомима):\n\nБез слов показать эпическую битву Антивируса Касперского против Вируса-Вымогателя.\nДолжно быть понятно, кто победил.\n(Время: 5 минут)", a: "Критерии: Оценивается понятность сюжета без слов." }
        ]
    }
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
    
    // Ответ пока скрыт, но мы загружаем текст (критерии)
    document.getElementById('answer-text').textContent = q.a;
    
    document.getElementById('answer-block').classList.add('hidden');
    document.getElementById('btn-show-answer').classList.remove('hidden');
    
    modal.style.display = 'block';
}

// --- ИЗМЕНЕННАЯ ЛОГИКА КНОПКИ "ПОСМОТРЕТЬ ОТВЕТ" ---
document.getElementById('btn-show-answer').addEventListener('click', () => {
    document.getElementById('btn-show-answer').classList.add('hidden');
    document.getElementById('answer-block').classList.remove('hidden');
    
    const header = document.getElementById('answer-header');
    const prompt = document.getElementById('scoring-prompt');

    // Если это творческое задание (100 баллов)
    if (currentQuestion.points === 100) {
        header.style.display = 'none'; // Скрываем "Правильный ответ"
        prompt.textContent = "КТО СПРАВИЛСЯ ЛУЧШЕ?"; // Меняем текст вопроса
        prompt.style.fontSize = "2rem"; // Делаем крупнее
        prompt.style.color = "var(--gold)"; // Золотой цвет
        prompt.style.fontWeight = "bold";
    } else {
        // Сброс стилей для обычных вопросов
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

// --- ЛОГИКА ЗАВЕРШЕНИЯ ИГРЫ ---
document.getElementById('btn-finish-game').addEventListener('click', finishGame);

function finishGame() {
    switchScreen(screenSummary);
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    
    if (sortedTeams.length > 0) {
        const winner = sortedTeams[0];
        document.getElementById('winner-name').textContent = winner.name;
        document.getElementById('winner-score').textContent = `${winner.score} очков`;
    }

    const resultsContainer = document.getElementById('final-results-table');
    resultsContainer.innerHTML = '';

    sortedTeams.forEach((team, index) => {
        const row = document.createElement('div');
        row.className = 'result-row';
        
        let medal = '';
        if (index === 0) medal = '🥇';
        else if (index === 1) medal = '🥈';
        else if (index === 2) medal = '🥉';
        else medal = `${index + 1}.`;

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