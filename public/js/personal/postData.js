import { deleteForm } from './deleteForm.js';
import { newInfo } from './newInfo.js';
import { emptyTapTest } from './emptyTapTest.js';

export function postData(formName, addedName, info) {
  const form = document.getElementById(formName);
  const formData = new FormData(form);
  const newData = {};
  formData.forEach((value, key) => (newData[key] = value));
  const data = JSON.stringify(newData);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Response Error');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Success:', data);

      // input 태그 삭제
      deleteForm(form, 'input[type="text"]');
      // 라디오 버튼 삭제
      deleteForm(form, 'input[type="radio"]');
      // 라디오 버튼에 대응하는 라벨도 삭제
      deleteForm(form, 'label');
      // date input 삭제
      deleteForm(form, '.date-style');
      // 확인, 취소 버튼 삭제
      deleteForm(form, 'div');

      const getData = data.data;
      newInfo(getData, addedName, info, form.id);

      emptyTapTest();
    })
    .catch((err) => {
      console.log('Error:', err);
    });
}
