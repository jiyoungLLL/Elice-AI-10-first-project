import { addEdu } from './personal/addEdu.js';
import { addAward } from './personal/addAward.js';
import { addProject } from './personal/addProject.js';
import { addCertificate } from './personal/addCertificate.js';
import { fetchMypageData } from './personal/fetchMypage.js';
import { pageLoad } from './personal/pageLoad.js';
import { changePhoto } from './personal/changePhoto.js';
import { emptyTapTest } from './personal/emptyTapTest.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchMypageData();

  emptyTapTest();

  pageLoad('addEdu', addEdu, 'addDiv0', 'emptyMsg0');
  pageLoad('addAward', addAward, 'addDiv1', 'emptyMsg1');
  pageLoad('addProject', addProject, 'addDiv2', 'emptyMsg2');
  pageLoad('addCertificate', addCertificate, 'addDiv3', 'emptyMsg3');

  // 사진 제출 폼 이벤트 리스너
  const form = document.getElementById('photoForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    changePhoto('photoForm');
    location.reload();
  });

  // Create the 아이디/비밀번호 변경 button element
  const resetButton = document.querySelector('.reset_info');
  resetButton.addEventListener('click', () => {
    window.location.href = '/reset';
  });
});
