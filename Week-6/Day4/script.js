// function findIntersection(arr){
//     let arr1 = arr[0].split(',');
//     let arr2 = arr[1].split(',');
//     let ret = arr1.filter((item) => {
//         return arr2.includes(item)
//     });
//     return ret
// }
// console.log(findIntersection( ["1,2,5,6,7", "2,5,7,8,15"]));


// function findIntersection1(arr){
//     let num = []
//     let arr1 = arr[0].split(',');
//     let arr2 = arr[1].split(',');
//     for (let index = 0; index < arr1.length; index++) {
//         const element1 = arr1[index];
//         console.log(element1);
//         for (let index = 0; index < arr2.length; index++) {
//             const element2 = arr2[index];
//             console.log(element2);
//             if(element1 === element2){
//                 num.push(element2)
//             }
            
//         }
        
//     }
//     return num;
// }

// console.log(findIntersection1( ["1,2,5,6,7", "2,5,7,8,15"]));


// /**************************************************************************************************************************************************/

/** JSON */

// let posts1 = `[
//     {
//       "userId": 5,
//       "id": 41,
//       "title": "non est facere",
//       "body": "molestias id nostrumexcepturi molestiae dolore omnis repellendus quaerat saepeconsectetur iste quaerat tenetur asperiores accusamus ex utnam quidem est ducimus sunt debitis saepe"
//     }
//   ]`;
// let posts = `[
//     {
//       "userId": 4,
//       "id": 31,
//       "title": "ullam ut quidem id aut vel consequuntur",
//       "body": "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae"
//     }
//   ]`;
// let arr = JSON.parse(posts1);
// console.log(arr);


            /** Exeption */

          
function x(){
  try{
  hello;
}catch (e){
  throw new Error('Opss...');
}
}
function y(){
  try{
    x();
  }catch(e){
    console.log(e.message,e.name,e.);
  }
}
console.log('before');





console.log('after');