// 사용자 정보로 넘어오는 userId 필요
// 받아온 userId에 해당하는 mypage 정보 받아와서 개인페이지 로딩
import { baseUrl } from '../core/networkManager.js';
import { newInfo } from './newInfo.js';
import { emptyTapTest } from './emptyTapTest.js';

export function fetchMypageData() {
  fetch(`${baseUrl}/mypage`, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // 빈탭 알림 문구 모두 지우기
      for (let i = 0; i < 4; i++) {
        const addDiv = document.getElementsByClassName('add')[i];
        while (addDiv.firstChild) {
          addDiv.removeChild(addDiv.firstChild);
        }
      }

      const userName = document.getElementById('user_name');
      userName.textContent = data.userName;

      const userEmail = document.getElementById('user_email');
      userEmail.textContent = data.userEmail;

      const school = data.education;
      const award = data.award;
      const certification = data.certificate;
      const project = data.project;

      const userProfilePic=document.getElementById('profile_img')
      const profilePic=data.profilePic;
      userProfilePic.src=profilePic;

      // 기존 데이터 찾기
      function newAllData(data, addedName, info) {
        data.forEach((item) => {
          newInfo(item, addedName, info);
        });
      }

      newAllData(school, 'addedEducation', 'education');
      newAllData(award, 'addedAward', 'award');
      newAllData(certification, 'addedCertificate', 'certification');
      newAllData(project, 'addedProject', 'project');

      emptyTapTest();
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
}
