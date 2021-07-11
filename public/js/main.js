


const menuBtn = document.querySelector('.nav-btn');

const hamburger = document.querySelector('.nav-btn__burger');
let showMenu = false;
menuBtn.addEventListener('click',toggleMenu);


function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        openNav();
        showMenu=true;
    }
    else{
        hamburger.classList.remove('open');
        closeNav();
        showMenu=false;
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.marginRight = "0";
  }

