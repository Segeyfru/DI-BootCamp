const lodash = require('lodash')
// const {sum, multiply} = require('./math.js')
const { sum, multiply } = require('./math.js')


console.log('mySum =',sum(5,6) );
console.log('myMultiply =',multiply(3,5) );
console.log('lodash.add - ',lodash.add(5,6));
console.log('lodash.multiply - ',lodash.multiply(3,5));