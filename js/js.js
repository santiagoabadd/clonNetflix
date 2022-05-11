let headMenu = document.querySelector(".nav__dmenu");
let Menu = document.querySelector(".nav__submenu");
let header = document.querySelector(".navbar");
let menuState = false;

headMenu.addEventListener("mouseenter", desplegarmenu);
Menu.addEventListener("mouseleave", cerrarmenu);






function desplegarmenu(){
        
        Menu.style.display = "flex"
        
        
    }

function cerrarmenu(){
        Menu.style.display = "none"
    }
