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

document.querySelector("#signUp").addEventListener("click",()=>{
    document.querySelector(".box-sign-up").style.display="flex";
    document.querySelector(".box-sign-in").style.display="none";
})
document.querySelector("#upSignIn").addEventListener("click",()=>{
    document.querySelector(".box-sign-in").style.display="flex";
    document.querySelector(".box-sign-up").style.display="none";
})




