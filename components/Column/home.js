
//onscroll

window.onscroll = function() {myFunction()};

function myFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   const images = document.querySelectorAll(".right-column");
   images.forEach(currentValue => currentValue.id = "slideUp");
   console.log ('Im working');
 }
}
