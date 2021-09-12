const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const img2 = new Image();
img2.src = "dino.png";

const dino = { // 공룡 정보 object
    x : 10,
    y : 200, //공룡 등장 좌표
    width : 50,
    height : 50, // 공룡의 폭과 높이
    draw() {
        ctx.fillStyle = "green";
//        ctx.fillRect(this.x, this.y, this.width, this.height); 
        ctx.drawImage(img2, this.x, this.y);
    }
}

const img1 = new Image();
img1.src = "cactus.png";

class Cactus { // 장애물 정보 클래스
    constructor() {
        this.x = 500;
        this.y = 200; // 장애물의 등장 위치
        this.width = 50;
        this.height = 50; // 장애물의 사이즈    
    }
        draw() {
            ctx.fillStyle = "red";
            // ctx.fillRect(this.x, this.y, this.width, this.height); 
            ctx.drawImage(img1, this.x, this.y);
        }
}

let timer = 0;
const cactusAll = [];
let jump = false;
let jumpTimer = 0;
let animation;

function moveFrame() { // 1초에 60번 프레임마다 실행할 함수 (횟수는 모니터에 따라 다르다.)
    animation = requestAnimationFrame(moveFrame);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 움직이면서 남은 잔상을 claer 해 준다.

    if (timer % 200 === 0) { // 75 frame마다 cactus 하나가 생성된다.
        const cactus = new Cactus();
        cactusAll.push(cactus); // 이러면 이제 1초에 하나씩 생긴 cactus를 cactusAll array에 담아 준다.
    }

    cactusAll.forEach((a, i, o)=> { // 반복문으로 array 에 있던 cactus를 전부 draw() 해 준다.
        if (a.x < 0) { // 필요없어진 장애물을 array 에서 제거.
            o.splice(i, 1)
        } 
        a.x--;
        collisionCheck(dino, a);
        a.draw();
    })

    // dino jump 기능

    if (jump == true) { // jump가 실행 중일 때에는 공룡이 올라간다.
        dino.y-=3; //jump 속도 조절
        jumpTimer++; // 점프 시 프레임마다 +1
    }
    if (jump == false) { // jump가 실행 중이지 않을 때에는 공룡이 내려간다.
        if (dino.y < 200) {
        dino.y+=3; // jump 후 내려가는 속도 조절
        }
    }
    if (jumpTimer > 50) { // 쌓인 점프 프레임이 100이 되면 멈춘다.
        jump = false;
        jumpTimer = 0;
    }

    dino.draw()
}

moveFrame();

// 충돌 확인

function collisionCheck(dino, cactus) {
    let xCheck = cactus.x - (dino.x + dino.width);
    let yCheck = cactus.y - (dino.y + dino.height);
    if (xCheck < 0 && yCheck < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 충돌 시 canvas clear.
        cancelAnimationFrame(animation) // animation clear.
    }
}


function handleKey(e) {
    if (e.code === 'Space') {
        jump = true;
    }
}

document.addEventListener("keydown", handleKey);