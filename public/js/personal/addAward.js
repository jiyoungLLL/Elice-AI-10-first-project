import { createButton } from './createInput/createButton.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';
import { postData } from './postData.js';
import { validateForm } from './validateForm.js';

export function addAward(num) {
  const div = document.getElementById('addDiv1');

  const form = document.createElement('form');
  form.id = `awardForm${num}`;
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/award`;

  createTextInput(div, form, 'content', '수상 내용');

  createTextInput(div, form, 'organization', '시상 단체');

  createDateInput(div, form, '수상 일자', 'date');

  createButton(div, form, 'award', form.id);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 필수 입력값 검사
    const isValid = validateForm(form);

    if (isValid) {
      postData(form.id, 'addedAward', 'award');
      const formToDelete = document.getElementById(`${form.id}`);
      formToDelete.parentNode.removeChild(formToDelete);
    }
  });

  div.appendChild(form);
}
