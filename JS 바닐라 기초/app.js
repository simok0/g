const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() { // 글자 클릭 시 색상이 바뀌는 함수
//    console.log("title was clicked!");
    h1.style.color = "blue"; 
}

function handleTitleClick() { // 클릭을 하면 blue와 tomato 색이 번갈아 바뀌는 함수
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleTitleClick() { // Classlist 를 이용하여 font에 clicked 클래스를 추가하고 지우는 함수
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

function handleTitleClick() { // toggle을 이용해서 위의 함수를 간편화
    h1.classList.toggle("clicked");
}

// toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 
// 만약 있다면 toggle이 clicked를 제거한다.
// 만약 h1의 classList에 clicked가 존재하지 않는다면 
// toggle은 clicked를 classList에 추가해 준다.


function handleMouseEnter() { // 마우스를 가져다 대면 글자가 바뀌는 함수
    h1.innerText = "mouse is here!"; 
}

function handleMouseLeave() { // 마우스를 떼면 글자가 바뀌는 함수
    h1.innerText = "mouse is gone!"; 
}

function handleWindowResize() { // 화면을 resize 하면 배경색이 바뀌는 함수
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() { // copy 시 알림창을 띄우는 함수
    alert("copier!");
}

function handleWindowOffline() { // offline 시 알림창을 띄우는 함수
    alert("SOS NO WIFI");
}

function handleWindowOnline() {
    alert("ONLINE");
}

h1.addEventListener("click", handleTitleClick); // 클릭했을 때의 이벤트
// h1.onclick = handleh1Click;
h1.addEventListener("mouseenter", handleMouseEnter); // 마우스를 글자 위로 가져다 댔을 때의 이벤트
// h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave); // 마우스를 글자 위에서 뗐을 때의 이벤트

// console.dir(h1);

window.addEventListener("resize", handleWindowResize); // resize 때의 이벤트
window.addEventListener("copy", handleWindowCopy); // copy 때 이벤트
window.addEventListener("offline", handleWindowOffline); // offline 때 이벤트
window.addEventListener("online", handleWindowOnline);

// https://developer.mozilla.org/en-US/docs/web/api/window - 참고 사이트