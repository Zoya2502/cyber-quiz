// База заданий по классам
const quizDataByGrade = {
    '6': [
        {
            category: "Устройство и файлы",
            questions: [
                {
                    points: 10,
                    question: "Какое расширение файла обычно указывает на текстовый документ?",
                    options: [".mp3", ".docx", ".png", ".exe"],
                    answer: ".docx"
                },
                {
                    points: 50,
                    question: "Какое сочетание клавиш используется для отмены последнего действия?",
                    options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + A"],
                    answer: "Ctrl + Z"
                },
                {
                    points: 100,
                    question: "★ Задача: На флешку объемом 2 Мб сохраняют фото по 512 Кб каждое. Сколько максимум фото поместится на флешку?",
                    options: ["2", "4", "8", "1024"],
                    answer: "4 (2 Мб = 2048 Кб; 2048 / 512 = 4)"
                }
            ]
        },
        {
            category: "Кибергигиена",
            questions: [
                {
                    points: 10,
                    question: "Какой из приведенных паролей является наиболее надежным?",
                    options: ["12345678", "qwerty", "ivan2012", "R#9t_W2026!"],
                    answer: "R#9t_W2026!"
                },
                {
                    points: 50,
                    question: "Как называется интернет-мошенничество с поддельными сайтами для кражи логинов и паролей?",
                    options: ["Спам", "Фишинг", "Стриминг", "Блогинг"],
                    answer: "Фишинг"
                },
                {
                    points: 100,
                    question: "★ Логика: Робот А: «Я не синий и не зеленый». Робот Б: «Я не синий». Всего 3 цвета: красный, зеленый, синий. Какого цвета Робот В?",
                    options: ["Красный", "Зеленый", "Синий"],
                    answer: "Синий (А — красный, Б — зеленый, В — синий)"
                }
            ]
        },
        {
            category: "Алгоритмы",
            questions: [
                {
                    points: 10,
                    question: "Как называется алгоритм, в котором команды выполняются строго друг за другом без ветвлений?",
                    options: ["Линейный", "Циклический", "Разветвленный", "Хаотичный"],
                    answer: "Линейный"
                },
                {
                    points: 50,
                    question: "Робот стоял в точке (0, 0). Выполнил: Вправо 4, Вверх 5, Влево 1, Вниз 2. Где он оказался?",
                    options: ["(3, 3)", "(5, 7)", "(4, 5)", "(3, 2)"],
                    answer: "(3, 3)"
                },
                {
                    points: 100,
                    question: "★ Цикл: S = 0. Повторить 4 раза: [S = S + 5]. Чему равно S после завершения алгоритма?",
                    options: ["5", "9", "20", "25"],
                    answer: "20"
                }
            ]
        }
    ],
    '7': [
        {
            category: "Информация",
            questions: [
                {
                    points: 10,
                    question: "Сколько бит содержится ровно в 4 байтах?",
                    options: ["16", "32", "64", "128"],
                    answer: "32 бита (4 * 8)"
                },
                {
                    points: 50,
                    question: "Алфавит содержит 64 символа. Сколько бит весит один символ (N = 2^i)?",
                    options: ["4 бита", "5 бит", "6 бит", "8 бит"],
                    answer: "6 бит (2^6 = 64)"
                },
                {
                    points: 100,
                    question: "★ Задача: В статье 2 страницы, по 32 строки, в каждой строке 64 символа. 1 символ = 1 байт. Сколько это Кб?",
                    options: ["2 Кб", "4 Кб", "8 Кб", "4096 Кб"],
                    answer: "4 Кб (2 * 32 * 64 = 4096 байт = 4 Кб)"
                }
            ]
        },
        {
            category: "Файлы и ОС",
            questions: [
                {
                    points: 10,
                    question: "Какой символ в маске поиска заменяет ровно один произвольный символ?",
                    options: ["*", "?", "#", "$"],
                    answer: "?"
                },
                {
                    points: 50,
                    question: "По маске '*b?t.t*' будет найден какой файл?",
                    options: ["robot.txt", "about.docx", "bite.text", "best.mp3"],
                    answer: "robot.txt"
                },
                {
                    points: 100,
                    question: "★ Пути к файлам: Из C:\\Учеба\\7класс\\Инфо поднялись на 2 уровня вверх, вошли в 'Тесты' и создали 'f.txt'. Каков путь?",
                    options: ["C:\\Учеба\\Тесты\\f.txt", "C:\\Тесты\\f.txt", "C:\\f.txt"],
                    answer: "C:\\Учеба\\Тесты\\f.txt"
                }
            ]
        },
        {
            category: "Кумир / Робот",
            questions: [
                {
                    points: 10,
                    question: "Какая команда исполнителя Робот закрашивает текущую клетку?",
                    options: ["закрасить", "красить", "цвет", "paint"],
                    answer: "закрасить"
                },
                {
                    points: 50,
                    question: "Сколько шагов сделает Робот в цикле: 'нц 6 раз вправо кц'?",
                    options: ["5", "6", "7", "Бесконечно"],
                    answer: "6 шагов"
                },
                {
                    points: 100,
                    question: "★ Коридор из 5 свободных клеток заканчивается стеной справа. Сколько шагов сделает Робот: 'нц пока справа свободно вправо кц'?",
                    options: ["4 шага", "5 шагов", "6 шагов", "Разобьется"],
                    answer: "5 шагов"
                }
            ]
        }
    ],
    '8': [
        {
            category: "Системы счисления",
            questions: [
                {
                    points: 10,
                    question: "Переведите двоичное число 1010_2 в десятичную систему счисления:",
                    options: ["8", "10", "12", "14"],
                    answer: "10"
                },
                {
                    points: 50,
                    question: "Какое из чисел больше: 10000_2, 20_8 или 11_16?",
                    options: ["10000_2 (16)", "20_8 (16)", "11_16 (17)", "Они равны"],
                    answer: "11_16 (17)"
                },
                {
                    points: 100,
                    question: "★ Задача: Вычислите сумму в 10-й системе: 1101_2 + 1011_2",
                    options: ["20", "22", "24", "26"],
                    answer: "24 (13 + 11 = 24)"
                }
            ]
        },
        {
            category: "Алгебра логики",
            questions: [
                {
                    points: 10,
                    question: "Какая логическая операция истинна только тогда, когда оба высказывания истинны?",
                    options: ["И (Конъюнкция)", "ИЛИ (Дизъюнкция)", "НЕ (Инверсия)"],
                    answer: "И (Конъюнкция)"
                },
                {
                    points: 50,
                    question: "Для какого числа ИСТИННО: НЕ (X < 5) И (X четное)?",
                    options: ["3", "4", "7", "8"],
                    answer: "8 (X >= 5 и четное)"
                },
                {
                    points: 100,
                    question: "★ Задача ОГЭ: Для какого наименьшего целого X ложно выражение: НЕ (X >= 7) ИЛИ (X нечетное)?",
                    options: ["2", "4", "6", "8"],
                    answer: "8 (Обе части должны быть ложны: X >= 7 и X четное -> min = 8)"
                }
            ]
        },
        {
            category: "Python код",
            questions: [
                {
                    points: 10,
                    question: "Что выведет команда Python: print(17 // 5)?",
                    options: ["3.4", "3", "2", "3.0"],
                    answer: "3 (целочисленное деление)"
                },
                {
                    points: 50,
                    question: "Определите x: a = 12; b = 5; x = (a % b) * 3",
                    options: ["6", "9", "3", "0"],
                    answer: "6 (12 % 5 = 2; 2 * 3 = 6)"
                },
                {
                    points: 100,
                    question: "★ Анализ кода:\ns = 0\nfor i in range(1, 6):\n    s += i * 2\nprint(s)",
                    options: ["15", "20", "30", "42"],
                    answer: "30 (2 + 4 + 6 + 8 + 10 = 30)"
                }
            ]
        }
    ]
};

