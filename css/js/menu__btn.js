let buttonOpen = document.querySelector('.menu__btn');
let nav = document.querySelector('.menu__nav');
let buttonClose = document.querySelector('.menu__close');


buttonOpen.onclick = function () {
   nav.classList.toggle('open');
   nav.classList.toggle('close');
};


buttonClose.onclick = function () {
   nav.classList.toggle('open');
   nav.classList.toggle('close');
};