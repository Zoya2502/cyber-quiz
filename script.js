const quizDataByGrade = {
    '6': [
        {
            category: "🎮 IT-Детектив",
            questions: [
                {
                    points: 10,
                    question: "Вы скачали файл с читами для игры, но у него расширение .exe вместо .png. Что произойдет, если его открыть?",
                    options: [
                        "Откроется красивая картинка",
                        "Запустится программа (возможно вирус)",
                        "Файл откроется в Блокноте",
                        "Компьютер выключится навсегда"
                    ],
                    answer: "Запустится программа (файлы .exe — исполняемые)"
                },
                {
                    points: 50,
                    question: "Кот прошелся по клавиатуре и случайно удалил 5 страниц вашего доклада! Какое заклинание клавиш спасет ситуацию?",
                    options: ["Alt + F4", "Ctrl + Z", "Ctrl + Shift + Esc", "Win + L"],
                    answer: "Ctrl + Z (Отмена последнего действия)"
                },
                {
                    points: 100,
                    question: "★ Детектив: Шпион передал координаты базы, зашифрованные кодом: 'Каждая буква заменена на ее номер в алфавите'. Получилось: 1 13 14 1. Какое слово зашифровано?",
                    options: ["АЛМА", "АЛМАЗ", "АННА", "АТАК"],
                    answer: "АЛМА (1=А, 13=Л, 14=М, 1=А)"
                }
            ]
        },
        {
            category: "🕵️ Кибер-Защита",
            questions: [
                {
                    points: 10,
                    question: "Вам в игре пишет 'админ': «Привет! Срочно скинь свой пароль для начисления 1000 бесплатных скинов». Ваши действия?",
                    options: [
                        "Скину пароль, скины же бесплатные!",
                        "Скину половину пароля для проверки",
                        "Отправлю жалобу в поддержку и заблокирую",
                        "Попрошу сначала показать скины"
                    ],
                    answer: "Отправлю жалобу в поддержку (администрация никогда не просит пароли)"
                },
                {
                    points: 50,
                    question: "Какой из этих паролей взломают быстрее, чем вы моргнете глазом?",
                    options: ["QwErTy_2026!", "123456", "K!ber_Kotik_88", "v@sya_IT_pro"],
                    answer: "123456 (топ-1 самых небезопасных паролей)"
                },
                {
                    points: 100,
                    question: "★ Взломщик: Три сервера закрыты замками: Синий, Красный и Желтый. Известно:\n1) Вирус НЕ в Красном;\n2) Вирус в Синем ИЛИ в Красном.\nГде спрятан вирус?",
                    options: ["В Синем", "В Красном", "В Желтом", "Вируса нет"],
                    answer: "В Синем (Если не в Красном, но в Синем/Красном — значит точно в Синем)"
                }
            ]
        },
        {
            category: "🤖 Роботы и Логика",
            questions: [
                {
                    points: 10,
                    question: "Робот-пылесос застрял под диваном и повторяет: «Ехать вперед, пока не врежешься». Как в программировании называется такое повторение?",
                    options: ["Константа", "Ветвление", "Цикл", "Переменная"],
                    answer: "Цикл"
                },
                {
                    points: 50,
                    question: "Дрон взлетел из точки (0, 0), пролетел 10 м на Север, 5 м на Восток, 10 м на Юг и 5 м на Запад. Где он приземлился?",
                    options: ["(10, 5)", "(5, 10)", "(0, 0)", "Потерялся в лесу"],
                    answer: "(0, 0) — вернулся в исходную точку"
                },
                {
                    points: 100,
                    question: "★ Прокачка героя: У мага 100 HP. В цикле: 'Повторить 3 раза: [Урон -30, Зелье +10]'. После цикла маг нашел Супер-зелье (+50 HP). Сколько HP осталось у мага?",
                    options: ["40 HP", "60 HP", "90 HP", "110 HP"],
                    answer: "90 HP (100 - 3*(20) + 50 = 90)"
                }
            ]
        }
    ],
    '7': [
        {
            category: "📦 Битва Байтов",
            questions: [
                {
                    points: 10,
                    question: "Если 1 символ в кодировке весит ровно 1 байт, сколько символов поместится в сообщении весом 64 бита?",
                    options: ["8", "16", "32", "64"],
                    answer: "8 символов (64 бита = 8 байт = 8 символов)"
                },
                {
                    points: 50,
                    question: "Инопланетяне используют алфавит всего из 4 знаков: 👽, 🚀, ⭐, 👾. Сколько бит весит один инопланетный символ?",
                    options: ["1 бит", "2 бита", "4 бита", "8 бит"],
                    answer: "2 бита (по формуле Хартли: 4 = 2^2)"
                },
                {
                    points: 100,
                    question: "★ Загрузка игры: Обновление весит 16 Мегабайт. Скорость интернета — 4 Мегабита в секунду. За сколько секунд скачается файл?",
                    options: ["4 секунды", "16 секунд", "32 секунды", "64 секунды"],
                    answer: "32 секунды (16 Мб = 128 Мбит; 128 / 4 = 32 сек)"
                }
            ]
        },
        {
            category: "🧩 Маски и Файлы",
            questions: [
                {
                    points: 10,
                    question: "Геймер ищет скриншоты по маске screen_???.png. Какой файл найдет система?",
                    options: ["screen_1.png", "screen_999.png", "screen_final.png", "screen_2026.png"],
                    answer: "screen_999.png (ровно 3 символа вместо ???)"
                },
                {
                    points: 50,
                    question: "Где окажется файл, если его переместить из C:\\Games\\Minecraft в папку ..\\Saves?",
                    options: [
                        "C:\\Games\\Minecraft\\Saves",
                        "C:\\Games\\Saves",
                        "C:\\Saves",
                        "Файл удалится"
                    ],
                    answer: "C:\\Games\\Saves ('..' означает подъем на 1 уровень вверх)"
                },
                {
                    points: 100,
                    question: "★ Шифр хакера: По маске *a?t*.mp* нашлись секретные аудиозаписи. Какое имя файла НЕ могло подойти под эту маску?",
                    options: ["start.mp3", "action.mp4", "party.mp3", "artist.mp3"],
                    answer: "artist.mp3 (после 'a' идет 'r', а не символ + 't')"
                }
            ]
        },
        {
            category: "⚡ Алгоритмика",
            questions: [
                {
                    points: 10,
                    question: "Какое условие нужно написать роботу, чтобы он шел вперед, пока не встретит пропасть?",
                    options: ["пока впереди стена", "пока впереди свободно", "пока не упал", "если свободно то шаг"],
                    answer: "пока впереди свободно"
                },
                {
                    points: 50,
                    question: "Сколько клеток закрасит робот по алгоритму:\nнц 4 раз\n  вправо; закрасить\nкц",
                    options: ["3 клетки", "4 клетки", "5 клеток", "Ни одной"],
                    answer: "4 клетки"
                },
                {
                    points: 100,
                    question: "★ Лабиринт: Машина поворачивает направо, если перед ней стена, иначе едет прямо. Машина заехала в глухой тупик 1x1 метр. Что произойдет?",
                    options: [
                        "Остановится",
                        "Будет бесконечно крутиться на месте",
                        "Сломает стену",
                        "Развернется назад и уедет"
                    ],
                    answer: "Будет бесконечно крутиться на месте (зациклится)"
                }
            ]
        }
    ],
    '8': [
        {
            category: "🔢 Системы Счисления",
            questions: [
                {
                    points: 10,
                    question: "Сколько пальцев на двух руках у робота, который считает в двоичной системе счисления?",
                    options: ["2 пальца", "1010 пальцев", "10 пальцев", "100 пальцев"],
                    answer: "1010_2 пальцев (10 в 10-й = 1010 в 2-й)"
                },
                {
                    points: 50,
                    question: "В игре у персонажа 1F жизней в шестнадцатеричной системе. Сколько это в десятичной системе?",
                    options: ["15 HP", "25 HP", "31 HP", "115 HP"],
                    answer: "31 HP (1 * 16 + 15 = 31)"
                },
                {
                    points: 100,
                    question: "★ Блиц-счет: Какое число идет СЛЕДУЮЩИМ сразу после двоичного числа 11111_2?",
                    options: ["11112", "100000", "20000", "111111"],
                    answer: "100000_2 (31 + 1 = 32 = 100000_2)"
                }
            ]
        },
        {
            category: "🧠 Кибер-Логика",
            questions: [
                {
                    points: 10,
                    question: "Умный дом включает свет, если: (На улице темно) И (Датчик видит человека). На улице темно, но человека нет. Включится свет?",
                    options: ["Да", "Нет", "Будет мигать", "Включится музыка"],
                    answer: "Нет (операция И требует истинности обоих условий)"
                },
                {
                    points: 50,
                    question: "Для какого игрока истинно условие: НЕ (Рейтинг < 1000) И (Побед > 50)?",
                    options: [
                        "Алекс: Рейтинг 900, Побед 60",
                        "Макс: Рейтинг 1200, Побед 40",
                        "Олег: Рейтинг 1500, Побед 75",
                        "Игорь: Рейтинг 800, Побед 30"
                    ],
                    answer: "Олег (Рейтинг >= 1000 и Побед > 50)"
                },
                {
                    points: 100,
                    question: "★ ОГЭ: Найдите наименьшее натуральное X, для которого ЛОЖНО выражение:\nНЕ (X < 15) ИЛИ (X не делится на 4)",
                    options: ["12", "16", "20", "24"],
                    answer: "16 (Обе части ложны: X >= 15 И X делится на 4 -> min = 16)"
                }
            ]
        },
        {
            category: "🐍 Python Hacks",
            questions: [
                {
                    points: 10,
                    question: "Что напечатает Питон при запуске команды: print('Cyber' * 3)?",
                    options: ["Cyber3", "Cyber Cyber Cyber", "CyberCyberCyber", "Ошибка"],
                    answer: "CyberCyberCyber (строка дублируется без пробелов)"
                },
                {
                    points: 50,
                    question: "Что выведет код?\nx = 20\ny = 6\nprint(x % y + x // y)",
                    options: ["5", "3.33", "7", "2"],
                    answer: "5 (20 % 6 = 2; 20 // 6 = 3; 2 + 3 = 5)"
                },
                {
                    points: 100,
                    question: "★ Трассировка:\ns = 0\nfor i in range(1, 10, 3):\n    s += i\nprint(s)\nЧему равно s?",
                    options: ["12", "15", "18", "21"],
                    answer: "12 (числа: 1, 4, 7 -> сумма = 12)"
                }
            ]
        }
    ]
};

