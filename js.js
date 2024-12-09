// Функция для отслеживания времени на странице
let startTime = Date.now();

window.addEventListener('beforeunload', function () {
    let timeSpent = Date.now() - startTime; // Время, проведенное на странице в миллисекундах
    let pageTitle = document.title;

    // Отправка данных на сервер 
    navigator.sendBeacon('https://lekodar.github.io/api/track-time', JSON.stringify({
        title: pageTitle,
        timeSpent: timeSpent
    }));
});

// Функция для отслеживания кликов по элементам
document.addEventListener('click', function (event) {
    let targetElement = event.target;
    let elementType = targetElement.tagName; // Тип элемента (например, 'BUTTON', 'A', и т.д.)
    let elementId = targetElement.id; // ID элемента, если он есть
    let elementClass = targetElement.className; // Классы элемента

    // Отправка данных о клике на сервер
    navigator.sendBeacon('https://lekodar.github.io/api/track-click', JSON.stringify({
        elementType: elementType,
        elementId: elementId,
        elementClass: elementClass,
        pageTitle: document.title
    }));
});

// Функция для отслеживания прокрутки страницы
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    // Проверка, насколько пользователь прокрутил страницу (на 100 пикселей вниз)
    if (Math.abs(scrollY - lastScrollY) >= 100) {
        navigator.sendBeacon('https://lekodar.github.io/api/track-scroll', JSON.stringify({
            scrolledTo: scrollY,
            pageTitle: document.title
        }));
        lastScrollY = scrollY; // Обновление значения последней прокрутки
    }
});
