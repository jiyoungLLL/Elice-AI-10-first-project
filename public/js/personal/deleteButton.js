import { baseUrl } from '../core/networkManager.js';
import { emptyTapTest } from './emptyTapTest.js';

export function createDeleteButton(
  content,
  deleteDataOnServer,
  getData,
  parentList,
  list,
  list2,
  displayElement,
  formId
) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.className = 'deleteBtn';
  deleteButton.setAttribute('data-info', content);
  // formId를 data 속성에도 저장
  deleteButton.setAttribute('data-form-id', formId);

  deleteButton.addEventListener('click', function (e) {
    e.preventDefault();
    const content = this.getAttribute('data-info');
    const formId = this.getAttribute('data-form-id');
    emptyTapTest();
    deleteDataOnServer(content, getData._id)
      .then(() => {
        parentList.removeChild(list);
        parentList.removeChild(list2);
        if (parentList.children.length === 0) {
          displayElement.removeChild(parentList);
        }
        emptyTapTest();
      })
      .catch((error) => console.error('Error:', error));
  });
  return deleteButton;
}

export function deleteDataOnServer(content, userId) {
  return fetch(`${baseUrl}/mypage/${content}/${userId}`, {
    method: 'DELETE',
  });
}
