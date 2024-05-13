import { createButton } from './createInput/createButton.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createTextInput } from './createInput/createTextInput.js';
import { baseUrl } from '../core/networkManager.js';
import { postData } from './postData.js';
import { validateForm } from './validateForm.js';

// 프로젝트
export function addProject(num) {
  const div = document.getElementById('addDiv2');

  const form = document.createElement('form');
  form.id = `projectForm${num}`;
  form.method = 'POST';
  form.action = `${baseUrl}/mypage/project`;

  createTextInput(div, form, 'title', '프로젝트명');

  createDateInput(div, form, '프로젝트 기간', 'startDate', '~');

  createTextInput(div, form, 'role', '역할');

  createButton(div, form, 'project', form.id);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 필수 입력값 검사
    const isValid = validateForm(form);

    if (isValid) {
      postData(form.id, 'addedProject', 'project');
      const formToDelete = document.getElementById(`${form.id}`);
      formToDelete.parentNode.removeChild(formToDelete);
    }
  });
  div.appendChild(form);
}
