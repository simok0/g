// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button"); // 아래의 변수 설정과 동일
// getElemetById를 쓰면 # 없이도 잘 찾아가지만 querySelector로 찾을 때에는 class는 그냥 써도 되나 id는 # 표시를 달아 줘야 한다.

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long!");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);