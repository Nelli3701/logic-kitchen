'use strict';
// Функция для рендеринга категорий
const renderCategories = () => {
    const catListEl = document.querySelector('.cat-list');
    const categoriesData = JSON.parse(categories); // Преобразуем строку JSON в объект

    catListEl.innerHTML = ''; // Очищаем содержимое контейнера

    categoriesData.forEach(category => {
        const catElement = document.createElement('div');
        catElement.classList.add('cat-element');

        catElement.innerHTML = `
            <div class="cat-element-desc">
                <div class="cat-link">
                    <img class="img-with-border red-border" src="${category.img}" 
                         alt="${category.name}" 
                         data-hover="${category.hoverImg}">
                </div>
                <p href="#" class="cat-link-name">${category.name}</p>
            </div>
        `;

        // Добавление событий на наведение
        const imgEl = catElement.querySelector('img');
        imgEl.addEventListener('mouseenter', () => {
            imgEl.src = imgEl.dataset.hover; // Меняем изображение на hover изображение
            imgEl.classList.remove('red-border'); // Убираем красную рамку
            imgEl.classList.add('blue-border'); // Добавляем синюю рамку
        });
        imgEl.addEventListener('mouseleave', () => {
            imgEl.src = category.img; // Возвращаем исходное изображение
            imgEl.classList.remove('blue-border'); // Убираем синюю рамку
            imgEl.classList.add('red-border'); // Возвращаем красную рамку
        });

        catListEl.appendChild(catElement); // Добавляем элемент в список
    });
};

// Загружаем категории при загрузке страницы
document.addEventListener('DOMContentLoaded', renderCategories);