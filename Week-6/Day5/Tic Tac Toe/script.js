let user = 'X';
let comp = 'O';
const winer = document.getElementById('winer')
const pad = document.getElementById('pad')


const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
function userChar(e){
    user = e.innerHTML
    if(user === 'O'){
        comp = 'X'
        computerTurn()
    }else{
        comp = 'O'
    }
    document.getElementById('team').style.display = 'none'
    pad.classList.remove('hidden')
}


function computerTurn(){
    if(!board.includes(-1)){
        showWiner('no')
    }
    while(true){
        let compnum = Math.floor(Math.random() * 9)
        if(board[compnum] === -1){
            board[compnum] = comp;
            changeButton(compnum,comp)
            break
        }
    }
    
    if (checkWiner()){
        showWiner(checkWiner())
        return
    }
}

function userPlay(element,index){
    if(board[index] !== -1){
        console.log('It`s not empty, try one more time');
        return
    }
    board[index] = user;

    changeButton(index,user)
    if (checkWiner()){
        return
    }else{computerTurn()}
    
    
}

function changeButton(index,item){
    let button = document.getElementById(`${index}`)
    button.innerHTML = item
    console.log(item);
}



function checkWiner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [6, 4, 2],
    ];
    for (const arr of winCombos) {
        let [a,b,c] = arr;
        if(board[a] !== -1 && board[a] === board[b] && board[b] === board[c]){
            document.getElementById(a).style.background = 'green'
            document.getElementById(b).style.background = 'green'
            document.getElementById(c).style.background = 'green'
            showWiner(board[a])

            return board[a];
        }
    }
    if(!board.includes(-1)){
        showWiner('no')
    }
    return 0;
}

function restart(e){
    // e.preventDefault()
    board.fill(-1);
    let pad = document.getElementById('pad')
    let buttons = pad.getElementsByTagName('button')
    console.log(buttons);
    for (const btn of buttons) {
        btn.innerHTML = '';
        btn.style.background = 'rgb(240, 240, 240)'
        // btn.style.border= '1px solid black'
        // btn
    }
    document.getElementById('team').style.display = 'block'
    document.getElementById('winer').style.display = 'none'
    
}

function showWiner(winerChar){
    pad.classList.add('hidden')
    document.getElementById('winer').style.display = 'block'
    if(winerChar === user ){
        document.getElementById('h2').innerHTML = 'You win!'
    }else if(winerChar === comp){
        document.getElementById('h2').innerHTML = 'Computer win!'
    }else{
        document.getElementById('h2').innerHTML = 'No one won'
    }

}