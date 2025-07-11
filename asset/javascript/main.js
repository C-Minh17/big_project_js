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
import {wishUI} from "/asset/javascript/wishlist.js"


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



// ---auto next home--
const autoNext=document.querySelector(".visually-hidden-next")
setInterval(()=>{
    autoNext.click()
},3000)


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
                        <a data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.category}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.icon}"
                     class="bt-item"><img src="${item.img}"></a>
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
                            <div class="wish bt-wish"
                                data-id="${item.id}" 
                                data-img="${item.img}"
                                data-category="${item.category}"
                                data-content="${item.content}"
                                data-title="${item.title}"
                                data-price="${item.price}"
                                data-icon="${item.icon}"
                            ><i class="fa-solid fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            `)
    });
    html=list[slTour]+list[slTour+1]+list[slTour+2];
    divBoxTour.innerHTML=html;
    const buttonItem=document.querySelectorAll(".bt-item");
    const buttonWish=document.querySelectorAll(".bt-wish");
    buttonWish.forEach(element=>{
        element.addEventListener("click",()=>{
            if(localStorage.getItem("status") == 0){
                alert("Vui lòng đăng nhập để tiếp tục")
                return
            }
            const data = {
                id:element.dataset.id,
                img:element.dataset.img,
                category:element.dataset.category,
                content:element.dataset.content,
                title:element.dataset.title,
                price:element.dataset.price,
                icon:element.dataset.icon,
                name:localStorage.getItem("nameUser")
            };
            let listLocalWish=JSON.parse(localStorage.getItem("AllListWish")) 
            console.log("....",listLocalWish)
            if (listLocalWish){
                let k=0
                listLocalWish.forEach(item => {
                    if (item.id==data.id && item.name==data.name){
                        k=1
                    }
                });
                if(k==1){
                    alert("Bạn đã thêm vào Wishlist rồi")
                    return
                }
                listLocalWish.push(data)
                localStorage.setItem("AllListWish",JSON.stringify(listLocalWish))
                alert(`Bạn đã thêm ${data.title} vào Wishlist`)
            }else{
                listLocalWish=[]
                listLocalWish.push(data)
                localStorage.setItem("AllListWish",JSON.stringify(listLocalWish))
                alert(`Bạn đã thêm ${data.title} vào Wishlist`)
            }
            wishUI()
        })
    })
    buttonItem.forEach(element=>{
        element.addEventListener("click",()=>{
            const data = {
                id:element.dataset.id,
                img:element.dataset.img,
                category:element.dataset.category,
                content:element.dataset.content,
                title:element.dataset.title,
                price:element.dataset.price,
                icon:element.dataset.icon
            };
            localStorage.setItem("infoItem",JSON.stringify(data))
            location.href="/pages/item.html"
        })
    })
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
                        <a data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.type}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.point}"
                     class="bt-item"><img src="${item.img}"></a>
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
                            <div class="wish bt-wish"
                                data-id="${item.id}" 
                                data-img="${item.img}"
                                data-category="${item.type}"
                                data-content="${item.content}"
                                data-title="${item.title}"
                                data-price="${item.price}"
                                data-icon="${item.point}"
                            ><i class="fa-solid fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            `)
    });
    html=list[slHotel]+list[slHotel+1]+list[slHotel+2];
    divBoxHotel.innerHTML=html;
    const buttonItem=document.querySelectorAll(".bt-item");
    buttonItem.forEach(element=>{
        element.addEventListener("click",()=>{
            const data = {
                id:element.dataset.id,
                img:element.dataset.img,
                category:element.dataset.category,
                content:element.dataset.content,
                title:element.dataset.title,
                price:element.dataset.price,
                icon:element.dataset.icon
            };
            localStorage.setItem("infoItem",JSON.stringify(data))
            location.href="/pages/item.html"
        })
    })
    const buttonWish=document.querySelectorAll(".bt-wish");
    buttonWish.forEach(element=>{
        element.addEventListener("click",()=>{
            if(localStorage.getItem("status") == 0){
                alert("Vui lòng đăng nhập để tiếp tục")
                return
            }
            const data = {
                id:element.dataset.id,
                img:element.dataset.img,
                category:element.dataset.category,
                content:element.dataset.content,
                title:element.dataset.title,
                price:element.dataset.price,
                icon:element.dataset.icon,
                name:localStorage.getItem("nameUser")
            };
            let listLocalWish=JSON.parse(localStorage.getItem("AllListWish")) 
            console.log("....",listLocalWish)
            if (listLocalWish){
                let k=0
                listLocalWish.forEach(item => {
                    if (item.id==data.id && item.name==data.name){
                        k=1
                    }
                });
                if(k==1){
                    alert("Bạn đã thêm vào Wishlist rồi")
                    return
                }
                listLocalWish.push(data)
                localStorage.setItem("AllListWish",JSON.stringify(listLocalWish))
                alert(`Bạn đã thêm ${data.title} vào Wishlist`)
            }else{
                listLocalWish=[]
                listLocalWish.push(data)
                localStorage.setItem("AllListWish",JSON.stringify(listLocalWish))
                alert(`Bạn đã thêm ${data.title} vào Wishlist`)
            }
            wishUI()
        })
    })
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
    let value=window.scrollY<3400;
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

document.querySelector("header .extra .cart").addEventListener("click",()=>{
    if (localStorage.getItem("status") == 1){
        location.href="/pages/history.html"
    }else{
        alert("Vui lòng đăng nhập để xem lịch sử booking")
    }
})
