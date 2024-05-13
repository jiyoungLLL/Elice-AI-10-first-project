export function editCompleteBtn(name) {
  const btn = document.createElement('div');
  btn.className = 'editCompleteBtn';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.id = `${name}`;
  submitButton.className = 'submit-button';
  submitButton.value = '저장';
  btn.appendChild(submitButton);

  const cancelButton = document.createElement('button');
  cancelButton.id = `${name}Cancel`;
  cancelButton.className = 'cancel-button';
  cancelButton.textContent = '취소';
  btn.appendChild(cancelButton);

  return btn;
}
