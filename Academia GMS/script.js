// Exemplo de funcionalidade interativa para menu móvel
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});