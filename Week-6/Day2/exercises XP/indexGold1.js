// exercise 1

// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });
// /** [2,4,6] */

// exercise 2

// let arr = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
// );
// /** [[1,2],0,1,2,3] */
// console.log(arr); // almost /** [1,2,0,1,2,3] */

// exercise 3

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);  /**  1 0 \n 2 1 \n 4 2 \n 5 3 \n 8 4 \n 9 5 */
//     alert(num);
//     return num * 2;
// }); /** [2,4,8,10,16,18] */
// console.log(newArray);

// exercise 4

const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array);

let arr = array.reduce((total,item) => {
    console.log(item[0])
    return total.concat(item)
})

console.log(arr);






const greeting = [
    ["Hello", "young", "grasshopper!"],
    ["you", "are"],
    ["learning", "fast!"],
];


//["Hello young grasshopper!","you are","learning fast!"].






const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]