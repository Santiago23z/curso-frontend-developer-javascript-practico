const email = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu')

email.addEventListener('click', toggle);

function toggle() {
    desktop.classList.toggle('inactive')
}