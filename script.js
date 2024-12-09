document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('review').value;

    // Отправка данных на сервер
    fetch('/submit-review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, review })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = data.message;
        document.getElementById('reviewForm').reset(); // очистка формы
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});
