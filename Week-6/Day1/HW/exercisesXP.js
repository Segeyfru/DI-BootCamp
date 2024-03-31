/** EXERCISE 1 */

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;

//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
/** it will be a error . we can`t change const  */

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a} hi`);
// }

// // #2.1 - run in the console:
// funcThree() /**alert "a = 0"*/
// funcTwo()  /**  a = 5 */
// funcThree() /** alert 'a = 5' */
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
/** it will be a error. we can't change the constant  */


// //#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFive()  /** window.a - now it is a global variable, so ...*/
// funcFour()  /** a = 'hello */


// //#4
// let a = 1;
// function funcSix() {
//     let a = 5;
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() /** alert - "a = test" */
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
/** I thought there would be an error because I didn’t notice that there was a new variable in the function
 * if  it's a new variable, it doesn't matter it is 'let' or 'const' */

// //#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`); /** a = 5 */
// }
// alert(`outside of the if block ${a}`); /** a = 2 */

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
/** it is a two diferetn variable, so it will work */


/** EXERCISE 2*/

// const winBattle = () => true;
// let experiencePoints = winBattle ?  10: 1;
// console.log(experiencePoints);


/** EXERCISE 3*/

// const isString = (arg) => typeof(arg) == 'string' ? true : false;

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// // false


/** EXERCISE 4 */

// const sum = (a,b) => a+b;
// console.log(sum(2,3));


/** EXERCISE 5 */

// function kgInGrams(weight){
//     return weight * 1000
// }
// console.log(kgInGrams(2));

// const kgInGramsExpression = function(weight){
//     return weight * 1000
// };
// console.log(kgInGramsExpression(3));

// //you can call declaration function before declaration

// const kgInGramsArrow = (weight) => weight * 1000;
// console.log(kgInGramsArrow(1));


/** EXERCISE 6 */

// (function(numbOfChildren, partnerName ,location ,job ) {
//     let body = document.body
//     let sentence = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numbOfChildren} kids.`
//     body.innerHTML = sentence})(6,'Anastasiia', 'Peru', 'Developer')

// function fortuneTeller(numbOfChildren, partnerName,location,job) {
//     let sentence = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numbOfChildren} kids.`
//     let body = document.body
//     body.innerHTML = sentence
// }

/** EXERCISE 7 */

// (function(userName = prompt('Name')){
//     let name = document.createElement('h2');
//     name.innerHTML = userName
//     let nav = document.body.firstElementChild
//     let div = document.createElement('div')
//     let img = document.createElement('img')
//     img.src = 'https://img.freepik.com/free-photo/cute-kitten-sitting-outdoors-looking-at-camera-surrounded-by-snow-generated-by-artificial-intelligence_188544-84910.jpg'
//     img.width = 200
//     div.appendChild(name)
//     div.appendChild(img)
//     nav.appendChild(div)

// })()


/** EXERCISE 8  PART I*/


// function makeJuice(size){
//     function addIngredients(first,second,third){
//         let sentence = document.createElement('h3')
//         let body = document.body
//         sentence.innerHTML = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`
//         body.appendChild(sentence)
//     }
//     addIngredients('apple','banana','strawberry')
// }

// makeJuice('large')


/** EXERCISE 8  PART II*/

function makeJuice(size){
    const ingredients = [];

    function addIngredients(first,second,third){
        ingredients.push(first,second,third)
    }
    function displayJuice(){
        let sentence = document.createElement('h3')
        let body = document.body
        let text = `The client wants a ${size} juice, containing`
        for (let i = 0; i < ingredients.length;i++) {
            text += ` ${ingredients[i]},`
        }
        sentence.innerHTML = text.slice(0,(text.length -1))
        body.appendChild(sentence)
    }
    addIngredients('apple','banana','strawberry');
    addIngredients('grape','mango','kiwi');
    displayJuice();
}
makeJuice('large')