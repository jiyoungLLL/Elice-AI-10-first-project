import {baseUrl} from '../core/networkManager.js';

function changeImageSource(newSrc) {
    let img = document.getElementById('profile_img');                                 //이미지 경로를 multer가 알아볼 수 있게 url 추가
    img.src = baseUrl+"/"+newSrc;
    console.log(img.src)
  }

function handleErrorResponse(response) {
  return response.json().then(data => {
    if (response.ok) {
      return  { data, response }; 
    } else {
      if (data.error) {
        console.log(data.error)
        alert(data.error);
      } else {
        alert("에러가 발생했습니다. 다시 한번 시도해주세요.");
      }
    }
  });
}
  
export function changePhoto(formName) {
  const form = document.getElementById(formName);
  const formData = new FormData(form);

  fetch(`${baseUrl}/photo`, {
      method: 'POST',
      body: formData
  })
      .then(handleErrorResponse)
      .then(({ data, response }) => { 
          if (!response.ok) {
            console.log(response)
              throw new Error('Response Error');
          }
          return data; 
      })
      .then((data) => {
          changeImageSource(data.image);
          console.log('Success:', data.image);
      })
      .catch((err) => {
          console.log(err);
      });
}

