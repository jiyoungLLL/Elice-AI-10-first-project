import { createTextInput } from './createInput/createTextInput.js';
import { createDateInput } from './createInput/createDateInput.js';
import { createRadioBtn } from './createInput/createRadioBtn.js';

// 수정 버튼 생성
export function createEditButton() {
  const editButton = document.createElement('button');
  editButton.className = 'contentEditBtn';
  editButton.textContent = '수정';

  return editButton;
}

export function editedInfo(list, getData, info, uniqueId) {
  list.remove();
  const div = document.createElement('div');
  const editForm = document.createElement('form');
  editForm.id = `${info}_form${uniqueId}`;
  if (info === 'education') {
    createTextInput(div, editForm, 'school', '', getData.school);
    createTextInput(div, editForm, 'major', '', getData.major);
    createRadioBtn(div, editForm);
  } else if (info === 'award') {
    createTextInput(div, editForm, 'content', '', getData.content);
    createTextInput(div, editForm, 'organization', '', getData.organization);
    createDateInput(div, editForm, '수상 일자', 'date');
  } else if (info === 'certification') {
    createTextInput(div, editForm, 'type', '', getData.type);
    createDateInput(div, editForm, '발급 일자', 'date');
    createTextInput(div, editForm, 'authority', '', getData.authority);
  } else {
    createTextInput(div, editForm, 'title', '', getData.title);
    createDateInput(div, editForm, '프로젝트 기간', 'startDate', '~');
    createTextInput(div, editForm, 'role', '', getData.role);
  }

  return editForm;
}
