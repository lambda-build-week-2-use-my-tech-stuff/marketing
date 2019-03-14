
//toggle mobile menu

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
    let menu = document.querySelector('.menu-cont');
    menu.classList.toggle('hide');
    console.log('here menu is');
    return menu;
})

