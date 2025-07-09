import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divFilterRestaurant} from "/asset/javascript/var.js"
import {divSettingRestaurant} from "/asset/javascript/var.js"
import {divDisplayList} from "/asset/javascript/var.js"
import {divButtonMapRestaurant} from "/asset/javascript/var.js"
import {divDisplayGird} from "/asset/javascript/var.js"
import {divRestaurantPre} from "/asset/javascript/var.js"
import {divRestaurantNumber} from "/asset/javascript/var.js"
import {divRestaurantNext} from "/asset/javascript/var.js"
import {divRestaurantSort} from "/asset/javascript/var.js"





import {dataApi} from "/asset/javascript/fetchApi.js"
import {wishUI} from "/asset/javascript/wishlist.js"


let urlRestaurant="https://project-api-ptit.vercel.app/api";


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

divSettingRestaurant.addEventListener("click",()=>{
    divFilterRestaurant.classList.toggle("filters-none")
})

// ---lists touur--
async function arrangeApi(url,i){
    let listApiArrange=[]
    const api=await dataApi(url)
    const apiRestaurants=api.restaurants
    if (i == 1){
        listApiArrange=apiRestaurants.slice().sort((a,b) => a.price - b.price)
    }else if (i == 0){
        listApiArrange=apiRestaurants.slice().sort((a,b) => b.price - a.price)
    }else{
        listApiArrange=apiRestaurants
    }
    return listApiArrange
}

let sortList=2
document.addEventListener("DOMContentLoaded",async ()=>{
    displayList(await arrangeApi(urlRestaurant,sortList))

    displayGird(await arrangeApi(urlRestaurant,sortList));

})

// ------sort item----
divRestaurantSort.addEventListener("change",async ()=>{
    stt=0;
    if (divRestaurantSort.value=="price (↑)"){
        sortList=1;
    }else if (divRestaurantSort.value=="price (↓)"){
        sortList=0;
    }else{
        sortList=2;
    }
    displayList(await arrangeApi(urlRestaurant,sortList))
    displayGird(await arrangeApi(urlRestaurant,sortList))
})




let listRestaurant=[];
let stt=0;
async function displayList(listApi){
    listRestaurant=[];
    let html="";
    let dem=0;
    listApi.forEach(item=>{
        if (dem<6){
            html+=`
                <div class="item ">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.category}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.icon}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="wish"
                            data-id="${item.id}" 
                            data-img="${item.img}"
                            data-category="${item.category}"
                            data-content="${item.content}"
                            data-title="${item.title}"
                            data-price="${item.price}"
                            data-icon="${item.icon}"
                        ><i class="fa-solid fa-heart"></i></div>
                        <div class="overlay"></div>
                        <div class="category">
                            <i class="${item.icon}"></i>
                            <span>${item.category}</span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="evalual">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="title"><b>${item.title}</b> RESTAURANT</div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-solid fa-wheelchair-move"></i></div>
                            <div><i class="fa-solid fa-skull-crossbones"></i></div>
                            <div><i class="fa-solid fa-car-rear"></i></div>
                            <div><i class="fa-solid fa-train-subway"></i></div>                        </div>
                    </div>
                    <div class="price">
                        <p>${item.price}$</p>
                        <div data-id="${item.id}"
                            data-img="${item.img}"
                            data-category="${item.category}"
                            data-content="${item.content}"
                            data-title="${item.title}"
                            data-price="${item.price}"
                            data-icon="${item.icon}"
                         class="button-one bt-item">details</div>
                    </div>
                </div>
            `;
            dem++;
        }else{
            listRestaurant.push(html);
            html="";
            dem=1;
            html+=`
                <div class="item ">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.category}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.icon}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="wish"
                            data-id="${item.id}" 
                            data-img="${item.img}"
                            data-category="${item.category}"
                            data-content="${item.content}"
                            data-title="${item.title}"
                            data-price="${item.price}"
                            data-icon="${item.icon}"
                        ><i class="fa-solid fa-heart"></i></div>
                        <div class="overlay"></div>
                        <div class="category">
                            <i class="${item.icon}"></i>
                            <span>${item.category}</span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="evalual">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="title"><b>${item.title}</b> RESTAURANT</div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-solid fa-wheelchair-move"></i></div>
                            <div><i class="fa-solid fa-skull-crossbones"></i></div>
                            <div><i class="fa-solid fa-car-rear"></i></div>
                            <div><i class="fa-solid fa-train-subway"></i></div>
                        </div>
                    </div>
                    <div class="price">
                        <p>${item.price}$</p>
                        <div data-id="${item.id}"
                            data-img="${item.img}"
                            data-category="${item.category}"
                            data-content="${item.content}"
                            data-title="${item.title}"
                            data-price="${item.price}"
                            data-icon="${item.icon}"
                         class="button-one bt-item">details</div>
                    </div>
                </div>
            `;
        };
    });
    if (html!=""){
        listRestaurant.push(html);
    };
    divDisplayList.innerHTML=listRestaurant[stt];
    divRestaurantNumber.innerHTML=stt+1;
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
            location.href="item.html"
        })
    })
    const buttonWish=document.querySelectorAll(".wish");
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


