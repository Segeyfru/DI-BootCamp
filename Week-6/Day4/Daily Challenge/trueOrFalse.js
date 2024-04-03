
function trueOrFalse(...args){
    for (const arg of args) {
        if(!arg){
            return false
        }
    }
    return true
}

console.log(trueOrFalse(true, 3,true));