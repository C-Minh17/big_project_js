// -----import var---
import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divBoxTour} from "/asset/javascript/var.js"
import {divPrevTour} from "/asset/javascript/var.js"
import {divNextTour} from "/asset/javascript/var.js"
import {divBoxHotel} from "/asset/javascript/var.js"
import {divPrevHotel} from "/asset/javascript/var.js"
import {divNextHotel} from "/asset/javascript/var.js"
import {divInfoWeb} from "/asset/javascript/var.js"



let urlMain="https://project-api-ptit.vercel.app/api"

// -----import function-----
import {dataApi} from "/asset/javascript/fetchApi.js"

// -------------/
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

// -----top Tour---
let slTour=0;
async function innerTour(){
    let a=await dataApi(urlMain);
    let html="";
    let list=[];
    a.tours.forEach(item=>{
        list.push(`
                <div class="col-xl-4 box ">
                    <div class="box-tour">
                        <div class="top">${item.top}</div>
                        <a href="#"><img src="${item.img}"></a>
                        <div class="overlay"></div>
                        <div class="cate-price">
                            <div class="category">
                                <i class="${item.icon}"></i>
                                <span>${item.category}</span>
                            </div>
                            <div class="price">${item.price}$</div>
                        </div>
                        <div class="extra">
                            <div class="title">
                                <h4>${item.title}</h4>
                                <div class="evalual">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="wish"><i class="fa-solid fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            `)
    });
    html=list[slTour]+list[slTour+1]+list[slTour+2];
    divBoxTour.innerHTML=html;
};
innerTour();

divPrevTour.addEventListener("click",()=>{
    if (slTour>0){
        slTour--;
        innerTour()
    }
})
divNextTour.addEventListener("click",()=>{
    if (slTour<3){
        slTour++;
        innerTour()
    }
})
// ---------

// -----top Hotel---
let slHotel=0;
async function innerHotel(){
    let a=await dataApi(urlMain);
    let html="";
    let list=[];
    a.hotels.forEach(item=>{
        list.push(`
                <div class="col-xl-4 box ">
                    <div class="box-tour">
                        <div class="top">${item.top}</div>
                        <a href="#"><img src="${item.img}"></a>
                        <div class="overlay"></div>
                        <div class="cate-price">
                            <div class="category">
                                <span class="type">${item.point}</span>
                                <span>${item.type}</span>
                            </div>
                            <div class="price">${item.price}$</div>
                        </div>
                        <div class="extra">
                            <div class="title">
                                <h4>${item.title}</h4>
                                <div class="evalual">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="wish"><i class="fa-solid fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            `)
    });
    html=list[slHotel]+list[slHotel+1]+list[slHotel+2];
    divBoxHotel.innerHTML=html;
};
innerHotel();

divPrevHotel.addEventListener("click",()=>{
    if (slHotel>0){
        slHotel--;
        innerHotel()
    }
})
divNextHotel.addEventListener("click",()=>{
    if (slHotel<2){
        slHotel++;
        innerHotel()
    }
})
// ---------

window.addEventListener("scroll",()=>{
    let value=window.scrollY<3500;
    if (value==true){
        divInfoWeb.classList.remove("infoNone");
    }else{
        divInfoWeb.classList.add("infoNone");
}})


// -----------------
if (localStorage.getItem("status")==1){
    document.querySelector(".sign-in-success").style.display="flex";
    document.querySelector(".sign-in").style.display="none";
    document.querySelector("#nameSignIn").innerHTML=`Hi,${localStorage.getItem("nameUser")}`
}
document.querySelector("#logOut").addEventListener("click",()=>{
    if(confirm("bạn chăc chắn muốn đăng xuất")){
        localStorage.status=0;
        alert("bạn đã đăng xuất thành công");
    }
})
