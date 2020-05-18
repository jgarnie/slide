'use strict'

const menuBtn = document.querySelector('#svgImg');
const menu = document.querySelector('.menu');


const hider = () =>{
if(menu.className === 'menu'){
    menu.classList.add('menu2');
    menu.classList.remove('menu');
}else{
    menu.classList.add('menu');
    menu.classList.remove('menu2');
}

}




menuBtn.addEventListener('click', hider)