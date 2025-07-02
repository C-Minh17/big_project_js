import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divFilterTour} from "/asset/javascript/var.js"
import {divSettingTour} from "/asset/javascript/var.js"
import {divDisplayList} from "/asset/javascript/var.js"
import {divButtonMapTour} from "/asset/javascript/var.js"
import {divDisplayGird} from "/asset/javascript/var.js"
import {divTourPre} from "/asset/javascript/var.js"
import {divTourNumber} from "/asset/javascript/var.js"
import {divTourNext} from "/asset/javascript/var.js"
import {divTourSort} from "/asset/javascript/var.js"





import {dataApi} from "/asset/javascript/fetchApi.js"

let urlTour="https://project-api-ptit.vercel.app/api";


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

divSettingTour.addEventListener("click",()=>{
    divFilterTour.classList.toggle("filters-none")
})

let listTour=[];
let stt=0;
async function displayList(url){
    listTour=[];
    let html="";
    let dem=0;
    let api=await dataApi(url);
    api.tours.forEach(item=>{
        if (dem<6){
            html+=`
                <div class="item scroll-display-none">
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
                        <div class="wish"><i class="fa-solid fa-heart"></i></div>
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
                        <div class="title"><b>${item.title}</b> TOUR</div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-solid fa-clock"></i></div>
                            <div><i class="fa-solid fa-map-location-dot"></i></div>
                            <div><i class="fa-solid fa-bullhorn"></i></div>
                            <div><i class="fa-solid fa-car"></i></div>
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
            dem++;
            
        }else{
            listTour.push(html);
            html="";
            dem=1;
            html+=`
                <div class="item scroll-display-none">
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
                        <div class="wish"><i class="fa-solid fa-heart"></i></div>
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
                        <div class="title"><b>${item.title}</b> TOUR</div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-solid fa-clock"></i></div>
                            <div><i class="fa-solid fa-map-location-dot"></i></div>
                            <div><i class="fa-solid fa-bullhorn"></i></div>
                            <div><i class="fa-solid fa-car"></i></div>
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
        listTour.push(html);
    };
    divDisplayList.innerHTML=listTour[stt];
    divTourNumber.innerHTML=stt+1;
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
displayList(urlTour)


let girdTour=[];
async function displayGird(url){
    girdTour=[];
    let html="";
    let dem=0;
    let api=await dataApi(url);
    api.tours.forEach(item=>{
        if (dem<6){
            html+=`
                <div class="item scroll-display-none">
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
            girdTour.push(html);
            html="";
            dem=1;
            html+=`
                <div class="item scroll-display-none">
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
        girdTour.push(html);
    };
    divDisplayGird.innerHTML=girdTour[stt];
    divTourNumber.innerHTML=stt+1;
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
displayGird(urlTour);



// ------map-----
divButtonMapTour.addEventListener("click",()=>{
    document.querySelector("#mapTour").classList.toggle("map-tour-none");
})

// -------thay display----
document.querySelector("#girdTour").addEventListener("click",()=>{
    divDisplayGird.style.display="flex";
    divDisplayList.style.display="none";
})
document.querySelector("#listTour").addEventListener("click",()=>{
    divDisplayGird.style.display="none";
    divDisplayList.style.display="block";
})

// ------next && previous---

divTourPre.addEventListener("click",()=>{
    if(stt>0){
        stt--;
        displayGird(urlTour);
        displayList(urlTour);
    }
});
divTourNext.addEventListener("click",()=>{
    if(stt<listTour.length-1){
        stt++;
        displayGird(urlTour);
        displayList(urlTour);
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

