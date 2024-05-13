import {baseUrl} from './core/networkManager.js';
let button = document.querySelector(".user_pic")
let user_pic = document.querySelector(".user_pic")
let user_info_img = document.querySelector("#user_info_img")
let user_info_name = document.querySelector("#user_info_name")
let user_info_email = document.querySelector("#user_info_email")
let anywhere = document.querySelector("html");

let user_img;
let user_name="이름";
let user_email="email.com";

let subMenu = document.getElementById("subMenu");
let navbar_profile = document.querySelector(".navbar_profile")
function toggleMenu(){
    if(subMenu.className === "sub_menu_wrap"){
    setTimeout(() => {
    subMenu.classList.toggle("open_menu");
    navbar_profile.classList.toggle("open_menu");
    }, 1)
    }
}
function toggleDownMenu(){
    if(subMenu.className === "sub_menu_wrap open_menu") {
        subMenu.classList.remove("open_menu");
        navbar_profile.classList.remove("open_menu");
    }
}
anywhere.onclick = toggleDownMenu;
button.onclick = toggleMenu;


const fetchHead = async () => {
    const res = await fetch(`${baseUrl}/mypage`);
    const datas = await res.json();
    user_img=datas.profilePic; //유저 프로필사진의 src 불러오기
    user_name=datas.userName;
    user_email=datas.userEmail;

    if(user_img) {
        user_pic.src = user_img;
        user_info_img.src = user_img; 
    }
    user_info_name.innerText = user_name;
    user_info_email.innerText = user_email;
};

// window.onload = fetchHead();
// window.onload(fetchHead())
window.addEventListener("load", fetchHead)