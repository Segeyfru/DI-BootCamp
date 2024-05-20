
const processInput = (input: number | string | boolean) => {
    if (typeof input === 'number') {
        return input ** 2
    } else if (typeof input === 'string') {
        return input.toUpperCase()
    } else if (typeof input === 'boolean') {
        return !input
    } else {
        return 'Error'
    }
}

console.log(processInput(3));
console.log(processInput('string'));
console.log(processInput(true));
