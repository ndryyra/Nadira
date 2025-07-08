// Simple JS for menu interaction
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-horizontal ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            menuLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    console.log('JavaScript loaded: Menu interaction enabled.');
});
