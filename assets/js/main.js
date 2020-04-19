console.log("coge js chargé");

var btn_menu = document.querySelector('#btn_menu');
var fermer = document.querySelector('#btn_fermer');


btn_menu.addEventListener('click', function() {
    var menuDepliant = document.querySelector('#menu');
    menuDepliant.style.display = 'flex';
    menuDepliant.classList.add('flipInX');
    menuDepliant.classList.remove('flipOutX');
});

fermer.addEventListener('click', function() {
    console.log('tu as clické');
    var menuDepliant = document.querySelector('#menu');
    menuDepliant.classList.add('flipOutX');
    menuDepliant.classList.remove('flipInX');
  });

