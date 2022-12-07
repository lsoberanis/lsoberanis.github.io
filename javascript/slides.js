(function($){
$(document).ready(function(){
    $('.slides-cont').slick({
      //setting-name: setting-value
      infinite: true,
      dots: true,
      speed: 300,
      swipe: true,
    });
  });
}) ( jQuery);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}