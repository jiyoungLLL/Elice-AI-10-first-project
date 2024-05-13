export function validateForm(form) {
  const textInputs = form.querySelectorAll('input[type="text"]');
  const dateInputs = form.querySelectorAll('input[type="date"]'); // dateInput 필드를 선택하기 위한 셀렉터
  const radioGroups = form.querySelectorAll('.radioContainer');

  // 기존 경고 메시지 제거
  const existingWarnings = form.querySelectorAll('.validation-warning');
  existingWarnings.forEach((warning) => warning.remove());

  let isValid = true;

  // 텍스트 입력 필드 검증
  textInputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false;
      const warning = document.createElement('div');
      let input_name = '';
      `${input.name}` === 'school'
        ? (input_name = '학교 이름')
        : `${input.name}` === 'major'
        ? (input_name = '전공')
        : `${input.name}` === 'content'
        ? (input_name = '수상 내용')
        : `${input.name}` === 'organization'
        ? (input_name = '시상 단체')
        : `${input.name}` === 'title'
        ? (input_name = '프로젝트명')
        : `${input.name}` === 'role'
        ? (input_name = '역할')
        : `${input.name}` === 'type'
        ? (input_name = '자격 종류')
        : // : `${input.name}` === 'authority'
          // ?
          (input_name = '발급 기관');

      warning.textContent = `* ${input_name} 은(는) 필수값입니다.`;
      warning.className = 'validation-warning';
      warning.style.color = 'red';
      warning.style.fontSize = '10pt';
      warning.style.marginLeft = '10px';
      input.parentNode.insertBefore(warning, input.nextSibling);
    }
  });

  // date Input 유효성 검사
  let isDateValid = true;
  let startDateInput = null;
  let endDateInput = null;

  // startDate와 endDate 입력 필드
  dateInputs.forEach((input) => {
    if (input.name === 'startDate') {
      startDateInput = input;
    } else if (input.name === 'endDate') {
      endDateInput = input;
    }
  });

  // startDate 또는 endDate 중 하나라도 값이 없는 경우
  if (
    (startDateInput && startDateInput.value.trim() === '') ||
    (endDateInput && endDateInput.value.trim() === '')
  ) {
    isDateValid = false;

    // endDate 입력 필드 뒤에 경고 메시지 추가
    const warning = document.createElement('div');
    warning.textContent = `* 프로젝트 기간은 필수값입니다.`;
    warning.className = 'validation-warning';
    warning.style.color = 'red';
    warning.style.fontSize = '10pt';
    warning.style.marginLeft = '10px';

    if (endDateInput) {
      endDateInput.parentNode.insertBefore(warning, endDateInput.nextSibling);
    }
  }

  // 나머지 입력 필드 검증
  dateInputs.forEach((input) => {
    if (
      input.name !== 'startDate' &&
      input.name !== 'endDate' &&
      input.value.trim() === ''
    ) {
      isDateValid = false;
      const warning = document.createElement('div');
      let input_name = '';
      `${input.name}` === 'date'
        ? (input_name = '수상 / 발급 일자는')
        : (input_name = '');

      warning.textContent = `* ${input_name} 필수값입니다.`;
      warning.className = 'validation-warning';
      warning.style.color = 'red';
      warning.style.fontSize = '10pt';
      warning.style.marginLeft = '10px';
      input.parentNode.insertBefore(warning, input.nextSibling);
    }
  });

  // 라디오 버튼 그룹 검증
  radioGroups.forEach((group) => {
    const isChecked = group.querySelector('input[type="radio"]:checked');
    if (!isChecked) {
      isValid = false;

      const warning = document.createElement('div');
      warning.textContent = `* ${group.dataset.name}은(는) 필수값입니다.`;
      warning.className = 'validation-warning';
      warning.style.color = 'red';
      warning.style.fontSize = '10pt';
      warning.style.marginLeft = '10px';
      warning.style.marginTop = '10px';
      warning.style.textAlign = 'center';

      const parent = group.parentNode;
      const nextSibling = group.nextSibling;

      if (nextSibling) {
        parent.insertBefore(warning, nextSibling);
      } else {
        parent.appendChild(warning);
      }
    }
  });

  return isValid;
}
