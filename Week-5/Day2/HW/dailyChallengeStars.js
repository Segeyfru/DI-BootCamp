// Write a JavaScript program that recreates the pattern below.

let str = ''
for(let i = 0; i < 6; i++){
    str += '* '
    console.log(str);
}

// Do this challenge twice: first by using one loop, then by using two nested for loops

for (let i = 1; i <= 6; i++ ){
    let str = ''
    for ( let y = 0; y < i; y++){
        str += '* '
    }
    console.log(str);
}
