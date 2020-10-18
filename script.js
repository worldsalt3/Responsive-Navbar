let menu = document.getElementById('menu');

let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
})