// Состояние игры
let selectedGrade = '6';
let teamCount = 2;
let teams = [];
let currentActiveCard = null;
let currentPoints = 0;

// Цвета для кнопок команд
const teamColors = ['#2563eb', '#7c3aed', '#059669', '#d97706'];

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    renderTeamInputs();
});

// Выбор класса
function selectGrade(grade, btn) {
    selectedGrade = grade;
    document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Выбор количества команд
function setTeamCount(count, btn) {
    teamCount = count;
    document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTeamInputs();
}

// Отрисовка полей ввода названий команд
function renderTeamInputs() {
    const container = document.getElementById('team-inputs-container');
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 1; i <= teamCount; i++) {
        const item = document.createElement('div');
        item.className = 'team-input-item';
        item.innerHTML = `
            <input type="text" id="team-input-${i}" value="Команда ${i}" placeholder="Название команды ${i}" maxlength="18">
        `;
        container.appendChild(item);
    }
}

// Старт игры
function startGame() {
    teams = [];
    for (let i = 1; i <= teamCount; i++) {
        const input = document.getElementById(`team-input-${i}`);
        const name = input && input.value.trim() !== '' ? input.value.trim() : `Команда ${i}`;
        teams.push({ id: i, name: name, score: 0 });
    }

    document.getElementById('current-grade-badge').innerText = `${selectedGrade} класс`;
    document.getElementById('setup-modal').classList.remove('active');
    document.getElementById('game-container').style.display = 'flex';

    renderScoreBoard();
    buildBoard();
}

