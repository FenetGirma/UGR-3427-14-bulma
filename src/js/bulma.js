document.addEventListener("DOMContentLoaded",function(){
    // mobile menu
    var burgerIcon = document.getElementById("burger");
    var navbarMenu = document.getElementById("nav-links");
    if (burgerIcon !== null && navbarMenu!==null) {
      burgerIcon.addEventListener('click', function(){
        navbarMenu.classList.toggle('is-active');});
    }});
    