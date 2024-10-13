'use strict';

// Настраиваем, чтобы одновременно открыт был только один details

const summaryEls = document.querySelectorAll('.faq-elements summary');

summaryEls.forEach(summary => {
    summary.addEventListener('click', (e) => {
        // Получаем родительский элемент <details>
        const currentDetails = e.target.parentElement;
    const detailsEls = document.querySelectorAll('.faq-elements');
    detailsEls.forEach(details => {
        if (details !== currentDetails) {
            details.removeAttribute('open');
        }
    })
})
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
//setMargin();

// Обновление отступа при изменение размера окна
window.addEventListener('resize', setMargin);