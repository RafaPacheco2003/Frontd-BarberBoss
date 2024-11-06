window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const headerInfoImg = document.querySelector('.header-info-img'); // Selecciona la sección con la clase `header-info-img`

    const headerInfoTop = headerInfoImg.getBoundingClientRect().top;

    if (headerInfoTop <= 0) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});
