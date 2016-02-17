document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger');
  var nav_ul = document.querySelector('nav.header ul');

  burger.addEventListener('click', function() {
    nav_ul.classList.toggle('show');
  });

  nav_ul.addEventListener('click', function() {
    nav_ul.classList.remove('show');
  });
});