import {Login} from './core/networkManager.js';


document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    const errorMessage = document.getElementById("error-message");

    const data = {
      email,
      password
  };    


  Login(data, 
    () => {
        console.log("로그인 성공!");
        window.location.href = "/personal"; 
    }, 
    (error) => {
        console.log("로그인 실패!");
        console.log(error);
        errorMessage.textContent = '• 해당 사용자 정보가 존재하지 않습니다.';
    }
    );
  });
  