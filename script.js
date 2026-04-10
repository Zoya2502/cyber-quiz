// --- БАЗА ДАННЫХ ВОПРОСОВ ---
const categoriesData = [
    {
        name: "Белорусы",
        questions: [
            { points: 10, q: "Этот корнеплод в белорусской культуре имеет статус «второго хлеба». Про него сочиняют песни, а самое известное национальное блюдо из него — оладьи, название которых происходит от слова «драть» (тереть). Как они называются?", a: "Дранники" },
            { points: 20, q: "Традиционный белорусский орнамент, который можно увидеть на рушниках и национальной одежде (вышиванке), состоит из геометрических узоров. Какие два цвета являются строгим каноном для классического белорусского орнамента?", a: "Красный (узор) и белый (фон)." },
            { points: 30, q: "В ночь на Ивана Купалу белорусы традиционно прыгали через костер, пускали венки по воде и шли в лес искать цветок этого растения, который, по легенде, цветет лишь раз в году и указывает на зарытые клады. Что это за растение?", a: "Папоротник (папараць-кветка)." },
            { points: 40, q: "Этот элемент традиционного мужского костюма в XVIII веке стал настоящим произведением искусства. Их ткали из шелковых, золотых и серебряных нитей, они стоили целое состояние и носились шляхтой. Как называются эти пояса по имени города, где находилась главная мануфактура?", a: "Слуцкие пояса." },
            { points: 50, q: "В белорусской мифологии есть дух по имени Жыцень. Он выглядит как небольшой старичок с третьим глазом на затылке. Исходя из корня его имени (и того, что этот корень значит в славянских языках), догадайтесь: покровителем чего он является?", a: "Покровитель урожая / ржи / плодородия (от слов «жито», «рожь», «урожай»)." },
            { points: 100, q: "В старину у белорусов была игра-гадание на Рождество: девушки снимали с левой ноги валенок и бросали его за ворота.\nЗадание: За 1 минуту придумайте и опишите современный цифровой аналог этого гадания для жительницы мегаполиса, сохранив главную цель оригинального ритуала (узнать, откуда придет жених).", a: "Критерии оценки: понимание сути (гадание на жениха по направлению носка валенка), креативность и юмор (например: «бросить смартфон за дверь и посмотреть, к какому Wi-Fi он подключится»)." }
        ]
    },
    {
        name: "Татары",
        questions: [
            { points: 10, q: "Это сладкое блюдо из обжаренных во фритюре кусочков теста, щедро политых медовым сиропом, является визитной карточкой татарской кухни. Без него не обходится ни одна свадьба. Назовите его.", a: "Чак-чак." },
            { points: 20, q: "Этот национальный мужской головной убор представляет собой небольшую шапочку, часто украшенную богатой вышивкой бисером или золотой нитью. В Татарстане её носят и в повседневной жизни, и по праздникам.", a: "Тюбетейка (тубэтэй)." },
            { points: 30, q: "Самый известный и массовый татарский национальный праздник, название которого переводится как «Праздник плуга». Он знаменует окончание весенних полевых работ.", a: "Сабантуй." },
            { points: 40, q: "Главным зрелищем на Сабантуе является традиционная борьба «корэш». В чем заключается главная особенность этой борьбы? С помощью чего борцы должны бросить соперника на спину?", a: "С помощью полотенец / кушаков / поясов (это борьба на поясах)." },
            { points: 50, q: "В татарском фольклоре есть лесной дух Шурале — он описан в знаменитой поэме Габдуллы Тукая. У Шурале есть рог на лбу, длинные пальцы, и он очень любит одно занятие, которое может привести человека к гибели. Как именно Шурале губит своих жертв в лесу?", a: "Он защекатывает их до смерти (щекоткой)." },
            { points: 100, q: "Традиционное татарское гостеприимство имеет свои тонкости. Когда гостю наливают чай, настоящий татарский хозяин нальет чашку лишь наполовину.\nЗадание: Объясните логику этой традиции (почему не наливают до краев?). А затем придумайте и покажите (или опишите) жест или фразу, с помощью которой современный хозяин мог бы так же вежливо и завуалированно намекнуть гостям, что вечер окончен, не обидев их.", a: "Правильный ответ: чтобы чай не остывал, и чтобы хозяин мог проявлять уважение, постоянно подливая свежий и горячий,\nдоп. критерии: самый смешной и креативный современный намек" }
        ]
    },
    {
        name: "Удмурты",
        questions: [
            { points: 10, q: "Считается, что именно из удмуртского (и коми) языка в русский пришло название этого популярного мясного блюда. По-удмуртски «пель» — это ухо, а «нянь» — хлеб. Что это за «хлебное ухо»?", a: "Пельмень (пельмени)." },
            { points: 20, q: "Удмуртию неофициально называют мировой столицей людей с этой внешней особенностью. Ежегодно в Ижевске даже проходит фестиваль, посвященный таким людям. О какой особенности внешности речь?", a: "Рыжий цвет волос." },
            { points: 30, q: "В 2012 году удмуртская культура прогремела на весь мир благодаря этому музыкальному коллективу из небольшого села, который занял второе место на конкурсе «Евровидение», исполнив песню «Party for Everybody» на удмуртском и английском языках.", a: "«Бурановские бабушки»." },
            { points: 40, q: "Традиционный женский удмуртский костюм часто украшался большим количеством этих металлических предметов. Они не только демонстрировали статус семьи, но и служили оберегом, так как при ходьбе издавали звон, отпугивающий злых духов. Что это за предметы?", a: "Серебряные монеты / монисто." },
            { points: 50, q: "Главный удмуртский новогодний волшебник (аналог Деда Мороза) зовется Тол Бабай. В отличие от привычного нам Деда Мороза, шуба у Тол Бабая не красная и не синяя. Она имеет фиолетовый цвет. Согласно удмуртской легенде, почему его шуба стала фиолетовой?", a: "От долгого хождения по лесам она окрасилась соком ягод (в частности, рябины) / либо это цвет сумерек в зимнем лесу." },
            { points: 100, q: "У древних удмуртов медведь (по-удмуртски «гондыр») считался священным животным. Произносить его имя вслух в лесу было строжайшим табу. Вместо этого использовались описательные прозвища-эвфемизмы (например, «лесной человек»).\nЗадание: Придумайте три современных, забавных, но уважительных прозвища (эвфемизма) для медведя, которые могли бы использовать российские туристы в лесу сегодня, чтобы «не накликать косолапого», но чтобы все в группе поняли, о ком речь.", a: "Оценивается юмор, точность описания и уважительный тон." }
        ]
    },
    {
        name: "Черкесы",
        questions: [
            { points: 10, q: "Этот мягкий, несоленый рассольный сыр, который часто коптят, является одним из самых известных продуктов черкесской кухни. Он даже носит название одной из республик России. Что это за сыр?", a: "Адыгейский сыр." },
            { points: 20, q: "Как называется традиционная верхняя мужская одежда черкесов, которую со временем переняли почти все народы Кавказа и казаки? Её отличительная черта — газыри (специальные кармашки для пороховых зарядов) на груди.", a: "Черкеска." },
            { points: 30, q: "У черкесов существует древний неписаный свод правил, законов и этикета, который регламентирует всю жизнь: от того, как здороваться, до того, как принимать гостей и вести бой. Как называется этот моральный кодекс?", a: "Адыгэ хабзэ (допустимо просто «Хабзэ»)." },
            { points: 40, q: "Традиционный танец черкесов — это плавный, но экспрессивный парный танец, имитирующий брачный танец орла и лебедя. Мужчина танцует на полупальцах (вскинув руки как крылья), а женщина плавно плывет по кругу. Как называется этот танец?", a: "Исламей." },
            { points: 50, q: "По традиционному черкесскому этикету (хабзэ), если всадник подъезжает к дому, он должен спешиться задолго до ворот. А что он должен сделать со своим оружием (например, кинжалом), прежде чем переступить порог гостевой комнаты (кунацкой)?", a: "Оставить его снаружи / повесить на стену у входа / сдать хозяину. (Входить с оружием в дом — знак враждебности или неуважения)." },
            { points: 100, q: "В черкесской культуре существовал строгий обычай избегания. Например, зять (муж дочери) мог годами не видеться и не разговаривать со своими тестем и тещей — при их появлении он должен был уйти в другую комнату.\nЗадание: Ответьте на два вопроса: 1) В чем был глубокий психологический смысл этого обычая в условиях того времени? 2) Придумайте шуточный «Кодекс избегания 2.0» для современных соцсетей (напишите 3 строгих правила, как современный зять должен «избегать» тещу в интернете).", a: "Критерии: логика, развернутость ответа" }
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
