export function emptyTapTest() {
  for (let i = 0; i < 4; i++) {
    const addDiv = document.getElementsByClassName('add')[i];
    const addedDiv = document.getElementsByClassName('addContent')[i];

    let text = '';
    switch (i) {
      case 0:
        text = '학력 탭이 비어있습니다.';
        break;
      case 1:
        text = '수상이력 탭이 비어있습니다.';
        break;
      case 2:
        text = '프로젝트 탭이 비어있습니다.';
        break;
      case 3:
        text = '자격증 탭이 비어있습니다.';
        break;
    }

    // 내용이 추가된 경우, emptyMsg 삭제 또는 숨김 처리
    const emptyMsg = document.getElementById(`emptyMsg${i}`);
    if (addedDiv && addedDiv.children.length > 0) {
      if (emptyMsg) {
        emptyMsg.style.display = 'none';
      }
    } else {
      // 모두 비있는지 확인
      if (
        addDiv &&
        addDiv.children.length === 0 &&
        addedDiv &&
        addedDiv.children.length === 0
      ) {
        if (!emptyMsg) {
          // emptyMsg가 아직 없는 경우에만 생성
          addDiv.id = `addDiv${i}`;
          const newEmptyMsg = document.createElement('p');
          newEmptyMsg.textContent = text;
          newEmptyMsg.style =
            'color: #0091B5; font-size: 10pt; margin-top: 0; margin-bottom: 15px';
          newEmptyMsg.id = `emptyMsg${i}`;
          addDiv.appendChild(newEmptyMsg);
        } else {
          emptyMsg.style.display = '';
        }
      }
    }
  }
}
