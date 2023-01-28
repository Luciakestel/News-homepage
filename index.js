const hamb = document.querySelector('.header_hamb');
const menuHamb = document.querySelector('.header_menu');
const hambClose = document.querySelector('.header_menu_close');



function handleClick(){
  menuHamb.classList.toggle('inactive');
}


hamb.addEventListener(('click'), handleClick);
hambClose.addEventListener(('click'), handleClick);
