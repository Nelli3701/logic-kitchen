let activeBtns = document.querySelectorAll('.active-btn');
let menu = document.querySelector('.navbar');
for (let activeBtn of activeBtns) {
    activeBtn.addEventListener('click', () => {
        menu.classList.toggle('opened');
        menu.classList.toggle('shadow');

    })
}