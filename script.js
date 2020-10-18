let menu = document.getElementById('menu');

let navBarToggle = document.getElementById('navbar-toggle');

let bars = document.getElementById('bars');

let close = document.getElementById('close');

let logo = document.getElementById('logo');

navBarToggle.addEventListener('click', () => {
    navBarToggle.classList.add('hide-navbar-toggle');
    menu.classList.toggle('active');
    close.classList.toggle('show-close');
    logo.classList.add('logo-inactive');
})

close.addEventListener('click', () => {
  navBarToggle.classList.remove('hide-navbar-toggle')
  menu.classList.toggle('active')
  close.classList.toggle('show-close');
  logo.classList.remove('logo-inactive')
})
