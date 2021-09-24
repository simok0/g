const colors = ["blue", "purple", "yellow"];

function handleWindowResize() {
    let wi = window.innerWidth
    if(wi <= 400) {
        document.body.style.backgroundColor = colors[0];
    } else if(wi <= 800 && wi > 400) {
        document.body.style.backgroundColor = colors[1];
    } else if(wi > 800 ) {
        document.body.style.backgroundColor = colors[2];
    }
}


window.addEventListener("resize", handleWindowResize);
