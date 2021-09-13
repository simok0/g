// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button"); // 아래의 변수 설정과 동일
// getElemetById를 쓰면 # 없이도 잘 찾아가지만 querySelector로 찾을 때에는 class는 그냥 써도 되나 id는 # 표시를 달아 줘야 한다.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

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
//    console.log(loginInput.value); // 이제 새로고침이 되지 않고 input 값을 그대로 받아오는 게 가능해진다.
    loginForm.classList.add(HIDDEN_CLASSNAME); // 인풋 창에 내용 입력 후 폼 제출 시 입력창이 사라진다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // username 정보를 localstorage에 저장한다.
//    greeting.innerText = "Hello " + username; // 인풋 창에 입력한 유저 네임 정보를 가져온다.
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // 히든 속성을 제거한다.
}

function handleLinkClick(event) {
    event.preventDefault(); // 링크 클릭 후 링크로 이동되는 기본 동작을 막는다.
    console.dir(event);
    alert("click!")
}

// loginButton.addEventListener("click", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) { // 만약 저장된 username key가 없다면
    // show the form
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

// https://developer.mozilla.org/en-US/docs/Web/API/window/localStorage
