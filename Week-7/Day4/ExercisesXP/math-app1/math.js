// const lodash = require('lodash')

const sum = (a,b) => a + b
const multiply = (a,b) => a * b

const sum2 = (a,b) => {
    return lodash.add(a,b)
}
// const multiply = (a,b) => {
//     return lodash.multiply(a,b)
// }

module.exports = {
    sum,
    multiply,
}
