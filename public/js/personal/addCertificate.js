import { createButton } from './createInput/createButton.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';
import { postData } from './postData.js';
import { validateForm } from './validateForm.js';

// 자격증
export function addCertificate(num) {
  const div = document.getElementById('addDiv3');
  const form = document.createElement('form');
  form.id = `certificateForm${num}`;
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/certification`;

  createTextInput(div, form, 'type', '자격 종류');
  // 취득 일자
  createDateInput(div, form, '발급 일자', 'date');
  // 발급 기관
  createTextInput(div, form, 'authority', '발급 기관');
  // 버튼
  createButton(div, form, 'certificate', form.id);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 필수 입력값 검사
    const isValid = validateForm(form);

    if (isValid) {
      postData(form.id, 'addedCertificate', 'certification');
      const formToDelete = document.getElementById(`${form.id}`);
      formToDelete.parentNode.removeChild(formToDelete);
    }
  });

  div.appendChild(form);
}
