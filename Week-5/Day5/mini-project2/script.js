let body = document.body
let colors = document.body.firstElementChild.firstElementChild;
let pad = document.body.firstElementChild.lastElementChild;
let getColorFrom
let mouseDown = false
let clear = document.createElement("button");

body.addEventListener('mousedown',mouseDownF)
body.addEventListener('mouseup',mouseUpF)
clear.innerHTML = "Clear";
clear.onclick = function clear(e) {
    e.preventDefault();
    let divs_pad = document.getElementsByClassName('div_pad')
    for (const div of divs_pad) {
        div.style.backgroundColor = 'white'
    }
};
colors.appendChild(clear);

let colorsPad = document.createElement("div");
colorsPad.style.display = "flex";
colorsPad.style.flexWrap = "wrap";
colorsPad.style.justifyContent = "space-evenly";
colorsPad.style.flexGrow = "1";
for (let i = 0; i < 21; i++) {
    let rnd_color = getRandColors();
    let color = document.createElement("div");
    color.className = "color_div";
    if (i < 19) {
        color.style.background = `${rnd_color}`;
        // color.style.background = `green`;
    } else if (i == 19) {
        color.style.background = `black`;
    } else if (i == 20) {
        color.style.background = `white`;
    }
    color.addEventListener('click',getColor)
    colorsPad.appendChild(color);
}

colors.appendChild(colorsPad);

for(let i = 0; i < 3600;i++){
    let div_pad = document.createElement('div')
    div_pad.className = 'div_pad'
    div_pad.style.width = '8px'
    div_pad.style.height = '10px'
    div_pad.style.margin = '1px'
    div_pad.style.backgroundColor = 'white'
    div_pad.addEventListener('click', painting)
    div_pad.addEventListener('mousedown',mouseDownF)
    div_pad.addEventListener('mouseup',mouseUpF)
    div_pad.addEventListener('mouseover', paintingMouse)
    pad.appendChild(div_pad)


}

function getRandColors() {
    var letters = "0123456789ABCDEF";
    var rnd_color = "#";
    for (var i = 0; i < 6; i++) {
        rnd_color += letters[Math.floor(Math.random() * 16)];
    }
    return rnd_color;
}
function getColor(){
    getColorFrom = this.style.backgroundColor
}
function mouseDownF(e){
    e.preventDefault()
    mouseDown = true
}
function mouseUpF(e){
    e.preventDefault()
    mouseDown = false
}
function paintingMouse(e){
    e.preventDefault()
    if(mouseDown){
        e.target.style.backgroundColor = `${getColorFrom}`
    }
}

function painting(e){
    e.target.style.backgroundColor = `${getColorFrom}`
} 