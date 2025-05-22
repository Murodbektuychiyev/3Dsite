const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
});

// Ekran o‘lchami o‘zgarganda menyuni yopish (masalan, desktopga o‘tganida)
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
    }
});