// Возврат к экрану настроек
function resetToSetup() {
    document.getElementById('question-modal').classList.remove('active');
    document.getElementById('result-modal').classList.remove('active');
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('setup-modal').classList.add('active');
}

// Отрисовка табло команд
function renderScoreBoard() {
    const board = document.getElementById('score-board');
    if (!board) return;
    board.innerHTML = '';

    teams.forEach((t) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-name" title="${t.name}">${t.name}</div>
            <div class="team-score" id="score-team-${t.id}">${t.score}</div>
            <div class="bonus-controls">
                <button type="button" class="btn-bonus" onclick="addCustomPoints(${t.id}, 5)">+5</button>
                <button type="button" class="btn-bonus" onclick="addCustomPoints(${t.id}, 10)">+10</button>
                <button type="button" class="btn-bonus penalty" onclick="addCustomPoints(${t.id}, -5)">-5</button>
            </div>
        `;
        board.appendChild(card);
    });
}

// Построение сетки карточек
function buildBoard() {
    const board = document.getElementById('board');
    if (!board) return;
    board.innerHTML = '';
    
    const categories = quizDataByGrade[selectedGrade];
    if (!categories) return;

    categories.forEach((cat) => {
        const col = document.createElement('div');
        col.className = 'category-column';

        const title = document.createElement('div');
        title.className = 'category-title';
        title.innerText = cat.category;
        col.appendChild(title);

        cat.questions.forEach((q) => {
            const card = document.createElement('div');
            card.className = `point-card ${q.points === 100 ? 'card-100' : ''}`;
            card.innerText = q.points === 100 ? `★ ${q.points}` : q.points;
            
            card.onclick = () => openQuestion(cat.category, q, card);
            col.appendChild(card);
        });

        board.appendChild(col);
    });
}

// Открытие окна вопроса
function openQuestion(categoryName, questionObj, cardElement) {
    currentActiveCard = cardElement;
    currentPoints = questionObj.points;

    document.getElementById('modal-category').innerText = categoryName;
    document.getElementById('modal-points').innerText = `${questionObj.points} баллов`;
    document.getElementById('modal-question-text').innerText = questionObj.question;
    
    // Варианты ответов
    const optionsBox = document.getElementById('modal-options');
    optionsBox.innerHTML = '';
    if (questionObj.options && questionObj.options.length > 0) {
        questionObj.options.forEach(opt => {
            const item = document.createElement('div');
            item.className = 'option-item';
            item.innerText = opt;
            optionsBox.appendChild(item);
        });
        optionsBox.style.display = 'grid';
    } else {
        optionsBox.style.display = 'none';
    }

    document.getElementById('correct-answer-text').innerText = questionObj.answer;
    
    // Сброс видимости кнопок
    document.getElementById('answer-reveal').style.display = 'none';
    document.getElementById('award-controls').style.display = 'none';
    document.getElementById('btn-show-ans').style.display = 'block';

    document.getElementById('question-modal').classList.add('active');
}

// Показ ответа и кнопок начисления
function revealAnswer() {
    document.getElementById('answer-reveal').style.display = 'block';
    document.getElementById('btn-show-ans').style.display = 'none';
    
    const awardList = document.getElementById('award-buttons-list');
    awardList.innerHTML = '';

    // Генерация кнопок для всех участвующих команд
    teams.forEach((t, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-award';
        btn.style.backgroundColor = teamColors[idx % teamColors.length];
        btn.innerText = t.name;
        btn.onclick = () => awardPoints(t.id);
        awardList.appendChild(btn);
    });

    // Кнопка "Никому"
    const btnNone = document.createElement('button');
    btnNone.type = 'button';
    btnNone.className = 'btn btn-close';
    btnNone.innerText = 'Никому';
    btnNone.onclick = () => closeModal(false);
    awardList.appendChild(btnNone);

    document.getElementById('award-controls').style.display = 'flex';
}

// Начисление основных баллов
function awardPoints(teamId) {
    const team = teams.find(t => t.id === teamId);
    if (team) {
        team.score += currentPoints;
        updateScoresUI();
    }
    closeModal(true);
}

// Ручное добавление бонусов / штрафов
function addCustomPoints(teamId, points) {
    const team = teams.find(t => t.id === teamId);
    if (team) {
        team.score += points;
        if (team.score < 0) team.score = 0;
        updateScoresUI();
    }
}

function closeModal(markAsDisabled) {
    if (markAsDisabled && currentActiveCard) {
        currentActiveCard.classList.add('disabled');
    }
    document.getElementById('question-modal').classList.remove('active');
}

function updateScoresUI() {
    teams.forEach(t => {
        const scoreElem = document.getElementById(`score-team-${t.id}`);
        if (scoreElem) scoreElem.innerText = t.score;
    });
}

// Завершение игры
function finishGame() {
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    const maxScore = sortedTeams[0].score;
    const winners = sortedTeams.filter(t => t.score === maxScore && maxScore > 0);

    const winnerText = document.getElementById('winner-text');
    if (winners.length === 1) {
        winnerText.innerText = `🏆 Победа: ${winners[0].name}!`;
    } else if (winners.length > 1) {
        winnerText.innerText = `🤝 Ничья между лидерами!`;
    } else {
        winnerText.innerText = `Игра окончена!`;
    }

    const scoresList = document.getElementById('final-scores-list');
    scoresList.innerHTML = '';
    sortedTeams.forEach((t, idx) => {
        const row = document.createElement('div');
        row.className = 'final-score-row';
        row.innerHTML = `
            <span>${idx + 1}. ${t.name}</span>
            <strong>${t.score} баллов</strong>
        `;
        scoresList.appendChild(row);
    });

    document.getElementById('result-modal').classList.add('active');
}
