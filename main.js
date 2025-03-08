// Функция печатной машинки: выводит текст по буквам
function typeWriter(el, text, delay = 30) {
    return new Promise((resolve) => {
        let i = 0;
        el.textContent = ""; // очищаем содержимое
        const interval = setInterval(() => {
            el.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    // Находим все блоки с текстом (с атрибутом data-text)
    const textBlocks = document.querySelectorAll(".message-text[data-text]");

    // Анимируем блоки последовательно
    for (const block of textBlocks) {
        const fullText = block.textContent.trim();
        // Очищаем блок и запускаем эффект печатной машинки
        block.textContent = "";
        await typeWriter(block, fullText, 30);
        // Делаем блок видимым (с плавным переходом)
        block.style.opacity = "1";

        // После завершения анимации текста запускаем анимацию появления цветка
        const container = block.closest(".flower-container");
        const flower = container.querySelector(".flower");
        // Добавляем класс bloom, чтобы запустить анимацию появления цветка
        flower.classList.add("bloom");

        // Небольшая задержка перед следующим блоком
        await new Promise((resolve) => setTimeout(resolve, 300));
    }
});
