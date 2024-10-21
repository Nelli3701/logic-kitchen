'use strict';

// Маска для поля ввода номера телефона в формах
document.addEventListener('DOMContentLoaded', function () {

    const phoneInputs = document.querySelectorAll('.phone-mask');
    phoneInputs.forEach(input => {
        IMask(input, {
            mask: '+{7}(000) 000-00-00',
            lazy: false // При значении false маска видна сразу
        });

        // Устанавливаем цвет текста на черный при вводе
        input.addEventListener('input', function () {
            input.style.color = 'black';
        });

        // Добавляем обработчик события blur, чтобы вернуть серый цвет, если поле пустое
        input.addEventListener('blur', function () {
            if (!input.value) {
                input.style.color = 'gray';
            }
        });
    });

    // Валидация форм
    /*

    const forms = document.querySelectorAll('.main-form');

    forms.forEach(form => {
        let formSubmitted = false; // Переменная для отслеживания, было ли нажатие кнопки отправки

        form.addEventListener('submit', function (event) {
            let isValid = true;

            // Валидация поля name
            const nameInput = form.querySelector('input[name="name"]');
            const nameError = document.createElement('small');
            nameError.className = 'error-message';
            nameError.style.color = 'red';

            if (!nameInput.value || nameInput.value.length > 50) {
                nameInput.style.border = '2px solid red'; // Добавить красную рамку
                if (!nameInput.nextElementSibling || !nameInput.nextElementSibling.classList.contains('error-message')) {
                    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
                }
                nameError.textContent = 'Поле обязательно для заполнения и не должно превышать 50 символов!';
                nameError.style.display = 'block'; // Показать сообщение
                isValid = false;
            }

            // Валидация поля phone
            const phoneInput = form.querySelector('input[name="phone"]'); // Определяем phoneInput
            const phoneError = document.createElement('small');
            phoneError.className = 'error-message';
            phoneError.style.color = 'red';

            if (!phoneInput.value) {
                phoneInput.style.border = '2px solid red'; // Показываем ошибку
                if (!phoneInput.nextElementSibling || !phoneInput.nextElementSibling.classList.contains('error-message')) {
                    phoneInput.parentNode.insertBefore(phoneError, phoneInput.nextSibling);
                }
                phoneError.textContent = 'Поле обязательно для заполнения!';
                phoneError.style.display = 'block'; // Показать сообщение
                isValid = false;
            } else if (phoneInput.value.replace(/\D/g, '').length < 11) { // Проверяем на количество цифр
                phoneInput.style.border = '2px solid red'; // Показываем ошибку
                if (!phoneInput.nextElementSibling || !phoneInput.nextElementSibling.classList.contains('error-message')) {
                    phoneInput.parentNode.insertBefore(phoneError, phoneInput.nextSibling);
                }
                phoneError.textContent = 'Номер телефона заполнен некорректно. Используйте формат: +7(000) 000-00-00';
                phoneError.style.display = 'block'; // Показать сообщение
                isValid = false;
            }

            // Если форма некорректна, предотвращаем её отправку
            if (!isValid) {
                event.preventDefault(); // Предотвращаем отправку
            } else {
                // Успешная проверка на валидность, может быть выполнена отправка
                formSubmitted = true;
            }
        });

        // Обработчики событий для сброса ошибок на полях ввода
        const nameInput = form.querySelector('input[name="name"]');
        const phoneInput = form.querySelector('input[name="phone"]'); // Определяем phoneInput

        nameInput.addEventListener('input', function () {
            // Проверяем валидность при вводе, чтобы убрать красную рамку
            if (nameInput.value && nameInput.value.length <= 50) {
                nameInput.style.border = ''; // Сбросить рамку если введено корректное значение
                const nameErrorMsg = nameInput.nextElementSibling;
                if (nameErrorMsg && nameErrorMsg.classList.contains('error-message')) {
                    nameErrorMsg.remove(); // Удалить сообщение об ошибке
                }
            } else if (formSubmitted) { // Если форма была отправлена, выводим ошибку
                nameInput.style.border = '2px solid red'; // Показываем ошибку
                if (!nameInput.nextElementSibling || !nameInput.nextElementSibling.classList.contains('error-message')) {
                    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
                    nameError.textContent = 'Поле обязательно для заполнения и не должно превышать 50 символов!';
                    nameError.style.display = 'block'; // Показать сообщение
                }
            }
        });

        phoneInput.addEventListener('input', function () {
            // Проверяем валидность при вводе, чтобы убрать красную рамку
            const digits = phoneInput.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
            if (digits.length >= 11) {
                phoneInput.style.border = ''; // Сбросить рамку
                const phoneErrorMsg = phoneInput.nextElementSibling;
                if (phoneErrorMsg && phoneErrorMsg.classList.contains('error-message')) {
                    phoneErrorMsg.remove(); // Удалить сообщение об ошибке
                }
            } else if (formSubmitted) { // Если форма была отправлена, показываем ошибку
                phoneInput.style.border = '2px solid red'; // Показываем ошибку
                if (!phoneInput.nextElementSibling || !phoneInput.nextElementSibling.classList.contains('error-message')) {
                    phoneInput.parentNode.insertBefore(phoneError, phoneInput.nextSibling);
                    phoneError.textContent = 'Номер телефона заполнен некорректно. Используйте формат: +7(000) 000-00-00';
                    phoneError.style.display = 'block'; // Показать сообщение
                }
            }
        });

        nameInput.addEventListener('focus', function () {
            // Убираем сообщение об ошибке при фокусе
            if (nameInput.nextElementSibling && nameInput.nextElementSibling.classList.contains('error-message')) {
                nameInput.nextElementSibling.remove(); // Удалить сообщение об ошибке
            }
            // Не сбрасываем рамку
        });

        phoneInput.addEventListener('focus', function () {
            // Убираем сообщение об ошибке при фокусе
            if (phoneInput.nextElementSibling && phoneInput.nextElementSibling.classList.contains('error-message')) {
                phoneInput.nextElementSibling.remove(); // Удалить сообщение об ошибке
            }
            // Не сбрасываем рамку
        });
    }); */
});