// Состояние игры
let currentGrade = '6';
let scores = { 1: 0, 2: 0 };
let currentActiveCard = null;
let currentPoints = 0;

// Инициализация при старте
function startQuiz(grade) {
    currentGrade = grade;
    scores = { 1: 0, 2: 0 };
    updateScoresUI();
    
    document.getElementById('current-grade-badge').innerText = `${grade} класс`;
    document.getElementById('grade-modal').classList.remove('active');
    document.getElementById('game-container').style.display = 'flex';
    
    buildBoard();
}

function resetToGradeSelection() {
    document.getElementById('question-modal').classList.remove('active');
    document.getElementById('result-modal').classList.remove('active');
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('grade-modal').classList.add('active');
}

// Построение сетки карточек
function buildBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    const categories = quizDataByGrade[currentGrade];

    categories.forEach((cat, catIdx) => {
        const col = document.createElement('div');
        col.className = 'category-column';

        const title = document.createElement('div');
        title.className = 'category-title';
        title.innerText = cat.category;
        col.appendChild(title);

        cat.questions.forEach((q, qIdx) => {
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
    
    // Рендер вариантов ответа
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

// Показ ответа
function revealAnswer() {
    document.getElementById('answer-reveal').style.display = 'block';
    document.getElementById('btn-show-ans').style.display = 'none';
    document.getElementById('award-controls').style.display = 'flex';
}

// Начисление основных баллов
function awardPoints(teamNumber) {
    scores[teamNumber] += currentPoints;
    updateScoresUI();
    closeModal(true);
}

// Ручное добавление бонусов / штрафов (+5, +10, -5)
function addCustomPoints(teamNumber, points) {
    scores[teamNumber] += points;
    if (scores[teamNumber] < 0) scores[teamNumber] = 0; // Не уходим в минус
    updateScoresUI();
}

function closeModal(markAsDisabled) {
    if (markAsDisabled && currentActiveCard) {
        currentActiveCard.classList.add('disabled');
    }
    document.getElementById('question-modal').classList.remove('active');
}

function updateScoresUI() {
    document.getElementById('score-team1').innerText = scores[1];
    document.getElementById('score-team2').innerText = scores[2];
}

// Завершение игры
function finishGame() {
    document.getElementById('final-team1').innerText = scores[1];
    document.getElementById('final-team2').innerText = scores[2];

    const winnerText = document.getElementById('winner-text');
    if (scores[1] > scores[2]) {
        winnerText.innerText = "🏆 Победа Команды 1!";
    } else if (scores[2] > scores[1]) {
        winnerText.innerText = "🏆 Победа Команды 2!";
    } else {
        winnerText.innerText = "🤝 Боевая ничья!";
    }

    document.getElementById('result-modal').classList.add('active');
}
