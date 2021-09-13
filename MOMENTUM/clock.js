const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // padStart: 총 2글자가 되어야 하고, 빈 공간 중 시작하는 지점부터 0을 삽입한다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 웹페이지가 로드되자마자 1초를 안 기다려도 시간이 보이게 해 준다.
setInterval(getClock, 1000); // 1초마다 값을 받아온다.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
