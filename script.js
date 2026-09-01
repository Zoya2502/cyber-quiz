const quizDataByGrade = {
    '6': [
        {
            category: "Файлы и система",
            questions: [
                {
                    points: 10,
                    question: "Какой из перечисленных файлов является исполняемой программой, а не документом?",
                    options: ["game.exe", "report.docx", "photo.png", "track.mp3"],
                    answer: "game.exe"
                },
                {
                    points: 50,
                    question: "Какое сочетание клавиш позволяет быстро выделить абсолютно весь текст или все файлы в папке?",
                    options: ["Ctrl + C", "Ctrl + A", "Ctrl + Z", "Ctrl + Shift"],
                    answer: "Ctrl + A"
                },
                {
                    points: 100,
                    question: "★ Задача: На флешке свободно 3 Мегабайта. Сколько текстовых файлов размером 512 Килобайт каждый можно туда записать?",
                    options: ["4 файла", "6 файлов", "8 файлов", "12 файлов"],
                    answer: "6 файлов (3 Мб = 3072 Кб; 3072 / 512 = 6)"
                }
            ]
        },
        {
            category: "Безопасность в сети",
            questions: [
                {
                    points: 10,
                    question: "Какое главное правило создания надежного пароля для учетной записи?",
                    options: [
                        "Использовать дату своего рождения",
                        "Комбинировать заглавные, строчные буквы, цифры и знаки (от 8-10 символов)",
                        "Использовать свое имя и цифры 123",
                        "Делать пароль одинаковым на всех сайтах"
                    ],
                    answer: "Комбинировать заглавные/строчные буквы, цифры и спецсимволы от 8–10 знаков"
                },
                {
                    points: 50,
                    question: "Что такое «двухфакторная аутентификация» (2FA)?",
                    options: [
                        "Вход по двум разным логинам",
                        "Подтверждение входа двумя способами (например, пароль + код из СМС/приложения)",
                        "Смена пароля каждые 2 недели",
                        "Проверка компьютера двумя антивирусами"
                    ],
                    answer: "Подтверждение входа двумя факторами (пароль + СМС / код из приложения)"
                },
                {
                    points: 100,
                    question: "★ Детектив: Вам пришло письмо от техподдержки с адреса 'support@paypa1-security.com' с просьбой подтвердить данные карты. Что указывает на обман?",
                    options: [
                        "В слове 'paypal' вместо буквы 'l' стоит цифра '1'",
                        "Официальные сервисы никогда не просят вводить полные платежные данные по почте",
                        "И адрес поддельный, и само требование мошенническое",
                        "Ошибок нет, это официальное письмо"
                    ],
                    answer: "И адрес поддельный (paypa1), и запрос данных — это фишинг"
                }
            ]
        },
        {
            category: "Алгоритмы и логика",
            questions: [
                {
                    points: 10,
                    question: "Как называется алгоритм, в котором в зависимости от условия выполняется либо одно действие, либо другое?",
                    options: ["Линейный", "Ветвящийся (ветвление)", "Циклический", "Бесконечный"],
                    answer: "Ветвящийся (ветвление)"
                },
                {
                    points: 50,
                    question: "Робот начинает движение в клетке (0, 0). Он сделал: 5 шагов вправо, 3 шага вверх, 2 шага влево и 1 шаг вниз. В какой точке он находится?",
                    options: ["(3, 2)", "(2, 3)", "(5, 3)", "(7, 4)"],
                    answer: "(3, 2) — по X: 0+5-2=3; по Y: 0+3-1=2"
                },
                {
                    points: 100,
                    question: "★ Трассировка: Переменная S = 10. \nЦикл повторился 3 раза: внутри выполняется команда S = S * 2. \nЧему равно значение S в конце?",
                    options: ["30", "60", "80", "160"],
                    answer: "80 (10 -> 20 -> 40 -> 80)"
                }
            ]
        }
    ],
    '7': [
        {
            category: "Измерение информации",
            questions: [
                {
                    points: 10,
                    question: "Сколько бит информации содержится в 8 байтах?",
                    options: ["16", "64", "128", "1024"],
                    answer: "64 бита (8 * 8 = 64)"
                },
                {
                    points: 50,
                    question: "Мощность алфавита равна 32 символам. Сколько бит весит один символ этого алфавита?",
                    options: ["4 бита", "5 бит", "6 бит", "8 бит"],
                    answer: "5 бит (по формуле Хартли: 2^5 = 32)"
                },
                {
                    points: 100,
                    question: "★ Задача: Текст состоит из 4 страниц, на каждой 32 строки, в строке 64 символа. Кодировка 1 байт на символ. Каков информационный объем текста в Килобайтах?",
                    options: ["4 Кб", "8 Кб", "16 Кб", "32 Кб"],
                    answer: "8 Кб (4 * 32 * 64 = 8192 байта; 8192 / 1024 = 8 Кб)"
                }
            ]
        },
        {
            category: "Файловые маски и пути",
            questions: [
                {
                    points: 10,
                    question: "В масках поиска символ '*' означает:",
                    options: [
                        "Ровно один любой символ",
                        "Любую последовательность символов (включая пустую)",
                        "Только цифру",
                        "Только букву"
                    ],
                    answer: "Любую последовательность символов произвольной длины"
                },
                {
                    points: 50,
                    question: "Какой из файлов соответствует маске 't?st*.doc'?",
                    options: ["test_report.docx", "toast.doc", "tst1.doc", "task.doc"],
                    answer: "toast.doc (t + 'o' + st + '' + .doc)"
                },
                {
                    points: 100,
                    question: "★ Иерархия: Пользователь работал с файлом 'C:\\Class7\\Work\\prog.pas'. Он поднялся на один уровень вверх, затем спустился в папку 'Tests' и сохранил файл 'test1.pas'. Каков полный путь?",
                    options: [
                        "C:\\Class7\\Tests\\test1.pas",
                        "C:\\Class7\\Work\\Tests\\test1.pas",
                        "C:\\Tests\\test1.pas",
                        "C:\\Work\\Tests\\test1.pas"
                    ],
                    answer: "C:\\Class7\\Tests\\test1.pas"
                }
            ]
        },
        {
            category: "Алгоритмизация (Кумир)",
            questions: [
                {
                    points: 10,
                    question: "Какое ключевое слово используется для организации цикла с предусловием в среде Кумир?",
                    options: ["пока", "если", "для", "повтори"],
                    answer: "пока (конструкция: нц пока <условие> ... кц)"
                },
                {
                    points: 50,
                    question: "Сколько раз выполнится тело цикла?\n\nнц для i от 1 до 7\n  вправо\nкц",
                    options: ["6 раз", "7 раз", "8 раз", "0 раз"],
                    answer: "7 раз"
                },
                {
                    points: 100,
                    question: "★ Логика исполнителя: Робот находится перед горизонтальным рядом из свободных клеток неизвестной длины, в конце ряда — стена. Какой алгоритм пройдет ряд до конца и не разобьется?",
                    options: [
                        "нц пока справа свободно; вправо; кц",
                        "нц 10 раз; вправо; кц",
                        "если справа свободно то вправо",
                        "нц пока справа стена; вправо; кц"
                    ],
                    answer: "нц пока справа свободно; вправо; кц"
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
                    question: "Чему равно двоичное число 1101 в десятичной системе счисления?",
                    options: ["11", "13", "14", "15"],
                    answer: "13 (1*8 + 1*4 + 0*2 + 1*1 = 13)"
                },
                {
                    points: 50,
                    question: "Расположите числа в порядке возрастания: 1010_2, 12_8, 11_10.",
                    options: [
                        "1010_2 (10), 11_10 (11), 12_8 (10) — равны",
                        "1010_2 (10) = 12_8 (10) < 11_10 (11)",
                        "11_10 < 12_8 < 1010_2",
                        "12_8 < 11_10 < 1010_2"
                    ],
                    answer: "1010_2 (10) = 12_8 (10) < 11_10 (11)"
                },
                {
                    points: 100,
                    question: "★ Задача: Вычислите сумму двух чисел в двоичной системе и запишите ответ в десятичной: 10110_2 + 1101_2",
                    options: ["29", "33", "35", "37"],
                    answer: "35 (10110_2 = 22; 1101_2 = 13; 22 + 13 = 35)"
                }
            ]
        },
        {
            category: "Алгебра логики (ОГЭ)",
            questions: [
                {
                    points: 10,
                    question: "При каких входных значениях логическое выражение (A ИЛИ B) будет ЛОЖНЫМ?",
                    options: [
                        "Только когда и A=0, и B=0",
                        "Когда хотя бы одна переменная равна 0",
                        "Когда A=1, B=0",
                        "Оно всегда истинно"
                    ],
                    answer: "Только когда обе переменные ложны (A = 0, B = 0)"
                },
                {
                    points: 50,
                    question: "Для какого из приведенных чисел ИСТИННО высказывание:\nНЕ (X <= 10) И (X делится на 3)?",
                    options: ["9", "10", "12", "15... но наименьшее 12"],
                    answer: "12 (X > 10 и кратно 3; первое подходящее целое — 12)"
                },
                {
                    points: 100,
                    question: "★ Задание №3 ОГЭ: Напишите наименьшее натуральное число X, для которого ЛОЖНО высказывание:\nНЕ (X >= 6) ИЛИ (X нечетное)",
                    options: ["4", "6", "7", "8"],
                    answer: "6 (Дизъюнкция ложна, если обе части ложны: (X >= 6) И (X четное) -> наименьшее натуральное X = 6)"
                }
            ]
        },
        {
            category: "Базовый Python",
            questions: [
                {
                    points: 10,
                    question: "Какой оператор в Python вычисляет остаток от деления целых чисел?",
                    options: ["/", "//", "%", "**"],
                    answer: "% (например, 7 % 3 = 1)"
                },
                {
                    points: 50,
                    question: "Определите значение переменной `c` после выполнения кода:\na = 14\nb = 4\nc = (a // b) + (a % b)",
                    options: ["3", "5", "7", "9"],
                    answer: "5 (14 // 4 = 3; 14 % 4 = 2; 3 + 2 = 5)"
                },
                {
                    points: 100,
                    question: "★ Трассировка цикла: Что выведет программа?\ns = 0\nfor i in range(2, 9, 2):\n    s += i\nprint(s)",
                    options: ["12", "20", "24", "30"],
                    answer: "20 (перебираются четные числа: 2, 4, 6, 8; сумма = 2 + 4 + 6 + 8 = 20)"
                }
            ]
        }
    ]
};

