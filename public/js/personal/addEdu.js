import { createButton } from './createInput/createButton.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';
import { createRadioBtn } from './createInput/createRadioBtn.js';
import { postData } from './postData.js';
import { validateForm } from './validateForm.js';

export function addEdu(num) {
  const div = document.getElementById('addDiv0');
  const form = document.createElement('form');
  form.id = `educationForm${num}`;
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/education`;

  createTextInput(div, form, 'school', '학교 이름');
  createTextInput(div, form, 'major', '전공');
  createRadioBtn(div, form);

  // 확인, 취소 버튼
  createButton(div, form, 'education', form.id);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 필수 입력값 검사
    const isValid = validateForm(form);

    if (isValid) {
      postData(form.id, 'addedEducation', 'education');
      const formToDelete = document.getElementById(`${form.id}`);
      formToDelete.parentNode.removeChild(formToDelete);
    }
  });

  div.appendChild(form);
}
