import {baseUrl} from '../core/networkManager.js'

let loadedUsers = []; // 로드된 사용자 목록을 저장할 배열
let isLoading = false; // 추가 데이터 로딩 중인지 여부
let page = 1;
let scrolltimeout

// 사용자를 화면에 렌더링하는 함수
function renderUsers(users) {
    const userListDiv = document.getElementById('userList'); 
    if (!userListDiv) {
        console.error("Element with id 'userList' not found.");
        return;
    }
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('userProfile');
        // 프로필 이미지 추가
        const profileImage = document.createElement('img');
        profileImage.src = `${user.profilePic}`; // 프로필 이미지 URL 설정(없을 경우 기본 이미지)
        profileImage.alt = 'Profile Picture';
        profileImage.classList.add('profileImage'); // CSS에서 스타일링을 위한 클래스 추가
        userDiv.appendChild(profileImage);
        const nameEmailDiv = document.createElement('div');
        nameEmailDiv.classList.add('NameEmail')
        nameEmailDiv.innerHTML = `${user.name} <br><br>${user.email}`;
        userDiv.addEventListener('click', () => {
            window.location.href = `${baseUrl}/otheruser/${user._id}`;                                          // 프로필 링크 이동
        });
        userDiv.appendChild(nameEmailDiv);
        userListDiv.appendChild(userDiv);
    });
}

window.onload = async () => {
    try {
        const skeleton = document.querySelector('#skeleton');
        skeleton.style.display = 'grid';
        const response = await fetch(`${baseUrl}/network?page=${page}&limit=16`);
        if (!response.ok) {
            throw new Error('Failed to fetch initial users');
        }

        const data = await response.json();
        const initialUsers = data.users;


        loadedUsers = initialUsers;
        renderUsers(initialUsers);
        if (initialUsers.length <= 15) {
            const skeleton = document.querySelector('#skeleton');
                 skeleton.style.display = 'none';
        }

        window.addEventListener('scroll', handleScroll);
        
    } catch (error) {
        console.error('Error fetching initial users:', error);
    }
};

// 스크롤 이벤트 핸들러
async function handleScroll() {
    // 스크롤이 화면 하단에 도달했을 때
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearTimeout(scrolltimeout)
        scrolltimeout = setTimeout(async() => {
            
        
        try {
            // 페이지 번호 증가
            page++;
            // 새 페이지 데이터를 가져오기
            const response = await fetch(`${baseUrl}/network?page=${page}&limit=16`);
            const data = await response.json();
            // 여기서 데이터를 처리하거나 표시할 수 있습니다.
            const newUsers = data.users;
            renderUsers(newUsers);
            if (newUsers.length <= 15) {
                console.log('Array is empty')
                window.removeEventListener('scroll', handleScroll);
                const skeleton = document.querySelector('#skeleton');
                 skeleton.style.display = 'none';
                return newUsers;
              }
            }
        catch (error) {
        }        
    }, 1000);  // 스크롤 딜레이 값
    
    }   
}