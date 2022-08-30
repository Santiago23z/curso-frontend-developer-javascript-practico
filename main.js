const email = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuHam.addEventListener('click', toggleMobile)
email.addEventListener('click', toggle);

function toggle() {
    desktop.classList.toggle('inactive');
}

function toggleMobile() {
    menuMobile.classList.toggle('inactive');
}