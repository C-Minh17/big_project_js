const btWishList=document.getElementById("wishListAll")
const btCloseWishList=document.getElementById("closeWishList")
const BoxWish=document.getElementById("popupWish")



btWishList.addEventListener("click",()=>{
    if (localStorage.getItem("status") == 0 ){
        alert("Vui lòng đăng nhập")
        return
    }
    document.querySelector(".overlay-wishlist").classList.add("hidden-overlay")
    document.querySelector(".popup-wish").classList.add("hidden-popup")
})
btCloseWishList.addEventListener("click",()=>{
    document.querySelector(".overlay-wishlist").classList.remove("hidden-overlay")
    document.querySelector(".popup-wish").classList.remove("hidden-popup")
})

document.querySelector(".overlay-wishlist").addEventListener("click",()=>{
    document.querySelector(".overlay-wishlist").classList.remove("hidden-overlay")
    document.querySelector(".popup-wish").classList.remove("hidden-popup")
})

export function wishUI(){
    let listLocal=JSON.parse(localStorage.getItem("AllListWish")) || []
    let html=""
    let listNewOne=[]
    let listNewTwo=[]
    listLocal.forEach(item => {
        if (item.name == localStorage.getItem("nameUser")){
            listNewOne.push(item)
            html+=`
                <div class="popup-element-wish">
                    <div class="box-wish"
                        data-id="${item.id}" 
                        data-img="${item.img}"
                        data-category="${item.category}"
                        data-content="${item.content}"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-icon="${item.icon}">
                        <div class="img"><img src="${item.img}"></div>
                        <div class="title">
                            <h3>${item.title}</h3>
                            <p>${item.category}</p>
                        </div>
                        <div class="price">${item.price}$</div>
                    </div>
                    <div class="delete-wish"><i class="fa-solid fa-minus"></i></div>
                </div>
            `
        }else{
            listNewTwo.push(item)
        }
    })
    BoxWish.innerHTML=html
    document.querySelectorAll(".delete-wish").forEach((item,i) => {
        item.addEventListener("click",()=>{
            listNewOne.splice(i,1)
            localStorage.setItem("AllListWish",JSON.stringify(listNewOne.concat(listNewTwo)))
            wishUI()
        })
    })
    document.querySelectorAll(".box-wish").forEach(element => {
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
}
wishUI()





