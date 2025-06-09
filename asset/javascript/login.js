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

let listAccount=[];
class infoSignUp{
    constructor(name,email,phone,password){
        this.userName=name;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
};
listAccount.push(new infoSignUp("admin","admin@gmail.com","0999999999","admin123"))
listAccount.concat(JSON.parse(localStorage.getItem("listAccount")));
function ktraAccount(){
    for (item of listAccount){
        if (upName.value==item.userName || upEmail.value==item.email || upPhone.value==item.phone || upPass.value==item.password){
            return false
        }
    };
    return true
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
        if(ktraAccount){
            console.log(listAccount);
            listAccount.push(new infoSignUp(upName.value,upEmail.value,upPhone.value,upPass.value));
            localStorage.listAccount=JSON.stringify(listAccount);
            upAlert.innerHTML="Đăng kí thành công";
            resetValueUp();
        }else{
            upAlert.innerHTML="Tài khoản đã tồn tại";
        }
        
    }
})
