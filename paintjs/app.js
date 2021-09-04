const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
// canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // fillStyle, fillRect를 설정하지 않으면 이미지를 저장했을 때 기본적으로 투명색을 갖는다.
ctx.strokeStyle = "INITIAL_COLOR"; //마우스로 그리는 선이 이 색을 가진다.
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5; //그리는 선의 너비
// ctx.fillStyle = "green";
// ctx.fillRect(50, 20, 100, 49);

let painteing = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event) {
//    console.log(event); //인터넷 페이지에서 콘솔에 정보 출력
    const x = event.offsetX;
    const y = event.offsetY; //캔버스 내의 x, y 좌표인 offset 정보만 정의
//    console.log(x, y); //x, y 만 출력
    if(!painting) {
        console.log("creating path in", x, y);
        ctx.beginPath(); //클릭하지 않고 마우스를 움직일 때 path를 시작한다.
        ctx.moveTo(x, y); // path를 만든다, 클릭하고 움직이면 이 if문이 실행되지 않는다. 그리고 lineTo를 호출하면 이게 끝나는 지점에서 lineTo로 연결이 된다
    } else {
        console.log("creating line in", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// function onMouseDown(event) {
// //    console.log(event); //클릭했을 때 그 위치의 정보 확인 가능
//     painting = true; //클릭하면 painting이 시작되게 된다, 마우스를 놓으면 false로 다시 복귀
// }

// function onMouseUp(event) {
//     stopPainting();
// }

function handleColorClick(event){
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor; // rgb(x, y, z) 라는 backgroundColor 정보를 가지고 온다.
    // console.log(color);
    ctx.strokeStyle = color; // strokeStyle을 override하고 strokestyle이 target에 있는 색상이 된다.
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    // console.log(event.target.value); //value라는 taget 정보를 가지고 온다.
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling == true){
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint";  // Fill 모드와 Paint 모드로 변경
        // ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick(){
//    ctx.fillRect(0, 0, canvas.width, canvas.height); // canvas 영역에 사이즈를 지정하여 색을 칠해 준다, 그러나 이 상태에서는 fill만 되기 때문에 if문을 써야 한다.
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
} 

function handleCM(event){
    // console.log(event);
    event.preventDefault() //우클릭을 하더라도 메뉴가 뜨지 않는다.
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/png"); // save 버튼을 누르면 이미지 저장이 가능한 url을 반환해 준다.
    // console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[EXPORT]";
//    console.log(link);
    link.click();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove); //마우스가 캔버스 안에서 움직일 때 정보 따기
    canvas.addEventListener("mousedown", startPainting); //클릭했을 때 발생하는 이벤트
    canvas.addEventListener("mouseup", stopPainting); //마우스 클릭을 뗐을 때
    canvas.addEventListener("mouseleave", stopPainting); //마우스가 캔버스 안을 벗어났을 때
    canvas.addEventListener("click", handleCanvasClick); //캔버스를 클릭했을 때 fill
    canvas.addEventListener("contextmenu", handleCM); //우클릭 차단
}

// console.log(Array.from(colors));

if(colors){
    Array.from(colors).forEach(color => 
        color.addEventListener("click", handleColorClick)
        ); //팔레트 색을 클릭했을 때 array를 가지게 해 준다
}

if(range){
    range.addEventListener("input", handleRangeChange)
} // 브러시 굵기 컨트롤바를 움직였을 때 input을 받게 해 준다

if(mode){
    mode.addEventListener("click", handleModeClick)
} // fill 버튼을 클릭했을 때 true, false 값을 받아온다. (?)

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
} // save 기능

//path는 마우스를 움직이는 동안 좌표를 만들고 있다. 다만 클릭 전까지 painting은 false이므로 보여지지 않는다.
//우리가 선을 그릴 땐 한 좌표에서 마우스를 멈추고 클릭하여 다른 좌표로 이어나간다. 이때 시작 점을 moveTo(x, y)로 둔다.
//painting의 기본 값은 false이지만 마우스가 클릭되면 startPainting을 통해 true값이 된다. 
//때문에 !painting은 false이고 else 안의 lineTo()와 stroke()를 통해 선이 그려지게 된다.

//캔버스는 사이즈를 2개 가져야 한다. css사이즈와 element 값이 들어갈 pixel manipulating 사이즈.
//보이는 캔버스가 아니라 pixel modifier에 사이즈를 줘야 그리기가 된다

//canvas의 context는 이 안에서 픽셀들을 컨트롤하는 역할. 더 많은 context가 있겠지만 이번에는 2d로 작업.

//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

// canvas가 이미 pixel을 다루고 있기 때문에 우클릭으로 저장 가능한 것 확인. 