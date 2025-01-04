
// JavaScript for Hamburger Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