//Настраиваем отступ от фиксированного меню, чтобы не перекрывался контент

const header = document.querySelector('header.main-header');
const nextBlock = document.querySelector('.page-content');

function setMargin() {
    const headerHeight = header.offsetHeight;
    nextBlock.style.marginTop = `${headerHeight}px`;
}
// Устанавливаем отступ при загрузке страницы
window.addEventListener('load', setMargin);
// Обновление отступа при изменение размера окна
window.addEventListener('resize', setMargin);


// Настройка видимости всплывающей формы pop-up
const popup = document.querySelector('.popup');
const closePopupBtn = popup.querySelector('.btn-close');
const popupButtons = document.querySelectorAll('.popup-btn');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.toggle('visible');
        popup.classList.toggle('shadow');
        document.body.classList.toggle('active');
    });
});

closePopupBtn.addEventListener('click', () => {
    popup.classList.toggle('visible');
    popup.classList.toggle('shadow');
    document.body.classList.toggle('active');
});


/*Функция для изменения изображения при наведении с проверкой, 
есть есть ли у элемента imgEl значение в dataset.hover. 
Если оно отсутствует, мы изменим только цвет рамки, вместо изменения изображения.  */

function changeImgHover(imgEl, imgOriginal) {
    imgEl.addEventListener('mouseenter', () => {
        if (imgEl.dataset.hover) { // Проверяем, есть ли hover изображение
            imgEl.src = imgEl.dataset.hover; // Меняем изображение на hover изображение
        }
        imgEl.classList.remove('red-border'); // Убираем красную рамку
        imgEl.classList.add('blue-border'); // Добавляем синюю рамку
    });

    imgEl.addEventListener('mouseleave', () => {
        if (imgEl.dataset.hover) { // Проверяем, есть ли hover изображение
            imgEl.src = imgOriginal.img; // Возвращаем исходное изображение
        }
        imgEl.classList.remove('blue-border'); // Убираем синюю рамку
        imgEl.classList.add('red-border'); // Возвращаем красную рамку
    });
}

// Валидация форм
/*
document.querySelectorAll('.main-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Валидация поля имени
        const nameInput = form.querySelector('.name');
        if (!nameInput.value) {
            isValid = false;
            alert('Пожалуйста, введите ваше имя.');
        }

        // Валидация поля телефона
        const phoneInput = form.querySelector('.phone');
        if (!phoneInput.value) {
            isValid = false;
            alert('Пожалуйста, введите ваш телефон.');
        }

        // Если валидация не прошла, предотвращаем отправку формы
        if (!isValid) {
            event.preventDefault();
        }
    });
});
*/
