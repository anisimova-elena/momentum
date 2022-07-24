console.log("Моя оценка: 100\n Discord: fvtnbcn#9419 \nElena (@anisimova-elena)");
const menu = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-icon');
const overlay =  document.querySelector('.overlay');
const exitBtn =  document.querySelector('.exit-button');
const login = document.querySelector('.login-btn');
const login_mobile = document.querySelector('.mobile-login-btn');
const switch_to_register = document.querySelector('.register-link');
const switch_to_login = document.querySelector('.login-link');
const pop_up_signup = document.querySelector('.signup-container');
const pop_up_login = document.querySelector('.login-container');
const login_form = document.querySelector('.login-form');
const pop_up = document.querySelector('.pop-up');
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        overlay.classList.toggle('active');
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');        
    });
    menu.querySelectorAll('a'). forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            menuBtn.classList.remove('active');
        })
    })
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        menuBtn.classList.remove('active');
        pop_up.classList.remove('active');
    })
    exitBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        menuBtn.classList.remove('active');
    })
}
if (login) {
    login.addEventListener('click', () => {
        pop_up.classList.toggle('active');
        overlay.classList.toggle('active');
    })
}
if (login_mobile) {
    login_mobile.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        pop_up.classList.toggle('active');
    })
}
if (switch_to_register) {
    switch_to_register.addEventListener('click', () => {
        pop_up_signup.classList.remove('signup-container__disabled');
        pop_up_login.classList.toggle('login-container__disabled');
    })
}
if (switch_to_login) {
    switch_to_login.addEventListener('click', () => {
        pop_up_signup.classList.toggle('signup-container__disabled');
        pop_up_login.classList.remove('login-container__disabled');
    })
}

login_form.onsubmit = function(e) {
    e.preventDefault();
    let input_email = document.querySelector('#login-email');
    let input_password = document.querySelector('#login-password');
    alert("Email: " + input_email.value + "\n" + "Password: " + input_password.value);
    pop_up.classList.remove('active');
    overlay.classList.remove('active');
  };

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView( {
            behavior: 'smooth',
            block: 'start',
        })
    })    
})

let slider_items = document.querySelectorAll('.slider-item');
let slider_list = document.querySelector('.slider-wrapper');
let control_buttons = document.querySelectorAll('.circle');
let currentItem = 1;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + slider_items.length) % slider_items.length;
}

function hideItem(direction) {
    isEnabled = false;
    slider_items[currentItem].classList.add(direction);
    control_buttons[currentItem].classList.remove('active');
    slider_items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}
function showItem(direction) {
    slider_items[currentItem].classList.add('next', direction);
    slider_items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        control_buttons[currentItem].classList.add('active');
        isEnabled = true;
    })
}
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n-1); 
    showItem('from-left');
}
function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
document.querySelector('.arrow-back').addEventListener('click', function() {
    if (isEnabled) {
        previousItem (currentItem);
    }
})
document.querySelector('.arrow-next').addEventListener('click', function() {
    if (isEnabled) {
        nextItem (currentItem);
    }
})
function toPrev() {
    slider_list.classList.remove("to-next");
    control_buttons[0].classList.add('active');
    control_buttons[1].classList.remove('active');
    control_buttons[2].classList.remove('active');
    slider_list.classList.add("to-prev");
}
function toCenter() {
    slider_list.classList.remove("to-next");
    control_buttons[1].classList.add('active');
    control_buttons[0].classList.remove('active');
    control_buttons[2].classList.remove('active');
    slider_list.classList.remove("to-prev");
}
function toNext() {
    slider_list.classList.remove("to-prev");
    control_buttons[2].classList.add('active');
    control_buttons[0].classList.remove('active');
    control_buttons[1].classList.remove('active');
    slider_list.classList.add("to-next");
}
document.querySelector('.slider-item:first-child').addEventListener('click', function() { toPrev() });
document.querySelector('.slider-item:nth-child(2)').addEventListener('click', function() { toCenter() });
document.querySelector('.slider-item:last-child').addEventListener('click', function() { toNext() });

document.querySelectorAll('.circle').forEach((item, index, array) => {
    item.addEventListener('click', event => {
        switch(index) {
            case 0: toPrev(); break;
            case 1: toCenter(); break;
            case 2: toNext(); break;
        }
    })
  })
