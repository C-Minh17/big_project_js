import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divFilterHotel} from "/asset/javascript/var.js"
import {divSettingHotel} from "/asset/javascript/var.js"
import {divDisplayList} from "/asset/javascript/var.js"
import {divButtonMapHotel} from "/asset/javascript/var.js"
import {divDisplayGird} from "/asset/javascript/var.js"
import {divHotelPre} from "/asset/javascript/var.js"
import {divHotelNumber} from "/asset/javascript/var.js"
import {divHotelNext} from "/asset/javascript/var.js"
import {divHotelSort} from "/asset/javascript/var.js"





import {dataApi} from "/asset/javascript/fetchApi.js"

let urlHotel="https://project-api-ptit.vercel.app/api";


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

divSettingHotel.addEventListener("click",()=>{
    divFilterHotel.classList.toggle("filters-none")
})   

let listHotel=[];
let stt=0;
async function displayList(url){
    listHotel=[];
    let html="";
    let dem=0;
    let api=await dataApi(url);
    api.hotels.forEach(item=>{
        if (dem<6){
            html+=`
                <div class="item scroll-display-none">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.type}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.point}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="wish"><i class="fa-solid fa-heart"></i></div>
                        <div class="overlay"></div>
                        <div class="category">
                            <span class="eva">${item.point}</span>
                            <span>${item.type}</span>
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
                        <div class="title"><b>${item.title}</b> HOTEL</div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-solid fa-wifi"></i></div>
                            <div><i class="fa-solid fa-tv"></i></div>
                            <div><i class="fa-solid fa-person-swimming"></i></div>
                            <div><i class="fa-solid fa-dumbbell"></i></div>
                            <div><i class="fa-solid fa-utensils"></i></div>
                        </div>
                    </div>
                    <div class="price">
                        <p>${item.price}</p>
                        <div data-id="${item.id}"
                            data-img="${item.img}"
                            data-category="${item.type}"
                            data-content="${item.content}"
                            data-title="${item.title}"
                            data-price="${item.price}"
                            data-icon="${item.point}"
                         class="button-one bt-item">details</div>
                    </div>
                </div>
            `;
            dem++;
        }else{
            listHotel.push(html);
            html="";
            dem=1;
            html+=`
                <div class="item scroll-display-none">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.type}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.point}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="wish"><i class="fa-solid fa-heart"></i></div>
                        <div class="overlay"></div>
                        <div class="category">
                            <span class="eva">${item.point}</span>
                            <span>${item.type}</span>
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
                        <div class="title"><b>${item.title}</b> HOTEL</div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-solid fa-wifi"></i></div>
                            <div><i class="fa-solid fa-tv"></i></div>
                            <div><i class="fa-solid fa-person-swimming"></i></div>
                            <div><i class="fa-solid fa-dumbbell"></i></div>
                            <div><i class="fa-solid fa-utensils"></i></div>
                        </div>
                    </div>
                    <div class="price">
                        <p>${item.price}</p>
                        <div data-id="${item.id}"
                            data-img="${item.img}"
                            data-category="${item.type}"
                            data-content="${item.content}"
                            data-title="${item.title}"
                            data-price="${item.price}"
                            data-icon="${item.point}"
                         class="button-one bt-item">details</div>
                    </div>
                </div>
            `;
        };
    });
    if (html!=""){
        listHotel.push(html);
    };
    divDisplayList.innerHTML=listHotel[stt];
    divHotelNumber.innerHTML=stt+1;
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
    // ----scroll display----
    const divItem=document.querySelectorAll(".scroll-display-none");

    const observer=new IntersectionObserver(entries=>{
        entries.forEach(item=>{
            if (item.isIntersecting){
                item.target.classList.add("scroll-display");
                observer.unobserve(item.target);
            }
        });
    },{
        threshold:0.1
    });

    divItem.forEach(item=>{
        observer.observe(item)
    });
};
displayList(urlHotel)


let girdHotel=[];
async function displayGird(url){
    girdHotel=[];
    let html="";
    let dem=0;
    let api=await dataApi(url);
    api.hotels.forEach(item=>{
        if (dem<6){
            html+=`
                <div class="item scroll-display-none">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.type}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.point}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="overlay"></div>
                        <div class="cate-price">
                            <div class="category">
                                <span class="eva">${item.point}</span>
                                <span>${item.type}</span>
                            </div>
                            <div class="price">${item.price}</div>
                        </div>
                    </div>
                    <div class="title">
                        <div class="text">
                            <h2>${item.title}<b> HOTEL</b></h2>
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
            `;
            dem++;
        }else{
            girdHotel.push(html);
            html="";
            dem=1;
            html+=`
                <div class="item scroll-display-none">
                    <div data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.type}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.point}"
                     class="img bt-item">
                        <img src="${item.img}">
                        <div class="top">${item.top}</div>
                        <div class="overlay"></div>
                        <div class="cate-price">
                            <div class="category">
                                <span class="eva">${item.point}</span>
                                <span>${item.type}</span>
                            </div>
                            <div class="price">${item.price}</div>
                        </div>
                    </div>
                    <div class="title">
                        <div class="text">
                            <h2>${item.title}<b> HOTEL</b></h2>
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
            `;
        };
    });
    if (html!=""){
        girdHotel.push(html);
    };
    divDisplayGird.innerHTML=girdHotel[stt];
    divHotelNumber.innerHTML=stt+1;
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
    // ----scroll display----
    const divItem=document.querySelectorAll(".scroll-display-none");

    const observer=new IntersectionObserver(entries=>{
        entries.forEach(item=>{
            if (item.isIntersecting){
                item.target.classList.add("scroll-display");
                observer.unobserve(item.target);
            }
        });
    },{
        threshold:0.1
    });

    divItem.forEach(item=>{
        observer.observe(item)
    });
};
displayGird(urlHotel);



// ------map-----
divButtonMapHotel.addEventListener("click",()=>{
    document.querySelector("#mapHotel").classList.toggle("map-tour-none");
})

// -------thay display----
document.querySelector("#girdHotel").addEventListener("click",()=>{
    divDisplayGird.style.display="flex";
    divDisplayList.style.display="none";
})
document.querySelector("#listHotel").addEventListener("click",()=>{
    divDisplayGird.style.display="none";
    divDisplayList.style.display="block";
})

// ------next && previous---

divHotelPre.addEventListener("click",()=>{
    if(stt>0){
        stt--;
        displayGird(urlHotel);
        displayList(urlHotel);
    }
});
divHotelNext.addEventListener("click",()=>{
    if(stt<listHotel.length-1){
        stt++;
        displayGird(urlHotel);
        displayList(urlHotel);
    }
});

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
// ------sort item----
// divTourSort.addEventListener("change",()=>{
//     stt=0;
//     if (divTourSort.value=="price (↑)"){
//         urlTour="https://api-project-js.vercel.app/api?sortBy=price&order=asc";
//     }else if (divTourSort.value=="price (↓)"){
//         urlTour="https://api-project-js.vercel.app/api?sortBy=price&order=desc";
//     }else{
//         urlTour="https://api-project-js.vercel.app/api";
//     }
//     displayGird(urlTour);
//     displayList(urlTour);
// })

document.querySelector("header .extra .cart").addEventListener("click",()=>{
    if (localStorage.getItem("status") == 1){
        location.href="/pages/history.html"
    }else{
        alert("Vui lòng đăng nhập để xem lịch sử booking")
    }
})

