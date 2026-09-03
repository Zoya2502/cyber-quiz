const quizDataByGrade = {
    // ==========================================
    // 6 КЛАСС (Опирается на программу 5 класса)
    // ==========================================
    '6': [
        {
            category: "Компьютер и устройства",
            questions: [
                {
                    points: 10,
                    question: "Какое из этих устройств служит исключительно для ВЫВОДА информации на экран?",
                    options: ["Клавиатура", "Монитор", "Мышь", "Сканер"],
                    answer: "Монитор"
                },
                {
                    points: 25,
                    question: "Какая клавиша на клавиатуре служит для стирания символа, стоящего СЛЕВА от курсора?",
                    options: ["Delete", "Backspace", "Enter", "Shift"],
                    answer: "Backspace (Delete удаляет символ справа)"
                },
                {
                    points: 50,
                    question: "Какое устройство компьютера часто называют его «мозгом», выполняющим все вычисления?",
                    options: ["Жесткий диск", "Процессор", "Оперативная память", "Блок питания"],
                    answer: "Процессор"
                },
                {
                    points: 100,
                    question: "★ Задача: На рабочем столе создали папку 'Школа', внутри неё — папку 'Рисунки', а в неё положили файл 'кот.png'. Сколько папок нужно открыть, чтобы добраться до файла с рабочего стола?",
                    options: ["1 папку", "2 папки", "3 папки", "Ни одной"],
                    answer: "2 папки (сначала 'Школа', затем 'Рисунки')"
                }
            ]
        },
        {
            category: "Текст и клавиатура",
            questions: [
                {
                    points: 10,
                    question: "Какая клавиша позволяет начать писать текст с новой строки (создать новый абзац)?",
                    options: ["Пробел", "Enter", "CapsLock", "Esc"],
                    answer: "Enter"
                },
                {
                    points: 25,
                    question: "Какую клавишу нужно зажать, чтобы написать одну заглавную букву или восклицательный знак?",
                    options: ["Ctrl", "Shift", "Alt", "Tab"],
                    answer: "Shift"
                },
                {
                    points: 50,
                    question: "Какое сочетание клавиш используется для копирования выделенного фрагмента текста в буфер обмена?",
                    options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + X"],
                    answer: "Ctrl + C"
                },
                {
                    points: 100,
                    question: "★ Практика: В слове «ИНФОРМАТИКА» курсор стоит между буквами 'Р' и 'М'. Какую клавишу нужно нажать 1 раз, чтобы удалить букву 'М'?",
                    options: ["Backspace", "Delete", "Пробел", "Enter"],
                    answer: "Delete (удаляет символ справа от курсора)"
                }
            ]
        },
        {
            category: "Графика и Paint",
            questions: [
                {
                    points: 10,
                    question: "Какой инструмент в простом графическом редакторе (Paint) заливает цветом всю замкнутую область?",
                    options: ["Кисть", "Заливка (ведерко)", "Карандаш", "Ластик"],
                    answer: "Заливка (ведерко)"
                },
                {
                    points: 25,
                    question: "Что произойдет при попытке залить фигуру, если в ее контуре осталась хотя бы одна маленькая дырочка?",
                    options: [
                        "Краска зальет только саму фигуру",
                        "Краска 'выльется' и закрасит весь холст",
                        "Программа выдаст ошибку и закроется",
                        "Ничего не произойдет"
                    ],
                    answer: "Краска выльется через разрыв контура и зальет весь фон"
                },
                {
                    points: 50,
                    question: "Какую клавишу нужно удерживать при рисовании инструментами 'Овал' или 'Прямоугольник', чтобы получились идеальный круг или квадрат?",
                    options: ["Ctrl", "Shift", "Alt", "Пробел"],
                    answer: "Shift"
                },
                {
                    points: 100,
                    question: "★ Логика: Художник уменьшил рисунок в 2 раза, а затем увеличил его обратно до исходного размера в редакторе Paint. Что случилось с качеством рисунка?",
                    options: [
                        "Качество стало лучше",
                        "Качество ухудшилось (появились размытые пиксели)",
                        "Качество не изменилось",
                        "Рисунок стал черно-белым"
                    ],
                    answer: "Качество ухудшилось (при уменьшении пиксели удалились безвозвратно)"
                }
            ]
        },
        {
            category: "Основы безопасности",
            questions: [
                {
                    points: 10,
                    question: "Можно ли садиться за школьный компьютер с открытой бутылкой лимонада и булочкой?",
                    options: ["Да, если аккуратно", "Категорически нет", "Только с разрешения соседа", "Да, во время перемены"],
                    answer: "Категорически нет (правила ТБ в кабинете)"
                },
                {
                    points: 25,
                    question: "Какую информацию БЕЗОПАСНО выкладывать в открытый доступ на своей странице в соцсетях?",
                    options: [
                        "Свой домашний адрес и номер квартиры",
                        "Номер телефона родителей",
                        "Список своих любимых книг и мультфильмов",
                        "Фото ключей от квартиры и паспорта"
                    ],
                    answer: "Список своих любимых книг и мультфильмов"
                },
                {
                    points: 50,
                    question: "Что нужно сделать в первую очередь, если за экраном компьютера начали уставать глаза?",
                    options: [
                        "Увеличить яркость монитора на максимум",
                        "Сделать зрительную гимнастику и посмотреть вдаль в окно",
                        "Потереть глаза руками и продолжить играть",
                        "Придвинуться ближе к монитору"
                    ],
                    answer: "Сделать гимнастику для глаз и посмотреть вдаль"
                },
                {
                    points: 100,
                    question: "★ Ситуация: Незнакомец в сети предлагает прислать бесплатный подарок, если вы назовете ему код из СМС, пришедший на телефон мамы. Как поступить?",
                    options: [
                        "Сказать код, подарок же бесплатный",
                        "Никому не говорить код и сразу рассказать родителям",
                        "Назвать только первые две цифры кода",
                        "Попросить прислать подарок вперед"
                    ],
                    answer: "Никому не сообщать код и немедленно предупредить родителей"
                }
            ]
        }
    ],

    // ==========================================
    // 7 КЛАСС (Опирается на программу 6 класса)
    // ==========================================
    '7': [
        {
            category: "Файлы и папки",
            questions: [
                {
                    points: 10,
                    question: "Какая часть в имени файла указывает операционной системе на его тип (текст, музыка, видео)?",
                    options: ["Имя", "Расширение (после точки)", "Размер", "Дата создания"],
                    answer: "Расширение (после точки)"
                },
                {
                    points: 25,
                    question: "Какой из перечисленных символов ЗАПРЕЩЕНО использовать в названии файла в операционной системе Windows?",
                    options: ["Нижнее подчеркивание _", "Вопросительный знак ?", "Дефис -", "Точка ."],
                    answer: "Вопросительный знак ? (а также *, /, \\, :, <, >, |)"
                },
                {
                    points: 50,
                    question: "Где временно хранятся удаленные с диска файлы до их окончательного стирания?",
                    options: ["В Корзине", "В Блокноте", "В Проводнике", "В Панели задач"],
                    answer: "В Корзине"
                },
                {
                    points: 100,
                    question: "★ Путь к файлу: Файл лежал по адресу C:\\Документы\\6класс\\Доклад.docx. Папку '6класс' переименовали в '7класс'. Каким стал полный путь к файлу?",
                    options: [
                        "C:\\Документы\\7класс\\Доклад.docx",
                        "C:\\7класс\\Документы\\Доклад.docx",
                        "C:\\Документы\\6класс\\Доклад.docx",
                        "Файл удалился"
                    ],
                    answer: "C:\\Документы\\7класс\\Доклад.docx"
                }
            ]
        },
        {
            category: "Информация вокруг нас",
            questions: [
                {
                    points: 10,
                    question: "С помощью какого органа чувств человек воспринимает зрительную (графическую) информацию?",
                    options: ["Уши", "Глаза", "Кожа", "Язык"],
                    answer: "Глаза (органы зрения)"
                },
                {
                    points: 25,
                    question: "К какому информационному процессу относится запись домашнего задания в школьный дневник?",
                    options: ["Хранение информации", "Передача информации", "Удаление информации", "Поиск информации"],
                    answer: "Хранение информации (фиксация на носителе)"
                },
                {
                    points: 50,
                    question: "Светофор на перекрестке для водителя автомобиля является:",
                    options: [
                        "Источником информации",
                        "Приемником информации",
                        "Носителем вируса",
                        "Исполнителем алгоритма"
                    ],
                    answer: "Источником информации (водитель — приемник)"
                },
                {
                    points: 100,
                    question: "★ Кодирование: Каждую букву заменили её порядковым номером в русском алфавите (А=1, Б=2, В=3, Г=4). Какое слово закодировано цепочкой: 2 1 3 1?",
                    options: ["БАВА", "БАБА", "ВАБА", "АБВГ"],
                    answer: "БАВА (2=Б, 1=А, 3=В, 1=А)"
                }
            ]
        },
        {
            category: "Алгоритмы вокруг нас",
            questions: [
                {
                    points: 10,
                    question: "Как называется четкая последовательность действий, приводящая к поставленной цели?",
                    options: ["Алгоритм", "Файл", "Документ", "Ярлык"],
                    answer: "Алгоритм"
                },
                {
                    points: 25,
                    question: "Как называется алгоритм, в котором действия выполняются по порядку, одно за другим, без условий и повторений?",
                    options: ["Линейный", "Циклический", "С ветвлением", "Сложный"],
                    answer: "Линейный"
                },
                {
                    points: 50,
                    question: "В графическом представлении алгоритма (блок-схеме) блок в форме РОМБА обозначает:",
                    options: ["Начало алгоритма", "Проверку условия (ветвление)", "Выполнение действия", "Конец программы"],
                    answer: "Проверку условия (ветвление)"
                },
                {
                    points: 100,
                    question: "★ Исполнитель: Исполнитель Чертёжник находится в точке (0, 0). Он выполнил команды: [Сместиться на (4, 3), затем Сместиться на (-2, 1)]. В какой точке он оказался?",
                    options: ["(2, 4)", "(6, 4)", "(2, 2)", "(4, 3)"],
                    answer: "(2, 4) — координаты: X = 0+4-2 = 2; Y = 0+3+1 = 4"
                }
            ]
        },
        {
            category: "Текстовые документы",
            questions: [
                {
                    points: 10,
                    question: "Какой инструмент в текстовом процессоре позволяет изменить внешний вид шрифта (жирный, курсив, подчеркнутый)?",
                    options: ["Начертание", "Выравнивание", "Абзац", "Колонтитул"],
                    answer: "Начертание"
                },
                {
                    points: 25,
                    question: "Чем форматирование текста отличается от простого редактирования текста?",
                    options: [
                        "Редактирование исправляет ошибки и меняет текст, а форматирование меняет его оформление",
                        "Форматирование удаляет текст, а редактирование сохраняет",
                        "Это абсолютно одно и то же действие",
                        "Редактирование выполняется только на принтере"
                    ],
                    answer: "Редактирование меняет содержание текста, а форматирование — внешний вид"
                },
                {
                    points: 50,
                    question: "Какой тип списка в документе нужно выбрать для шагов рецепта, где строго важен порядок действий?",
                    options: ["Маркированный (точки)", "Нумерованный (1, 2, 3...)", "Многоточия", "Табличный"],
                    answer: "Нумерованный (1, 2, 3...)"
                },
                {
                    points: 100,
                    question: "★ Ошибки набора: Сколько пробелов по правилам компьютерной типографики ставится ПЕРЕД запятой или точкой?",
                    options: ["Один пробел", "Два пробела", "Ни одного пробела (пробел ставится только ПОСЛЕ знака)", "Сколько угодно"],
                    answer: "Ни одного пробела (знак препинания ставится слитно со словом, а пробел идет после него)"
                }
            ]
        }
    ],

    // ==========================================
    // 8 КЛАСС (Опирается на программу 7 класса)
    // ==========================================
    '8': [
        {
            category: "Единицы информации",
            questions: [
                {
                    points: 10,
                    question: "Какая самая маленькая единица измерения информации, принимающая значение 0 или 1?",
                    options: ["Байт", "Бит", "Бод", "Килобайт"],
                    answer: "Бит"
                },
                {
                    points: 25,
                    question: "Сколько бит информации содержится ровно в 2 байтах?",
                    options: ["8", "16", "32", "1024"],
                    answer: "16 бит (2 * 8 = 16)"
                },
                {
                    points: 50,
                    question: "Сколько байт содержит 1 Килобайт (1 Кб)?",
                    options: ["100 байт", "1000 байт", "1024 байта", "8000 байт"],
                    answer: "1024 байта (2^10)"
                },
                {
                    points: 100,
                    question: "★ Формула Хартли: Мощность алфавита N = 16 символов. Сколько бит весит один символ такого алфавита (по формуле N = 2^i)?",
                    options: ["2 бита", "4 бита", "8 бит", "16 бит"],
                    answer: "4 бита (поскольку 2^4 = 16)"
                }
            ]
        },
        {
            category: "Кодирование текста",
            questions: [
                {
                    points: 10,
                    question: "В таблице кодировки ASCII каждый символ кодируется ровно 1 байтом. Сколько бит весит один символ?",
                    options: ["1 бит", "8 бит", "16 бит", "32 бита"],
                    answer: "8 бит"
                },
                {
                    points: 25,
                    question: "В кодировке, где 1 символ весит 1 байт, напечатали слово «ИНФОРМАТИКА». Каков информационный объем этого слова?",
                    options: ["11 бит", "11 байт", "22 байта", "88 байт"],
                    answer: "11 байт (в слове 11 букв по 1 байту)"
                },
                {
                    points: 50,
                    question: "Если текст перекодировали из 8-битной кодировки в 16-битную кодировку Юникод (Unicode), как изменился размер файла?",
                    options: ["Уменьшился в 2 раза", "Увеличился в 2 раза", "Не изменился", "Увеличился в 8 раз"],
                    answer: "Увеличился в 2 раза (16 / 8 = 2)"
                },
                {
                    points: 100,
                    question: "★ Задача ОГЭ 7 класс: Ученик вычеркнул из списка животных одно название, а также лишние запятую и пробел (2 символа). Размер текста уменьшился на 6 байт (1 символ = 1 байт). Сколько букв было в слове?",
                    options: ["4 буквы", "6 букв", "8 букв", "2 буквы"],
                    answer: "4 буквы (Всего ушло 6 символов: 6 - 2 = 4 буквы в названии)"
                }
            ]
        },
        {
            category: "Поиск файлов и маски",
            questions: [
                {
                    points: 10,
                    question: "Какой символ в поисковой маске файлов заменяет ровно ОДИН произвольный символ?",
                    options: ["*", "?", "%", "#"],
                    answer: "? (знак вопроса)"
                },
                {
                    points: 25,
                    question: "Какой символ в маске поиска файлов заменяет ЛЮБУЮ цепочку символов (включая пустоту)?",
                    options: ["*", "?", "$", "@"],
                    answer: "* (звездочка)"
                },
                {
                    points: 50,
                    question: "Какой из этих файлов соответствует маске: pic??.jpg?",
                    options: ["pic1.jpg", "pic12.jpg", "picture.jpg", "pic123.jpg"],
                    answer: "pic12.jpg (ровно 2 знака после 'pic')"
                },
                {
                    points: 100,
                    question: "★ Анализ маски: По маске '*.txt' нашлись файлы с текстом. Какой файл НЕ мог быть найден по этой маске?",
                    options: ["test.txt", "my_story.txt", "note.txt.doc", ".txt"],
                    answer: "note.txt.doc (у него расширение .doc, а не .txt)"
                }
            ]
        },
        {
            category: "Исполнитель Робот (Кумир)",
            questions: [
                {
                    points: 10,
                    question: "Какая команда исполнителя Робот в среде «Кумир» покрывает цветом текущую клетку?",
                    options: ["красить", "закрасить", "цвет", "paint"],
                    answer: "закрасить"
                },
                {
                    points: 25,
                    question: "Сколько раз Робот сделает шаг вправо по алгоритму:\nнц 5 раз\n  вправо\nкц",
                    options: ["4 раза", "5 раз", "6 раз", "Бесконечно"],
                    answer: "5 раз"
                },
                {
                    points: 50,
                    question: "Какая конструкция позволяет Роботу обойти стену, только если она действительно находится на пути?",
                    options: ["нц ... кц", "если ... то ... все", "ввод", "вывод"],
                    answer: "если ... то ... все (условная конструкция)"
                },
                {
                    points: 100,
                    question: "★ Цикл с условием: Перед Роботом коридор из 3 свободных клеток, а в конце — стена. Что сделает алгоритм: «нц пока справа свободно; вправо; кц» (стена находится справа)?",
                    options: [
                        "Сделает 3 шага и благополучно остановится перед стеной",
                        "Сделает 4 шага и врежется в стену",
                        "Не сделает ни одного шага",
                        "Будет ходить вправо-влево"
                    ],
                    answer: "Сделает 3 шага и остановится (перед 4-м шагом условие 'справа свободно' станет ложным)"
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


// Показ ответа и кнопок начисления
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

    // Кнопка "Никому" — передаем статус 'unanswered'
    const btnNone = document.createElement('button');
    btnNone.type = 'button';
    btnNone.className = 'btn btn-close';
    btnNone.innerText = 'Никому';
    btnNone.onclick = () => closeModal('unanswered');
    awardList.appendChild(btnNone);

    document.getElementById('award-controls').style.display = 'flex';
}

// Начисление основных баллов команде
function awardPoints(teamId) {
    const team = teams.find(t => t.id === teamId);
    if (team) {
        team.score += currentPoints;
        updateScoresUI();
    }
    closeModal('answered');
}

// Закрытие карточки с нужным статусом
function closeModal(status) {
    if (currentActiveCard) {
        if (status === 'answered') {
            // Если балл получен: обычное выключение карточки
            currentActiveCard.classList.add('disabled');
        } else if (status === 'unanswered') {
            // Если "Никому": подсвечиваем красным и блокируем клик
            currentActiveCard.classList.add('unanswered');
        }
    }
    document.getElementById('question-modal').classList.remove('active');
}



function addCustomPoints(teamId, points) {
    const team = teams.find(t => t.id === teamId);
    if (team) {
        team.score += points;
        if (team.score < 0) team.score = 0;
        updateScoresUI();
    }
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

// Экспорт функций в window
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

// Навешивание событий
document.addEventListener('DOMContentLoaded', () => {
    const gradeGroup = document.getElementById('grade-buttons-group');
    if (gradeGroup) {
        gradeGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.grade-btn');
            if (btn) selectGrade(btn.dataset.grade, btn);
        });
    }

    const countGroup = document.getElementById('team-count-group');
    if (countGroup) {
        countGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.count-btn');
            if (btn) setTeamCount(btn.dataset.count, btn);
        });
    }

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

    renderTeamInputs();
});
