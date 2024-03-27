// exerciseXP_3

// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. 
//    This function should collect all the bold items inside the paragraph
//       and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let allBoldItems
let p = document.body.firstElementChild
console.log(p);
function getBoldItems(){
    allBoldItems = document.getElementsByTagName('strong')
}

function highlight(){
    for(let i = 0; i< allBoldItems.length;i++){
        allBoldItems[i].style.color = 'blue'
    }
}
// highlight()
function  returnItemsToDefault(){
    for(let i = 0; i< allBoldItems.length;i++){
        allBoldItems[i].style.color = 'black'
    }
}
// returnItemsToDefault()

getBoldItems()
p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', returnItemsToDefault)

// p.onmouseout = function(){
//     returnItemsToDefault()
// }
// p.onmouseover = function(){
//     highlight()
// }