// Состояние приложения
let selectedGrade = '6';
let teamCount = 2;
let teams = [];
let currentActiveCard = null;
let currentPoints = 0;
const teamColors = ['#2563eb', '#7c3aed', '#059669', '#d97706'];

function selectGrade(grade, btn) {
    selectedGrade = grade;
    document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

function setTeamCount(count, btn) {
    teamCount = parseInt(count, 10);
    document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderTeamInputs();
}

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

function startGame() {
    teams = [];
    for (let i = 1; i <= teamCount; i++) {
        const input = document.getElementById(`team-input-${i}`);
        const name = input && input.value.trim() !== '' ? input.value.trim() : `Команда ${i}`;
        teams.push({ id: i, name: name, score: 0 });
    }

    const badge = document.getElementById('current-grade-badge');
    if (badge) badge.innerText = `${selectedGrade} класс`;
    
    const setupModal = document.getElementById('setup-modal');
    if (setupModal) setupModal.classList.remove('active');
    
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) gameContainer.style.display = 'flex';

    renderScoreBoard();
    buildBoard();
}

function resetToSetup() {
    const qModal = document.getElementById('question-modal');
    const rModal = document.getElementById('result-modal');
    const gContainer = document.getElementById('game-container');
    const sModal = document.getElementById('setup-modal');

    if (qModal) qModal.classList.remove('active');
    if (rModal) rModal.classList.remove('active');
    if (gContainer) gContainer.style.display = 'none';
    if (sModal) sModal.classList.add('active');
}

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
                <button type="button" class="btn-bonus" onclick="window.addCustomPoints(${t.id}, 5)">+5</button>
                <button type="button" class="btn-bonus" onclick="window.addCustomPoints(${t.id}, 10)">+10</button>
                <button type="button" class="btn-bonus penalty" onclick="window.addCustomPoints(${t.id}, -5)">-5</button>
            </div>
        `;
        board.appendChild(card);
    });
}

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

function openQuestion(categoryName, questionObj, cardElement) {
    currentActiveCard = cardElement;
    currentPoints = questionObj.points;

    document.getElementById('modal-category').innerText = categoryName;
    document.getElementById('modal-points').innerText = `${questionObj.points} баллов`;
    document.getElementById('modal-question-text').innerText = questionObj.question;
    
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
    document.getElementById('answer-reveal').style.display = 'none';
    document.getElementById('award-controls').style.display = 'none';
    document.getElementById('btn-show-ans').style.display = 'block';

    document.getElementById('question-modal').classList.add('active');
}

function revealAnswer() {
    document.getElementById('answer-reveal').style.display = 'block';
    document.getElementById('btn-show-ans').style.display = 'none';
    
    const awardList = document.getElementById('award-buttons-list');
    awardList.innerHTML = '';

    teams.forEach((t, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-award';
        btn.style.backgroundColor = teamColors[idx % teamColors.length];
        btn.innerText = t.name;
        btn.onclick = () => awardPoints(t.id);
        awardList.appendChild(btn);
    });

    const btnNone = document.createElement('button');
    btnNone.type = 'button';
    btnNone.className = 'btn btn-close';
    btnNone.innerText = 'Никому';
    btnNone.onclick = () => closeModal(false);
    awardList.appendChild(btnNone);

    document.getElementById('award-controls').style.display = 'flex';
}

function awardPoints(teamId) {
    const team = teams.find(t => t.id === teamId);
    if (team) {
        team.score += currentPoints;
        updateScoresUI();
    }
    closeModal(true);
}

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

// Экспорт функций в window для доступности из HTML
window.selectGrade = selectGrade;
window.setTeamCount = setTeamCount;
window.startGame = startGame;
window.resetToSetup = resetToSetup;
window.openQuestion = openQuestion;
window.revealAnswer = revealAnswer;
window.awardPoints = awardPoints;
window.addCustomPoints = addCustomPoints;
window.closeModal = closeModal;
window.finishGame = finishGame;

// Навешивание слушателей событий после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
    // Выбор класса
    const gradeGroup = document.getElementById('grade-buttons-group');
    if (gradeGroup) {
        gradeGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.grade-btn');
            if (btn) selectGrade(btn.dataset.grade, btn);
        });
    }

    // Выбор количества команд
    const countGroup = document.getElementById('team-count-group');
    if (countGroup) {
        countGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.count-btn');
            if (btn) setTeamCount(btn.dataset.count, btn);
        });
    }

    // Основные кнопки
    const btnStart = document.getElementById('btn-start-game');
    if (btnStart) btnStart.addEventListener('click', startGame);

    const btnReset = document.getElementById('btn-reset-setup');
    if (btnReset) btnReset.addEventListener('click', resetToSetup);

    const btnRestart = document.getElementById('btn-restart-game');
    if (btnRestart) btnRestart.addEventListener('click', resetToSetup);

    const btnFinish = document.getElementById('btn-finish-game');
    if (btnFinish) btnFinish.addEventListener('click', finishGame);

    const btnShowAns = document.getElementById('btn-show-ans');
    if (btnShowAns) btnShowAns.addEventListener('click', revealAnswer);

    // Первичная отрисовка полей ввода
    renderTeamInputs();
});
