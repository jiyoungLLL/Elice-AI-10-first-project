export function createTextInput(div, form, name, placeholder, prevalue) {
  const input = document.createElement('input');
  input.name = name;
  input.className = 'input-style';
  input.type = 'text';
  !(placeholder === '') ? (input.placeholder = placeholder) : '';

  prevalue ? (input.value = prevalue) : '';

  form.appendChild(input);
  form.appendChild(document.createElement('br'));
  div.appendChild(form);
}
