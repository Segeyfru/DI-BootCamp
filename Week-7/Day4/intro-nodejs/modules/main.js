/** NodeJS module system 
 * 
 * 1. core module
 * 2. our module
 * 3. NPM - Node Package Manager
*/

/** How to create a module */

const name = 'Jone';
const greeting = (name) => console.log(`Hello, ${name}, welcome to NodeJS`);
const hello = (name) => console.log(`Hello, ${name}`);

// greeting(name)

module.exports = {
    greeting,
    hello,
    name
}


/** 
 * 
 * 
 */

