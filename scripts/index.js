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