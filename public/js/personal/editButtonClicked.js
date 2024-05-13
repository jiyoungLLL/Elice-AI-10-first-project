import { editCompleteBtn } from './editCompleteBtn.js';
import { editedInfo } from './editButton.js';
import { submitEditForm } from './submitEditForm.js';
import { validateForm } from './validateForm.js';

// editButtonClicked 함수 변경사항
export function editButtonClicked(
  e,
  list,
  getData,
  info,
  parentList,
  list2,
  displayElement,
  list3
) {
  e.preventDefault();
  // form id : num -> Date.now
  const uniqueId = Date.now();

  list.parentElement.classList.add('reset-style');

  const editedInformation = editedInfo(list, getData, info, uniqueId); // num 대신 uniqueId 사용

  parentList.removeChild(list2);

  const editConfirmBtn = editCompleteBtn(info);

  editedInformation.addEventListener('submit', (e) => {
    e.preventDefault();

    // 필수 입력값 검사
    const isValid = validateForm(editedInformation);
    if (isValid) {
      const editedForm = document.getElementById(`${info}_form${uniqueId}`); // num 대신 uniqueId 사용
      submitEditForm(e, editedForm, info, getData);
    }
  });

  editedInformation.appendChild(editConfirmBtn);
  list3.appendChild(editedInformation);
  displayElement.appendChild(list3);

  const cancelButton = document.getElementById(`${info}Cancel`);
  cancelButton.addEventListener('click', () => {
    e.preventDefault();
    list3.removeChild(editedInformation);
    if (!parentList.contains(list)) {
      parentList.appendChild(list);
      parentList.appendChild(list2);
    }
    list3.removeChild(editConfirmBtn);
    emptyTapTest();
  });
}
