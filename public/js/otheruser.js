// 자격증
import {baseUrl} from './core/networkManager.js';
const education_list = document.querySelector("#education_list");
const award_list = document.querySelector("#award_list");
const project_list = document.querySelector("#project_list");
const certificate_list = document.querySelector("#license_list");
const title = document.querySelector("title");
const user_name = document.querySelector("#user_name");
const user_email = document.querySelector("#user_email");
const profilePhoto = document.getElementById("profile_img"); //프로필 사진 불러오기


const url = new URL(window.location.href)
const userId = url.pathname.slice(11)


const fetchData = async () => {
    const res = await fetch(`${baseUrl}/posts/${userId}`);
    const datas = await res.json();

    let profilePic=datas.profilePic; //유저 프로필사진의 src 불러오기

    let edu_data = datas.education;
    let award_data = datas.award;
    let project_data = datas.project;
    let certificate_data = datas.certificate;
    user_name.innerHTML = datas.userName;
    user_email.innerHTML = datas.userEmail;
    let edu_output = "";
    let award_output = "";
    let project_output = "";
    let certificate_output = "";


    edu_data.forEach((data) => {
        edu_output = edu_output + `<li>${data.school} | ${data.major} | ${data.degree}</li> `;
    });
    award_data.forEach((data) => {
        award_output = award_output + `<li>${data.content} | ${data.organization} | ${data.date.slice(0,10)}</li> `;
    });
    project_data.forEach((data) => {
        project_output = project_output + `<li>${data.title} | ${data.startDate.slice(0,10)} ~ ${data.endDate.slice(0,10)} | ${data.role}</li> `;
    });
    certificate_data.forEach((data) => {
        certificate_output = certificate_output + `<li>${data.type} | ${data.authority} | ${data.date.slice(0,10)}</li> `;
    });
    if(profilePic) {
        profilePhoto.src=profilePic; //프로필사진의 src 교체하기
    }
    if (edu_output) {
        education_list.innerHTML = edu_output;
    } else {
        education_list.innerHTML = "등록된 학력 사항이 없습니다.";
    }
    if (award_output) {
        award_list.innerHTML = award_output;
    } else {
        award_list.innerHTML = "등록된 수상 내역이 없습니다.";
    }
    if (project_output) {
        project_list.innerHTML = project_output;
    } else {
        project_list.innerHTML = "등록된 프로젝트가 없습니다.";
    }
    if (certificate_output) {
        certificate_list.innerHTML = certificate_output;
    } else {
        certificate_list.innerHTML = "등록된 자격 사항이 없습니다.";
    }
    title.innerHTML = `${datas.userName} - Portgram`
};
fetchData()