document.addEventListener('DOMContentLoaded', function() {
    const dotsContainer = document.querySelector('.dots-container');
    const message = document.querySelector('.message');
    const congratulationsText = "С 8 Марта! Желаю счастья и весеннего настроения!";
    const audio = document.getElementById('player');
    const playBtn = document.getElementById('play-btn');

    // Изначально текст скрыт
    message.style.opacity = '0';

    // Обработчик клика по кнопке
    playBtn.addEventListener('click', function() {
        // Запускаем музыку
        audio.play();

        // Скрываем кнопку
        playBtn.style.display = 'none';

        // Скрываем точки
        dotsContainer.style.display = 'none';

        // Показываем текст и запускаем анимацию
        message.style.opacity = '1';
        typeWriter(message, congratulationsText, 50);
    });
});

// Функция для посимвольного появления текста
function typeWriter(element, text, delay) {
    let i = 0;
    element.textContent = ''; // Очищаем текст перед началом
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
        }
    }, delay);
}