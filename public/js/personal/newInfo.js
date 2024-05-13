import { createDeleteButton } from './deleteButton.js';
import { deleteDataOnServer } from './deleteButton.js';
import { createEditButton } from './editButton.js';
import { addData } from './addData.js';
import { editButtonClicked } from './editButtonClicked.js';

export function newInfo(getData, addedName, info, formId) {
  const displayElement = document.getElementById(addedName);

  const parentList = document.createElement('ul');
  const list = document.createElement('li');

  addData(info, getData, list);

  // 수정, X 버튼 container
  const list2 = document.createElement('li');
  list2.className = 'editContainer';

  // 저장, 취소버튼 container
  const list3 = document.createElement('li');
  list3.className = 'editContainer';

  // 수정 버튼
  const editButton = createEditButton();

  // 수정 버튼 이벤트
  editButton.addEventListener('click', (e) => {
    editButtonClicked(
      e,
      list,
      getData,
      info,
      parentList,
      list2,
      displayElement,
      list3
    );
  });

  // 삭제 버튼
  const deleteButton = createDeleteButton(
    info,
    deleteDataOnServer,
    getData,
    parentList,
    list,
    list2,
    displayElement,
    formId
  );

  list2.appendChild(editButton);
  list2.appendChild(deleteButton);
  parentList.appendChild(list);
  parentList.appendChild(list2);
  displayElement.appendChild(parentList);
}
