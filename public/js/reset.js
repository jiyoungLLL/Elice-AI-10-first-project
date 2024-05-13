import { Reset, baseUrl } from './core/networkManager.js';

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const originalEmail = document.getElementById("email").value;
    const originalPassword = document.getElementById("password").value;
    const newEmail = document.getElementById("new-email").value;
    const newPassword = document.getElementById("new-password").value;
    
    const errorMessage = document.getElementById("error-message");

    const data = {
        originalEmail,
        originalPassword,
        newEmail,
        newPassword,
    };
    console.log('reset.js data: ', data)

    try {
        const response = await fetch(`${baseUrl}/reset`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            credentials: "same-origin",
        });
        const res = await response.json();
        if (res.errorMessage) {
            errorMessage.textContent = res.errorMessage;
            return;
        }
        window.alert(res.successMessage);
        window.location.href = "/login";
    } catch (error) {
        errorMessage.textContent = '회원정보 변경 중 오류가 발생했습니다.';
        console.log(error);
    }
});
  