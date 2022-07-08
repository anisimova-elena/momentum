console.log("Моя оценка 100: \n Я считаю практически все пункты выполнены, можно сделать замечания к header и секция steps.\n Но, в блоке Особенности проверки вёрстки на соответствие макету указано что приветствуется правка кривонарисованных блоков :) \n Интерактивность - при наведении на меню, оно плавно подчёркивается \n");
const menu = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-icon');
const mask =  document.querySelector('.mask-content');
const exitBtn =  document.querySelector('.exit-button');
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        mask.classList.toggle('active');
    });
    mask.addEventListener('click', () => {
        menu.classList.remove('active');
        mask.classList.remove('active');
        menuBtn.classList.remove('active');
    })
    exitBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        mask.classList.remove('active');
    })
}