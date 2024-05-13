export function createRadioBtn(div, form) {
  const radioContainer = document.createElement('div');
  radioContainer.className = 'radioContainer';
  radioContainer.setAttribute('data-name', 'degree');
  const degrees = ['재학중', '학사졸업', '석사졸업', '박사졸업'];
  degrees.forEach(function (labelText, index) {
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.id = 'option' + (index + 1);
    radioButton.name = 'degree';
    if (radioButton.id == 'option1') {
      radioButton.value = '재학중';
    } else if (radioButton.id == 'option2') {
      radioButton.value = '학사졸업';
    } else if (radioButton.id == 'option3') {
      radioButton.value = '석사졸업';
    } else {
      radioButton.value = '박사졸업';
    }

    const label = document.createElement('label');
    label.setAttribute('for', radioButton.id);
    label.textContent = labelText;
    radioContainer.appendChild(radioButton);
    radioContainer.appendChild(label);
  });
  form.appendChild(radioContainer);
  form.appendChild(document.createElement('br'));

  div.appendChild(form);
}
