import {divHeader} from "/asset/javascript/var.js"
import {divNavBar} from "/asset/javascript/var.js"
import {divMenu} from "/asset/javascript/var.js"
import {divButtonMapTour} from "/asset/javascript/var.js"



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

// ---display history----
const listHistory=document.querySelector("#listHistory")
let list=JSON.parse(localStorage.getItem("listHistory"))
console.log(list)

let html=""
list.forEach(element => {
    if (element.name == localStorage.getItem("nameUser")){
        html+=`
            <ul>
                <li>${element.id}</li>
                <li>
                    <p>${element.date}</p>
                    <p>${element.time}</p>
                </li>
                <li>${element.adults}</li>
                <li>${element.children}</li>
                <li>${element.totalCost}$</li>
                <li style="color:green">Đã thanh toán</li>
            </ul>
        `
    }
});
listHistory.innerHTML=html













