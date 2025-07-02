import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divButtonMapTour} from "/asset/javascript/var.js"

const bookDate=document.getElementById("bookDate")
const bookTime=document.getElementById("bookTime")
const adults=document.getElementById("adults")
const children=document.getElementById("children")

const displayAdults=document.getElementById("displayAdults")
const displayChildren=document.getElementById("displayChildren")
const displayTotalAmount=document.getElementById("displayTotalAmount")
const displayTotalCost=document.getElementById("displayTotalCost")




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

// ------map-----
divButtonMapTour.addEventListener("click",()=>{
    document.querySelector("#mapTour").classList.toggle("map-tour-none");
})

// -----content----
const boxItem=document.getElementById("infoItem");
const boxHomeTitle=document.querySelector(".item-home .title");
const boxHomePrice=document.querySelector(".item-home .price");
const boxHomeImg=document.querySelector(".item-home-img");

const dataItem=JSON.parse(localStorage.getItem("infoItem"))


boxItem.innerHTML=`
    <h3 class="title">${dataItem.title}</h3>
    <div class="category">${dataItem.category}</div>
    <div class="evalual">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
    <h5>Mô tả</h5>
    <p class="content">${dataItem.content}</p>
    <div class="img-item"><img src="${dataItem.img}"></div>
`
boxHomeTitle.innerHTML=`
    <h1>${dataItem.title} TOUR</h1>
    <p><i class="${dataItem.icon}"></i> ${dataItem.category}</p>
`

boxHomePrice.innerHTML=`${dataItem.price}$`

boxHomeImg.style.backgroundImage = `url("${dataItem.img}")`;


function updateUI(){
    const price=parseInt(dataItem.price)
    const adultsNumber=parseInt(adults.value) || 0
    const childrenNumber=parseInt(children.value) || 0
    displayAdults.textContent=adultsNumber
    displayChildren.textContent=childrenNumber
    displayTotalAmount.textContent=adultsNumber + childrenNumber
    displayTotalCost.textContent=adultsNumber*price + childrenNumber*(price/2)
}
updateUI()

adults.addEventListener("change",()=>{
    if (parseInt(adults.value)<0){
        adults.value="0"
    }
    updateUI()
})
children.addEventListener("change",()=>{
    if (parseInt(children.value)<0){
        children.value="0"
    }
    updateUI()
})


// -----history----
let listHistory=JSON.parse(localStorage.getItem("listHistory")) || []
const bookNow=document.getElementById("bookNow")
const payNow=document.getElementById("payNow")
bookNow.addEventListener("click",()=>{
    if (localStorage.getItem("status") == 1){
        if (bookDate.value && bookTime.value && adults.value && children.value){
            document.querySelector(".info-booking").style.display="none"
            document.querySelector(".info-pay").style.display="flex"
        }else{
            document.getElementById("errorBooking").textContent="Vui lòng nhập đầy đủ thông tin"
        }
    }else{
        alert("Vui lòng đăng nhập trước khi thanh toán")
    }    
})
payNow.addEventListener("click",()=>{
    let item={
        id:dataItem.id,
        time:bookTime.value,
        date:bookDate.value,
        adults:adults.value,
        children:children.value,
        name:localStorage.getItem("nameUser"),
        totalCost:parseInt(adults.value) * parseInt(dataItem.price) + parseInt(children.value) *(parseInt(dataItem.price) / 2)
    }
    document.querySelector(".bt-pay").style.display="none"
    document.querySelector(".waiting-pay").style.display="block"
    setTimeout(()=>{
        listHistory.push(item)
        localStorage.setItem("listHistory",JSON.stringify(listHistory))
        alert("Chúc mừng bạn đã thanh toán thành công")
        document.getElementById("errorBooking").textContent=""
        bookTime.value=""
        bookDate.value=""
        adults.value=""
        children.value=""
        location.href="./history.html"
    },3000)
})
document.querySelector(".bt-back").addEventListener("click",()=>{
    document.querySelector(".info-booking").style.display="block"
    document.querySelector(".info-pay").style.display="none"
})

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