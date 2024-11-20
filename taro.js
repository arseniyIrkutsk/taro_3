// Данные: каждая запись содержит объект с изображением и текстом
const pairs = {
    1: { image: './Images/12.png', text: 'Предсказание на день 1' },
    2: { image: './Images/21.png', text: 'Предсказание на день 2' },
    3: { image: './Images/15.png', text: 'Предсказание на день 3 ' },

};

let timerInterval;

// Функция для показа случайной пары
function startTimer() {
    const contentDiv = document.getElementById('content');
    clearInterval(timerInterval); // Остановить предыдущий таймер, если запущен

    // Показываем таймер
    contentDiv.innerHTML = '<span class="timer-text">Подождите...</span>';

    let secondsLeft = 1000;
    timerInterval = setInterval(() => {
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            showRandomPair();
        } else {
            contentDiv.querySelector('.timer-text').innerText = `Подождите... ${secondsLeft}`;
            secondsLeft--;
        }
    }, 10000);
}

function showRandomPair() {
    const contentDiv = document.getElementById('content');
    
    // Получаем количество пар
    const totalPairs = Object.keys(pairs).length;
    
    // Генерируем случайный номер пары
    const randomNumber = Math.floor(Math.random() * totalPairs) + 1;
    
    // Получаем выбранную пару
    const selectedPair = pairs[randomNumber];
    
    // Формируем HTML-код для вставки
    let html = `
        <p>${selectedPair.text}</p>
        <img class="card-image" src="${selectedPair.image}" alt="Карта Таро">
    `;
    
    // Вставляем HTML-код в div
    contentDiv.innerHTML = html;

    // Добавляем класс для анимации появления изображения
    setTimeout(() => {
        contentDiv.querySelector('.card-image').classList.add('show-image');
    }, 500);
}

