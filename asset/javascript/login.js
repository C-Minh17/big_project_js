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


const upName=document.querySelector("#signUpName");
const upEmail=document.querySelector("#signUpEmail");
const upPhone=document.querySelector("#signUpPhone");
const upPass=document.querySelector("#signUpPass");
const upAlert=document.querySelector("#alertSignUp");
const inName=document.querySelector("#signInName");
const inAlert=document.querySelector("#alertSignIn");
const inPass=document.querySelector("#signInPass");



let listAccount=[{userName: "admin", email: "admin@gmail.com", phone: "0999999999", password: "admin1234"}];
class infoSignUp{
    constructor(name,email,phone,password){
        this.userName=name;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
};
if(JSON.parse(localStorage.getItem("listAccount"))!=null){
    listAccount=listAccount.concat(JSON.parse(localStorage.getItem("listAccount")));
};
function ktraAccount(){
    for (let item of listAccount){
        if (upName.value==item.userName || upEmail.value==item.email || upPhone.value==item.phone ){
            return false
        }
    };
    return true
};
function ktraSignIn(){
    for (let item of listAccount){
        if (inName.value==item.userName && inPass.value==item.password){
            return true
        }
    };
    return false
};
function resetValueUp(){
    upName.value="";
    upEmail.value="";
    upPhone.value="";
    upPass.value="";
}

document.querySelector("#upSignUp").addEventListener("click",()=>{
    if (upName.value=="" || upEmail.value=="" || upPhone.value=="" || upPass.value==""){
        upAlert.innerHTML="Vui lòng nhập đầy đủ thông tin yêu cầu"
    }else{
        if(ktraAccount()){
            listAccount.push(new infoSignUp(upName.value,upEmail.value,upPhone.value,upPass.value));
            localStorage.listAccount=JSON.stringify(listAccount);
            upAlert.innerHTML="Đăng kí thành công";
            resetValueUp();
        }else{
            upAlert.innerHTML="Tài khoản đã tồn tại";
        }
        
    }
})

document.querySelector("#signIn").addEventListener("click",()=>{
    if(ktraSignIn()){
        localStorage.status=1;
        localStorage.nameUser=inName.value;
        location.href="/index.html"
    }else{
        inAlert.innerHTML="Tài khoản hoặc mật khẩu không chính xác !!"
    }
})


document.querySelector("header .extra .cart").addEventListener("click",()=>{
    if (localStorage.getItem("status") == 1){
        location.href="/pages/history.html"
    }else{
        alert("Vui lòng đăng nhập để xem lịch sử booking")
    }
})



