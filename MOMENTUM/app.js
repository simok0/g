// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button"); // 아래의 변수 설정과 동일
// getElemetById를 쓰면 # 없이도 잘 찾아가지만 querySelector로 찾을 때에는 class는 그냥 써도 되나 id는 # 표시를 달아 줘야 한다.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const link=document.querySelector("a");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if (username === "") { // 이름 작성 칸이 비어 있으면 경고창을 띄운다.
//         alert("Please write your name");
//     } else if(username.length > 15) { // 이름이 15글자를 넘기면 경고창을 띄운다.
//         alert("Your name is too long!");
//     }
// }

function onLoginSubmit(event) { // 브라우저가 기본 동작을 못하게 막아 주는 함수, 함수를 실행하면 그대로 새로고침이 되던 게 정보를 담은 채 함수를 호출하는 게 가능해진다.
    event.preventDefault(); // 새로고침을 막는다.
    console.log(loginInput.value); // 이제 새로고침이 되지 않고 input 값을 그대로 받아오는 게 가능해진다.
}

function handleLinkClick(event) {
    event.preventDefault(); // 링크 클릭 후 링크로 이동되는 기본 동작을 막는다.
    console.dir(event);
    alert("click!")
}

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);