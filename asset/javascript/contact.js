import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"


window.addEventListener("scroll",()=>{
    let value=window.scrollY>75;
    if (value==true){
        divHeader.classList.add("scroll");
        divNavBar.classList.add("nav-bar-none");
        divMenu.classList.add("box-menu");
    }else{
        divHeader.classList.remove("scroll");
        divNavBar.classList.remove("nav-bar-none");
        divMenu.classList.remove("box-menu");
    }
})



document.querySelector("header .extra .cart").addEventListener("click",()=>{
    if (localStorage.getItem("status") == 1){
        location.href="/pages/history.html"
    }else{
        alert("Vui lòng đăng nhập để xem lịch sử booking")
    }
})


// ---menu Two--
const divBar=document.getElementById("barsMmenu")
const closeBar=document.getElementById("closeMenu")
const overlayBar=document.getElementById("overlayBars")

divBar.addEventListener("click",()=>{
    document.getElementById("menuBars").style.transform="translateX(0px)"
    document.getElementById("overlayBars").classList.add("hidden-overlay")
})
closeBar.addEventListener("click",()=>{
    document.getElementById("menuBars").style.transform="translateX(-500px)"
    document.getElementById("overlayBars").classList.remove("hidden-overlay")
})
overlayBar.addEventListener("click",()=>{
    document.getElementById("menuBars").style.transform="translateX(-500px)"
    document.getElementById("overlayBars").classList.remove("hidden-overlay")
})


