console.log("Моя оценка: 100\n Discord: fvtnbcn#9419 \nElena (@anisimova-elena)");
const menu = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-icon');
const mask =  document.querySelector('.mask-content');
const exitBtn =  document.querySelector('.exit-button');
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        mask.classList.toggle('active');
        menuBtn.classList.toggle('active');        
    });
    menu.querySelectorAll('a'). forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            mask.classList.remove('active');
            menuBtn.classList.remove('active');
        })
    })
    mask.addEventListener('click', () => {
        menu.classList.remove('active');
        mask.classList.remove('active');
        menuBtn.classList.remove('active');
    })
    exitBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        mask.classList.remove('active');
        menuBtn.classList.remove('active');
    })
}
