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
                    points: 25,
                    question: "Какое сочетание клавиш позволяет быстро выделить абсолютно весь текст или все файлы в папке?",
                    options: ["Ctrl + C", "Ctrl + A", "Ctrl + Z", "Ctrl + Shift"],
                    answer: "Ctrl + A"
                },
                {
                    points: 50,
                    question: "Какое из этих действий НЕЛЬЗЯ отменить с помощью комбинации клавиш Ctrl + Z?",
                    options: [
                        "Случайно напечатанное слово",
                        "Удаление текста клавишей Backspace",
                        "Физическое форматирование флеш-накопителя",
                        "Перемещение файла из одной папки в другую"
                    ],
                    answer: "Физическое форматирование флеш-накопителя (очистка файловой системы необратима через отмену действий ОС)"
                },
                {
                    points: 100,
                    question: "★ Задача: На флешке свободно 3 Мегабайта. Сколько файлов размером 512 Килобайт каждый можно туда записать?",
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
                    answer: "Комбинировать буквы разного регистра, цифры и спецсимволы"
                },
                {
                    points: 25,
                    question: "Что такое «двухфакторная аутентификация» (2FA)?",
                    options: [
                        "Вход по двум разным логинам",
                        "Подтверждение входа двумя способами (например, пароль + код из СМС)",
                        "Смена пароля каждые 2 недели",
                        "Проверка компьютера двумя антивирусами"
                    ],
                    answer: "Подтверждение входа двумя факторами (пароль + код подтверждения)"
                },
                {
                    points: 50,
                    question: "Почему небезопасно подключаться к открытым общественным сетям Wi-Fi (без пароля в кафе/транспорте) для онлайн-покупок?",
                    options: [
                        "Трафик в таких сетях может перехватить злоумышленник через сниффер",
                        "Интернет там всегда работает слишком медленно",
                        "Батарея смартфона разрядится в 5 раз быстрее",
                        "Устройство сразу заблокируется оператором"
                    ],
                    answer: "Трафик в незащищенных сетях может быть перехвачен другими пользователями этой же сети"
                },
                {
                    points: 100,
                    question: "★ Анализ: Вам пришло письмо с адреса 'support@paypa1-security.com' с просьбой подтвердить данные карты. Что указывает на обман?",
                    options: [
                        "В домене подмена: цифра '1' вместо буквы 'l'",
                        "Официальные сервисы не запрашивают платежные данные в письмах",
                        "И адрес поддельный, и запрос данных — мошеннические",
                        "Ошибок нет, это официальное письмо"
                    ],
                    answer: "И адрес поддельный (paypa1), и сам запрос данных — это фишинг"
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
                    points: 25,
                    question: "Робот начинает движение в точке (0, 0). Он сделал: 5 вправо, 3 вверх, 2 влево, 1 вниз. В какой точке он находится?",
                    options: ["(3, 2)", "(2, 3)", "(5, 3)", "(7, 4)"],
                    answer: "(3, 2) — по X: 0+5-2=3; по Y: 0+3-1=2"
                },
                {
                    points: 50,
                    question: "Какое свойство алгоритма нарушается, если команда исполнителя сформулирована двусмысленно или непонятно?",
                    options: [
                        "Дискретность",
                        "Понятность (или точечная определенность)",
                        "Массовость",
                        "Результативность"
                    ],
                    answer: "Понятность (команда должна входить в систему команд исполнителя и трактоваться однозначно)"
                },
                {
                    points: 100,
                    question: "★ Трассировка: Переменная S = 10. Цикл повторился 3 раза: внутри выполняется S = S * 2. Чему равно S в конце?",
                    options: ["30", "60", "80", "160"],
                    answer: "80 (10 -> 20 -> 40 -> 80)"
                }
            ]
        },
        {
            category: "Компьютерная графика",
            questions: [
                {
                    points: 10,
                    question: "Из каких минимальных базовых элементов (точек) состоит растровое изображение?",
                    options: ["Векторы", "Пиксели", "Символы", "Линии"],
                    answer: "Пиксели"
                },
                {
                    points: 25,
                    question: "Что происходит с растровым изображением при его сильном увеличении?",
                    options: [
                        "Качество не меняется",
                        "Появляется 'зернистость' (видны отдельные пиксели)",
                        "Изображение автоматически превращается в векторное",
                        "Файл уменьшается в объеме"
                    ],
                    answer: "Теряется четкость и видны отдельные пиксели (пикселизация)"
                },
                {
                    points: 50,
                    question: "Главное преимущество векторной графики по сравнению с растровой заключается в том, что:",
                    options: [
                        "Она идеально передает сложные фотографические полутона",
                        "Изображение масштабируется без малейшей потери качества",
                        "Векторные файлы всегда весят больше 1 Гигабайта",
                        "Ее можно открыть только без подключения к интернету"
                    ],
                    answer: "Изображение масштабируется без потери качества (описывается математическими формулами)"
                },
                {
                    points: 100,
                    question: "★ Цветопередача: В палитре RGB каждый базовый цвет задается от 0 до 255. Какой цвет получится при коде (0, 255, 0)?",
                    options: ["Красный", "Зеленый", "Синий", "Черный"],
                    answer: "Зеленый (R=0, G=255, B=0)"
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
                    points: 25,
                    question: "Мощность алфавита равна 32 символам. Сколько бит весит один символ этого алфавита?",
                    options: ["4 бита", "5 бит", "6 бит", "8 бит"],
                    answer: "5 бит (по формуле Хартли: 2^5 = 32)"
                },
                {
                    points: 50,
                    question: "Информационный объем сообщения составляет 2048 байт. Сколько это в Килобайтах (Кб)?",
                    options: ["1 Кб", "2 Кб", "4 Кб", "16 Кб"],
                    answer: "2 Кб (2048 / 1024 = 2)"
                },
                {
                    points: 100,
                    question: "★ Задача: В тексте 4 страницы, на каждой 32 строки по 64 символа. 1 символ = 1 байт. Каков объем текста в Кб?",
                    options: ["4 Кб", "8 Кб", "16 Кб", "32 Кб"],
                    answer: "8 Кб (4 * 32 * 64 = 8192 байта = 8 Кб)"
                }
            ]
        },
        {
            category: "Файловые маски и пути",
            questions: [
                {
                    points: 10,
                    question: "В масках поиска файлов символ '*' означает:",
                    options: [
                        "Ровно один любой символ",
                        "Любую последовательность символов (включая пустую)",
                        "Только цифру",
                        "Только букву"
                    ],
                    answer: "Любую последовательность символов произвольной длины"
                },
                {
                    points: 25,
                    question: "Какой из файлов точно соответствует маске 't?st*.doc'?",
                    options: ["test_report.docx", "toast.doc", "tst1.doc", "task.doc"],
                    answer: "toast.doc"
                },
                {
                    points: 50,
                    question: "Какое расширение из списка относится к графическим форматам без сжатия (или со сжатием без потерь)?",
                    options: [".png", ".txt", ".mp3", ".exe"],
                    answer: ".png (графический растровый формат)"
                },
                {
                    points: 100,
                    question: "★ Иерархия: Из папки 'C:\\Class7\\Work' поднялись на уровень вверх, зашли в 'Tests' и создали 'f.pas'. Каков полный путь?",
                    options: [
                        "C:\\Class7\\Tests\\f.pas",
                        "C:\\Class7\\Work\\Tests\\f.pas",
                        "C:\\Tests\\f.pas",
                        "C:\\Work\\Tests\\f.pas"
                    ],
                    answer: "C:\\Class7\\Tests\\f.pas"
                }
            ]
        },
        {
            category: "Алгоритмика (Кумир)",
            questions: [
                {
                    points: 10,
                    question: "Какое ключевое слово организует цикл с проверкой условия в среде Кумир?",
                    options: ["пока", "если", "для", "повтори"],
                    answer: "пока (нц пока <условие> ... кц)"
                },
                {
                    points: 25,
                    question: "Сколько раз выполнится тело цикла: 'нц для i от 1 до 7 ... кц'?",
                    options: ["6 раз", "7 раз", "8 раз", "0 раз"],
                    answer: "7 раз"
                },
                {
                    points: 50,
                    question: "Что произойдет с Роботом в среде «Кумир», если он получит команду сделать шаг в направлении стены?",
                    options: [
                        "Он просто проигнорирует команду и пойдет дальше",
                        "Произойдет авария (отказ исполнителя)",
                        "Робот телепортируется на шаг назад",
                        "Стена исчезнет с поля"
                    ],
                    answer: "Произойдет авария (недопустимое действие для исполнителя)"
                },
                {
                    points: 100,
                    question: "★ Логика: Робот идет по длинному ряду свободных клеток до стены справа. Какой алгоритм доведет его до упора без аварии?",
                    options: [
                        "нц пока справа свободно; вправо; кц",
                        "нц 10 раз; вправо; кц",
                        "если справа свободно то вправо",
                        "нц пока справа стена; вправо; кц"
                    ],
                    answer: "нц пока справа свободно; вправо; кц"
                }
            ]
        },
        {
            category: "Кодирование медиа",
            questions: [
                {
                    points: 10,
                    question: "Сколько различных цветов можно закодировать при глубине цвета в 8 бит?",
                    options: ["8", "16", "256", "1024"],
                    answer: "256 цветов (2^8 = 256)"
                },
                {
                    points: 25,
                    question: "При оцифровке звука частота дискретизации измеряется в:",
                    options: ["Байтах", "Герцах (Гц / кГц)", "Пикселях", "Бодах"],
                    answer: "Герцах (Гц / кГц)"
                },
                {
                    points: 50,
                    question: "Если глубину цвета изображения уменьшить с 24 бит до 8 бит без изменения разрешения, как изменится объем файла?",
                    options: [
                        "Уменьшится ровно в 3 раза",
                        "Уменьшится в 16 раз",
                        "Не изменится",
                        "Увеличится в 3 раза"
                    ],
                    answer: "Уменьшится ровно в 3 раза (24 / 8 = 3)"
                },
                {
                    points: 100,
                    question: "★ Расчет: Растровое изображение размером 128 на 128 пикселей сохранено с глубиной цвета 16 бит. Каков информационный объем файла в Кб?",
                    options: ["16 Кб", "32 Кб", "64 Кб", "128 Кб"],
                    answer: "32 Кб (128 * 128 * 16 бит = 262144 бит = 32768 байт = 32 Кб)"
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
                    points: 25,
                    question: "Какое соотношение истинно для чисел: 1010_2, 12_8, 11_10?",
                    options: [
                        "1010_2 (10) = 12_8 (10) < 11_10 (11)",
                        "11_10 < 12_8 < 1010_2",
                        "Они все равны",
                        "12_8 < 1010_2 < 11_10"
                    ],
                    answer: "1010_2 (10) = 12_8 (10) < 11_10 (11)"
                },
                {
                    points: 50,
                    question: "Какое десятичное число соответствует шестнадцатеричной цифре 'F'?",
                    options: ["10", "14", "15", "16"],
                    answer: "15 (A=10, B=11, C=12, D=13, E=14, F=15)"
                },
                {
                    points: 100,
                    question: "★ Задача: Вычислите сумму двух чисел в двоичной системе и запишите ответ в десятичной: 10110_2 + 1101_2",
                    options: ["29", "33", "35", "37"],
                    answer: "35 (22 + 13 = 35)"
                }
            ]
        },
        {
            category: "Алгебра логики (ОГЭ)",
            questions: [
                {
                    points: 10,
                    question: "При каких значениях логическое выражение (A ИЛИ B) будет ЛОЖНЫМ?",
                    options: [
                        "Только когда и A=0, и B=0",
                        "Когда хотя бы одна переменная равна 0",
                        "Когда A=1, B=0",
                        "Оно всегда истинно"
                    ],
                    answer: "Только когда обе переменные ложны (A = 0, B = 0)"
                },
                {
                    points: 25,
                    question: "Для какого числа ИСТИННО высказывание:\nНЕ (X <= 10) И (X делится на 3)?",
                    options: ["9", "10", "12", "15... но наименьшее 12"],
                    answer: "12 (X > 10 и кратно 3)"
                },
                {
                    points: 50,
                    question: "Какая операция в алгебре логики обладает наивысшим приоритетом выполнения (выполняется первой без скобок)?",
                    options: [
                        "Инверсия (НЕ)",
                        "Конъюнкция (И)",
                        "Дизъюнкция (ИЛИ)",
                        "Импликация"
                    ],
                    answer: "Инверсия (НЕ)"
                },
                {
                    points: 100,
                    question: "★ Задание №3 ОГЭ: Напишите наименьшее натуральное число X, для которого ЛОЖНО высказывание:\nНЕ (X >= 6) ИЛИ (X нечетное)",
                    options: ["4", "6", "7", "8"],
                    answer: "6 (Дизъюнкция ложна, если обе части ложны: (X >= 6) И (X четное) -> X = 6)"
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
                    points: 25,
                    question: "Определите значение переменной `c`:\na = 14\nb = 4\nc = (a // b) + (a % b)",
                    options: ["3", "5", "7", "9"],
                    answer: "5 (14 // 4 = 3; 14 % 4 = 2; 3 + 2 = 5)"
                },
                {
                    points: 50,
                    question: "Какой тип данных получит переменная `val` после выполнения строки: `val = 15 > 8`?",
                    options: ["int", "str", "bool", "float"],
                    answer: "bool (логический тип со значением True)"
                },
                {
                    points: 100,
                    question: "★ Трассировка цикла: Что выведет программа?\ns = 0\nfor i in range(2, 9, 2):\n    s += i\nprint(s)",
                    options: ["12", "20", "24", "30"],
                    answer: "20 (перебираются: 2, 4, 6, 8; сумма = 20)"
                }
            ]
        },
        {
            category: "Компьютерные сети",
            questions: [
                {
                    points: 10,
                    question: "Сколько чисел (октетов) разделенных точками содержит стандартный IPv4-адрес?",
                    options: ["2", "4", "6", "8"],
                    answer: "4 числа (например, 192.168.1.1)"
                },
                {
                    points: 25,
                    question: "Какой из указанных IP-адресов записан с ОШИБКОЙ?",
                    options: ["192.168.0.1", "127.0.0.1", "256.100.0.1", "10.0.0.255"],
                    answer: "256.100.0.1 (значения каждого октета не могут превышать 255)"
                },
                {
                    points: 50,
                    question: "Какой сетевой протокол отвечает за безопасную зашифрованную передачу веб-страниц в браузере?",
                    options: ["HTTP", "HTTPS", "FTP", "DNS"],
                    answer: "HTTPS (HTTP Secure с шифрованием SSL/TLS)"
                },
                {
                    points: 100,
                    question: "★ Адресация (ОГЭ): Файл `test.txt` расположен на сервере `obr.spb.ru`. Доступ осуществляется по протоколу `https`. Каков полный URL адрес?",
                    options: [
                        "https://obr.spb.ru/test.txt",
                        "obr.spb.ru/https/test.txt",
                        "https://test.txt/obr.spb.ru",
                        "ftp://obr.spb.ru/test.txt"
                    ],
                    answer: "https://obr.spb.ru/test.txt"
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
