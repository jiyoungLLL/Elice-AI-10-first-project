let header = document.createElement("Header")
let nav = document.createElement("nav");
nav.className = "navbar";

// <div class="navbar_Home"> 요소 생성
let navbar_Home = document.createElement("div");
navbar_Home.className = "navbar_Home";
let homeLink = document.createElement("a");
homeLink.href = "/networked";
let home_img = document.createElement("img");
home_img.id = "home_img"
home_img.src = "/img/portgram_title.png"
home_img.alt = "PORSHAW"
homeLink.appendChild(home_img)
navbar_Home.appendChild(homeLink);

// <div class="navbar_profile"> 요소 생성
let navbar_profile = document.createElement("div");
navbar_profile.className = "navbar_profile";
let user_pic = document.createElement("img");
user_pic.className = "user_pic"
// user_pic.onclick = toggleMenu()
user_pic.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAL0AyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAEH/8QALxABAAIBAgIIBAcBAAAAAAAAAAECAwQREjEUM0FSYXFyoSEyUbETIkKBkaLxY//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdcWS/y0mf2BAXdFzdz3hC2LJT5qTH7AgAAAAAAAAAAAAAAAAAAAAsxYrZbbVjzn6I46TkvFa85amLHXHSK1/0FeLTY8fZxW+srgAABTl02PJ2cNvrDhy4rYrbWjyn6tRHLjrkpNbf4DJEslJx3mtucIgAAAAAAAAAAAAAAAA7dBj2rOSec/CHWr00bYKR4brAAAAAAAcmvx71jJHOPhLiampjfBePDdlgAAAAAAAAAAAAAAAA1cE74aemE3Pob8WLh7ay6AAAAAAAQzzthv6ZZTQ11+HFw9tpZ4AAAAAAAAAAAAAAAALdPl/CyRbs5S04mJiJid4ljujTaicX5bfGn2BoDyl63jesxMPQAACZiImZnaIeXvWkb2mIhwajUTl/LX4U+4IajL+Lkm3ZyhUAAAAAAAAAAAAAAAAAAc1lcOW3Klv4BGl7UneszE+C+usyR80RZDoubue8HRc3c94Bd07/n/ZC2syT8sRVDoubue8HRc3c94BXe9rzvaZmfFFd0XN3PeEbYctedLfwCsOQAAAAAAAAAAAAAC7T4LZp35VjnIK6Utknakby7MWjrHxyTv4Q6KUrjrw1jaEgRpStI2rWI8kgAAAAAABG9K3ja1Ynzc+XR1n44528JdQDJvS2OdrxtKLWvSuSvDaN4Z+owWwzvzrPKQUgAAAAAAAA9iN52jnILNPhnLfb9Mc5aVaxWIisbRCGDHGLHFe3tWAAAAAAAAAAAAAPLVi0TFo3iXoDM1GGcN9v0zylU1M+OMuOa9vYzJjadp5wDwAAAAAB0aKnFl4p5V+7naGhrth370g6AAAAAAAAAAAAAAAAGfracOXijlb7tBz66u+HfuyDPAAAAAAamnjbBTyZbVw9Tj9MAmAAAAAAAAAAAAAAAAr1Eb4L+SxDN1N/TIMoAAAAABq4epx+mGU1cPU4/TAJgAAAAAAAAAAAAAAAIZupv6ZTQzdTf0yDKAAAB/9k="
user_pic.alt = "PORSHAW"
navbar_profile.appendChild(user_pic);

//<div class="sub_menu_wrap">
let sub_menu_wrap = document.createElement("div");
sub_menu_wrap.className = "sub_menu_wrap";
sub_menu_wrap.id = "subMenu";
let sub_menu = document.createElement("div");
sub_menu.className = "sub_menu";

