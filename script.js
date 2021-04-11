const menuIcon = document.getElementById('menu-icon');
const navUl = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('show');
});