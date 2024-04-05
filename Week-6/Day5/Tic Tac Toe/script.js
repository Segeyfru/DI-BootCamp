let user = 'X';
let comp = 'O';
const winer = document.getElementById('winer')
const pad = document.getElementById('pad')
const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [6, 4, 2],
];

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

// //                                        /** Computer Turn */
// function computerTurn(){
//     let boolean = true
//     if(!board.includes(-1)){
//         // showWiner('no')
//         console.log('no one!');
//         boolean = false
//         // return
//     }
//     while(boolean){
//         let compnum = Math.floor(Math.random() * 9)
//         if(board[compnum] === -1){
//             board[compnum] = comp;
//             changeButton(compnum,comp)
//             break
//         }
//     }
    
//     if (checkWiner()){
//         showWiner(checkWiner())
//         return
//     }
// }
//                                        /** Computer Turn HARD */
function computerTurn(){
    let boolean = true
    if(!board.includes(-1)){
        console.log('no one!');
        boolean = false
    }
    
    
    if(boolean){
        console.log('going to win');
        boolean = checkForWinWith2Matches();
    }
    
    if (boolean){
        console.log('going to block');
        boolean = checkForBlockwith2Matches();
    }
    
    if(boolean){
        console.log('going to win with one match');
        boolean = checkForWinWithOneMatch();
        
    }
    if (boolean){
        console.log('going to block with one match');
        boolean = checkForBlockWithOneMatch();
    }
    
    while(boolean){
        console.log('going to random');
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

function checkForWinWith2Matches(){
    console.log(`Coincidence -> 2`);
    for (const arr of winCombos) {  /** Checking win position */
        console.log('Checking win position in ' + arr);
        let [a,b,c] = arr;
        let count = 0;
        let num = -1;
        if(board[a] === comp){
            count++
        }else if(board[a] === -1){
            num = a;
        }
        if(board[b] === comp){
            count++
        }else if(board[b] === -1){
            num = b;
        }
        if(board[c] === comp){
            count++
        }else if(board[c] === -1){
            num = c;
        }
        console.log(board[a] + ' / ' + board[b] + ' / ' + board[c]);
        console.log('counter = ' + count);
        console.log('NUm = ' + num);
        if(count === 2 && num >= 0){
            board[num] = comp;
            changeButton(num,comp)
            if (checkWiner()){
                showWiner(checkWiner())
                return false
            }
            return false
        }
        console.log('not finded');
    }
    console.log('going to block');
    return true
}

function checkForWinWithOneMatch(){
    console.log(`Coincidence -> 1`);
    for (const arr of winCombos) {  /** Checking win position */
        console.log('Checking win position in ' + arr);
        let [a,b,c] = arr;
        let count = 0;
        let num = -1;
        if(board[a] !== user && board[b] !== user && board[c] !== user){
            if(board[a] === comp){
                count++
            }else if(board[a] === -1){
                num = a;
            }
            if(board[b] === comp){
                count++
            }else if(board[b] === -1){
                num = b;
            }
            if(board[c] === comp){
                count++
            }else if(board[c] === -1){
                num = c;
            }
            console.log(board[a] + ' / ' + board[b] + ' / ' + board[c]);
            console.log('counter = ' + count);
            console.log('NUm = ' + num);
            if(count === 1 && num >= 0){
                board[num] = comp;
                changeButton(num,comp)
                if (checkWiner()){
                    showWiner(checkWiner())
                    return false
                }
                return false
            }
        }        
        console.log('not finded');
    }
    console.log('going to block');
    return true
}

function checkForBlockwith2Matches(){/** Checking block position */
    for (const arr of winCombos) { 
        console.log('Checking block position in ' + arr);
        let [a,b,c] = arr;
        let count = 0;
        let num = -1;
        if(board[a] === user){
            count++
        }else if(board[a] === -1){
            num = a;
        }
        if(board[b] === user){
            count++
        }else if(board[b] === -1){
            num = b;
        }
        if(board[c] === user){
            count++
        }else if(board[c] === -1){
            num = c;
        }
        console.log(board[a] + ' / ' + board[b] + ' / ' + board[c]);
        console.log('counter = ' + count);
        console.log('NUm = ' + num);
        if(count === 2 && num >= 0){
            board[num] = comp;
            changeButton(num,comp)
            if (checkWiner()){
                showWiner(checkWiner())
                return false
            }
            return false
        }
        console.log('not finded');
    }
    return true
}

function checkForBlockWithOneMatch(){/** Checking block position */
    for (const arr of winCombos) { 
        console.log('Checking block position in ' + arr);
        let [a,b,c] = arr;
        let count = 0;
        let num = -1;
        if(board[a] !== comp && board[b] !== comp && board[c] !== comp){
            if(board[a] === user){
                count++
            }else if(board[a] === -1){
                num = a;
            };
            if(board[b] === user){
                count++
            }else if(board[b] === -1){
                num = b;
            };
            if(board[c] === user){
                count++
            }else if(board[c] === -1){
                num = c;
            };
            console.log(board[a] + ' / ' + board[b] + ' / ' + board[c]);
            console.log('counter = ' + count);
            console.log('NUm = ' + num);
            if(count === 1 && num >= 0){
                board[num] = comp;
                changeButton(num,comp)
                if (checkWiner()){
                    showWiner(checkWiner())
                    return false
                };
                return false
            };
        };
        console.log('not finded');
    };
    return true
};

function userPlay(element,index){
    if(board[index] !== -1){
        console.log('It`s not empty, try one more time');
        return
    }
    board[index] = user;

    changeButton(index,user)
    if (checkWiner()){
        showWiner(checkWiner())
        return
    }else{computerTurn()}
    
    
}

function changeButton(index,item){
    let button = document.getElementById(`${index}`)
    button.innerHTML = item;
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
        return 1
    }
    return 0;
}

function restart(e){
    board.fill(-1);
    let pad = document.getElementById('pad')
    let buttons = pad.getElementsByTagName('button');
    for (const btn of buttons) {
        btn.innerHTML = '';
        btn.style.background = 'rgb(240, 240, 240)'
    }
    document.getElementById('team').style.display = 'block'
    document.getElementById('winer').style.display = 'none'
    
}

function showWiner(winerChar){
    console.log(board);
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