//user_info
let user_info = document.createElement("div");
user_info.className = "user_info";
let user_info_img = document.createElement("img");
user_info_img.id = "user_info_img"
user_info_img.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAL0AyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAEH/8QALxABAAIBAgIIBAcBAAAAAAAAAAECAwQREjEUM0FSYXFyoSEyUbETIkKBkaLxY//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACdcWS/y0mf2BAXdFzdz3hC2LJT5qTH7AgAAAAAAAAAAAAAAAAAAAAsxYrZbbVjzn6I46TkvFa85amLHXHSK1/0FeLTY8fZxW+srgAABTl02PJ2cNvrDhy4rYrbWjyn6tRHLjrkpNbf4DJEslJx3mtucIgAAAAAAAAAAAAAAAA7dBj2rOSec/CHWr00bYKR4brAAAAAAAcmvx71jJHOPhLiampjfBePDdlgAAAAAAAAAAAAAAAA1cE74aemE3Pob8WLh7ay6AAAAAAAQzzthv6ZZTQ11+HFw9tpZ4AAAAAAAAAAAAAAAALdPl/CyRbs5S04mJiJid4ljujTaicX5bfGn2BoDyl63jesxMPQAACZiImZnaIeXvWkb2mIhwajUTl/LX4U+4IajL+Lkm3ZyhUAAAAAAAAAAAAAAAAAAc1lcOW3Klv4BGl7UneszE+C+usyR80RZDoubue8HRc3c94Bd07/n/ZC2syT8sRVDoubue8HRc3c94BXe9rzvaZmfFFd0XN3PeEbYctedLfwCsOQAAAAAAAAAAAAAC7T4LZp35VjnIK6Utknakby7MWjrHxyTv4Q6KUrjrw1jaEgRpStI2rWI8kgAAAAAABG9K3ja1Ynzc+XR1n44528JdQDJvS2OdrxtKLWvSuSvDaN4Z+owWwzvzrPKQUgAAAAAAAA9iN52jnILNPhnLfb9Mc5aVaxWIisbRCGDHGLHFe3tWAAAAAAAAAAAAAPLVi0TFo3iXoDM1GGcN9v0zylU1M+OMuOa9vYzJjadp5wDwAAAAAB0aKnFl4p5V+7naGhrth370g6AAAAAAAAAAAAAAAAGfracOXijlb7tBz66u+HfuyDPAAAAAAamnjbBTyZbVw9Tj9MAmAAAAAAAAAAAAAAAAr1Eb4L+SxDN1N/TIMoAAAAABq4epx+mGU1cPU4/TAJgAAAAAAAAAAAAAAAIZupv6ZTQzdTf0yDKAAAB/9k="
let user_info_name = document.createElement("p");
user_info_name.id = "user_info_name"
user_info_name.textContent = "name"
user_info.appendChild(user_info_img);
user_info.appendChild(user_info_name);
let user_info_email = document.createElement("p");
user_info_email.id = "user_info_email";
user_info_email.textContent = "email@naver.com"
user_info_email.style = "color:gray;font-size:small";
let hr =  document.createElement("hr");

//mypage
let sub_menu_link1 = document.createElement("a");
sub_menu_link1.className = "sub_menu_link";
sub_menu_link1.href = "/personal"
let my_page_icon = document.createElement("img");
my_page_icon.src = "/img/my_page_icon.png"
let my_page_p = document.createElement("p");
my_page_p.textContent = "마이페이지"
let my_page_span = document.createElement("span");
my_page_span.textContent = ">"
sub_menu_link1.appendChild(my_page_icon);
sub_menu_link1.appendChild(my_page_p);
sub_menu_link1.appendChild(my_page_span);

//network
let sub_menu_link2 = document.createElement("a");
sub_menu_link2.className = "sub_menu_link";
sub_menu_link2.href = "/networked"
let network_icon = document.createElement("img");
network_icon.src = "/img/network_icon.png"
let network_p = document.createElement("p");
network_p.textContent = "네트워크"
let network_span = document.createElement("span");
network_span.textContent = ">"
sub_menu_link2.appendChild(network_icon);
sub_menu_link2.appendChild(network_p);
sub_menu_link2.appendChild(network_span);

//logout
let sub_menu_link3 = document.createElement("a");
sub_menu_link3.className = "sub_menu_link";
sub_menu_link3.href = "/logout"
let logout_icon = document.createElement("img");
logout_icon.src = "/img/logout_icon.png"
let logout_p = document.createElement("p");
logout_p.textContent = "로그아웃"
let logout_span = document.createElement("span");
logout_span.textContent = ">"
sub_menu_link3.appendChild(logout_icon);
sub_menu_link3.appendChild(logout_p);
sub_menu_link3.appendChild(logout_span);

sub_menu.appendChild(user_info);
sub_menu.appendChild(user_info_email);
sub_menu.appendChild(hr);
sub_menu.appendChild(sub_menu_link1);
sub_menu.appendChild(sub_menu_link2);
sub_menu.appendChild(sub_menu_link3);

sub_menu_wrap.appendChild(sub_menu);

nav.appendChild(navbar_Home);
nav.appendChild(navbar_profile);
nav.appendChild(sub_menu_wrap);
// 생성된 요소들을 조립하여 새로운 <nav> 요소에 추가
header.appendChild(nav);


document.querySelector("#main").insertAdjacentElement("beforebegin", header);