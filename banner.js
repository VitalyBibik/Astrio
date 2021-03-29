
/* Индекс слайда по умолчанию */
let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

afterTime(5000); // Устанавливаем счетчик
/* Функция увеличивает индекс на 1, показывает следующий слайд */
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшает индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.querySelectorAll('.slider__item');

    if (n && n > slides.length) {
        slideIndex = 1;
    }
    if (n && n < 1) {
        slideIndex = slides.length;
    }

    for (let image of slides) {
        image.style.display = "none";
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex <= 0) slideIndex = slides.length; // проверяем на кнопке back

    slides[slideIndex - 1].style.display = "block";

   afterTime(5000); // Сбрасываем и устанавливаем счетчик
}

// Счетчик
function afterTime(delay) {
    clearInterval(timer);
    timer = setInterval(() => {
        slideIndex++;
        showSlides();
    }, delay);
}

