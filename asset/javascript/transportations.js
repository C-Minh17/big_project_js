import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divFilterTransportation} from "/asset/javascript/var.js"
import {divSettingTransportation} from "/asset/javascript/var.js"
import {divDisplayList} from "/asset/javascript/var.js"
import {divButtonMapTransportation} from "/asset/javascript/var.js"
import {divDisplayGird} from "/asset/javascript/var.js"
import {divTransportationPre} from "/asset/javascript/var.js"
import {divTransportationNumber} from "/asset/javascript/var.js"
import {divTransportationNext} from "/asset/javascript/var.js"
import {divTransportationSort} from "/asset/javascript/var.js"





import {dataApi} from "/asset/javascript/fetchApi.js"

let urlTransportation="https://project-api-ptit.vercel.app/api";


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

divSettingTransportation.addEventListener("click",()=>{
    divFilterTransportation.classList.toggle("filters-none")
})

// ---lists touur--
async function arrangeApi(url,i){
    let listApiArrange=[]
    const api=await dataApi(url)
    const apiTransportation=api.Transportations
    if (i == 1){
        listApiArrange=apiTransportation.slice().sort((a,b) => a.price - b.price)
    }else if (i == 0){
        listApiArrange=apiTransportation.slice().sort((a,b) => b.price - a.price)
    }else{
        listApiArrange=apiTransportation
    }
    return listApiArrange
}

let sortList=2
document.addEventListener("DOMContentLoaded",async ()=>{
    displayList(await arrangeApi(urlTransportation,sortList))

    displayGird(await arrangeApi(urlTransportation,sortList));

})

// ------sort item----
divTransportationSort.addEventListener("change",async ()=>{
    stt=0;
    if (divTransportationSort.value=="price (↑)"){
        sortList=1;
    }else if (divTransportationSort.value=="price (↓)"){
        sortList=0;
    }else{
        sortList=2;
    }
    displayList(await arrangeApi(urlTransportation,sortList))
    displayGird(await arrangeApi(urlTransportation,sortList))
})


let listTransportation=[];
let stt=0;
async function displayList(listApi){
    listTransportation=[];
    let html="";
    let dem=0;
    listApi.forEach(item=>{
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
                        <div class="title"><b>${item.title}</b></div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-regular fa-user"></i></div>
                            <div><i class="fa-solid fa-hotel"></i></div>
                            <div><i class="fa-solid fa-wheelchair-move"></i></div>
                            <div><i class="fa-solid fa-dog"></i></div>
                            <div><i class="fa-solid fa-suitcase-rolling"></i></div>
                        </div>
                    </div>
                    <div class="price">
                        <p>${item.price}$</p>
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
            listTransportation.push(html);
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
                        <div class="title"><b>${item.title}</b></div>
                        <div class="text">${item.text}</div>
                        <div class="icon">
                            <div><i class="fa-regular fa-user"></i></div>
                            <div><i class="fa-solid fa-hotel"></i></div>
                            <div><i class="fa-solid fa-wheelchair-move"></i></div>
                            <div><i class="fa-solid fa-dog"></i></div>
                            <div><i class="fa-solid fa-suitcase-rolling"></i></div>
                        </div>
                    </div>
                    <div class="price">
                        <p>${item.price}$</p>
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
        listTransportation.push(html);
    };
    divDisplayList.innerHTML=listTransportation[stt];
    divTransportationNumber.innerHTML=stt+1;
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


let girdTransportation=[];
async function displayGird(listApi){
    girdTransportation=[];
    let html="";
    let dem=0;
    listApi.forEach(item=>{
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
                            <div class="price">${item.price}$</div>
                        </div>
                    </div>
                    <div class="title">
                        <div class="text">
                            <h2>${item.title}</h2>
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
            girdTransportation.push(html);
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
                            <div class="price">${item.price}$</div>
                        </div>
                    </div>
                    <div class="title">
                        <div class="text">
                            <h2>${item.title}</h2>
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
        girdTransportation.push(html);
    };
    divDisplayGird.innerHTML=girdTransportation[stt];
    divTransportationNumber.innerHTML=stt+1;
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



// ------map-----
divButtonMapTransportation.addEventListener("click",()=>{
    document.querySelector("#mapTransportation").classList.toggle("map-tour-none");
})

// -------thay display----
document.querySelector("#girdTransportation").addEventListener("click",()=>{
    divDisplayGird.style.display="flex";
    divDisplayList.style.display="none";
})
document.querySelector("#listTransportation").addEventListener("click",()=>{
    divDisplayGird.style.display="none";
    divDisplayList.style.display="block";
})

// ------next && previous---

divTransportationPre.addEventListener("click",async ()=>{
    if(stt>0){
        stt--;
        displayGird(await arrangeApi(urlTransportation,sortList));
        displayList(await arrangeApi(urlTransportation,sortList));
    }
});
divTransportationNext.addEventListener("click",async ()=>{
    if(stt<listTransportation.length-1){
        stt++;
        displayGird(await arrangeApi(urlTransportation,sortList));
        displayList(await arrangeApi(urlTransportation,sortList));
    }
});


// ----trạng thái ---
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

