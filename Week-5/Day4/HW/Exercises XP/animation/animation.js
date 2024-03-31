// //          PART 1

// let container = document.body.firstElementChild;
// let button = document.getElementById('clear')

// button.addEventListener('click', clearIntervalByClick)

// function sayHello(){
//     alert('Hello World!')
// }
// function addDiv(){
//     let p = document.createElement('p')
//     p.innerHTML = 'Hello world'
//     container.appendChild(p)
//     let pList = container.getElementsByTagName('p')
//     console.log(pList);
//     if (pList.length >= 5){
//         clearInterval(intervalId)
//     }
// }
// function clearIntervalByClick(e){
//     e.preventDefault()
//     clearInterval(intervalId)
// }


// // setTimeout(sayHello,2000)
// // setTimeout(addDiv, 2000)
// let intervalId = setInterval(addDiv, 1000)


//          PART 2
let button = document.body.firstElementChild.firstElementChild
let container = document.getElementById('container')
let animate = container.firstElementChild

let pos = 1
let moving
function myMove(){
    moving = setInterval(movingRight,1)
    
}
function movingRight(){
    animate.style.left = `${pos}px`
    pos++
    if (pos > 350){
        pos = 0
        clearInterval(moving)
        animate.style.left = `${pos}px`
    }
}