let girdRestaurant=[];
async function displayGird(listApi){
    girdRestaurant=[];
    let html="";
    let dem=0;
    listApi.forEach(item=>{
        if (dem<6){
            html+=`
                <div class="item scroll-display-none scroll-display">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.category}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.icon}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="overlay"></div>
                        <div class="cate-price">
                            <div class="category">
                                <i class="${item.icon}"></i>
                                <span>${item.category}</span>
                            </div>
                            <div class="price">${item.price}$</div>
                        </div>
                    </div>
                    <div class="title">
                        <div class="text">
                            <h2>${item.title}<b> RESTAURANT</b></h2>
                            <div class="evalual">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="wish"
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
            `;
            dem++;
        }else{
            girdRestaurant.push(html);
            html="";
            dem=1;
            html+=`
                <div class="item scroll-display-none scroll-display">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.category}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.icon}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="overlay"></div>
                        <div class="cate-price">
                            <div class="category">
                                <i class="${item.icon}"></i>
                                <span>${item.category}</span>
                            </div>
                            <div class="price">${item.price}$</div>
                        </div>
                    </div>
                    <div class="title">
                        <div class="text">
                            <h2>${item.title}<b> RESTAURANT</b></h2>
                            <div class="evalual">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="wish"
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
            `;
        };
    });
    if (html!=""){
        girdRestaurant.push(html);
    };
    divDisplayGird.innerHTML=girdRestaurant[stt];
    divRestaurantNumber.innerHTML=stt+1;
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
            location.href="item.html"
        })
    })
    const buttonWish=document.querySelectorAll(".wish");
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


// ------map-----
divButtonMapRestaurant.addEventListener("click",()=>{
    document.querySelector("#mapRestaurant").classList.toggle("map-tour-none");
})

// -------thay display----
document.querySelector("#girdRestaurant").addEventListener("click",()=>{
    divDisplayGird.style.display="flex";
    divDisplayList.style.display="none";
})
document.querySelector("#listRestaurant").addEventListener("click",()=>{
    divDisplayGird.style.display="none";
    divDisplayList.style.display="block";
})

// ------next && previous---

divRestaurantPre.addEventListener("click",async ()=>{
    if(stt>0){
        stt--;
        displayGird(await arrangeApi(urlRestaurant,sortList));
        displayList(await arrangeApi(urlRestaurant,sortList));
    }
});
divRestaurantNext.addEventListener("click",async ()=>{
    if(stt<listRestaurant.length-1){
        stt++;
        displayGird(await arrangeApi(urlRestaurant,sortList));
        displayList(await arrangeApi(urlRestaurant,sortList));
    }
});


// ---trạng thái---
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

