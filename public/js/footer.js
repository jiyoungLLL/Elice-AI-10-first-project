const copyrightP = document.createElement('p');
copyrightP.textContent = 'Copyright (c) 2024 PorShaW.';
copyrightP.id = 'footer';
const baseUrl = 'http://localhost:5000';

// Create the 탈퇴하기 button element
const quitButton = document.createElement('button');
quitButton.textContent = '> 회원 탈퇴';
quitButton.id = 'quitButton';

quitButton.addEventListener('click', async () => {
  // 확인 요청
  const confirmed = window.confirm('정말로 탈퇴하시겠습니까?');

  if (confirmed) {
    try {
      const response = await fetch(`${baseUrl}/quit`, {
        method: 'POST',
        credentials: 'same-origin',
      });
      console.log(response);
      if (response.ok) {
        // 탈퇴 성공
        console.log(response);
        window.location.href = `${baseUrl}/login`;
      } else {
        // 탈퇴 실패
        console.error('회원 탈퇴에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원 탈퇴 요청 중 오류가 발생했습니다:', error);
    }
  }
});

document.querySelector('#main').insertAdjacentElement('afterend', copyrightP);

// copyrightP의 자식으로 quitButton 추가
const div = document.createElement('div');
div.className = 'quitButton';
div.appendChild(quitButton);
copyrightP.insertAdjacentElement('afterend', div);
