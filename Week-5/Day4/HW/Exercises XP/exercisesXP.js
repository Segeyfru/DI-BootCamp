
// // Exercise 1 : Change The Article

// // Using a DOM property, retrieve the h1 and console.log it.
// // Using DOM methods, remove the last paragraph in the <article> tag.
// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// // part1
// let article_ar = document.body.firstElementChild
// let h1_text = document.querySelector('h1')
// console.log(article_ar.firstElementChild.textContent);
// console.log(h1_text.textContent);
// // part2
// article_ar.removeChild(article_ar.lastElementChild)
// let h2 = article_ar.children[1]
// console.log(h2);
// // part3
// h2.onclick = function(){
//     h2.style.background = 'red'
// }
// // part4
// article_ar.children[2].onclick = function(){
//     article_ar.children[2].style.display = 'none'
// }
// // part5
// let btn = document.createElement('button')
// btn.innerHTML='Click on me'
// btn.style.padding = '5px 15px'
// btn.style.borderRadius = '4px'
// article_ar.appendChild(btn)
// let all_p = document.getElementsByTagName('p')
// console.log(all_p);

// btn.onclick = function(){
//     for (const p of all_p) {
//         p.style.fontWeight = 'bold'
//     }    
// }

// // part6
// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)


// // h1_text.onmouseover = function(){
// //     let rand_px = Math.random() * 100
// //     console.log(rand_px);
// //     h1_text.style.fontSize = `${rand_px}px`
// // }

// // part7
// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// h2.onmouseover = function(){
//     h2.style.opacity = '0'
//     h2.style.transition = 'opacity 1s ease'
// }

// h2.onmouseout = function(){
//     h2.style.opacity = '1'
//     h2.style.transition = 'opacity 1s ease'
// }


// Exercise 2 : Work With Forms

// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
    // use event.preventDefault(), why ?
    // get the values of the input tags,
    // make sure that they are not empty,
    // create an li per input value,
    // then append them to a the <ul class="usersAnswer"></ul>, below the form.


let form = document.body.firstElementChild

let submit = document.getElementById('submit')


// submit.onclick =  function getInputs (event){
//     event.preventDefault(); 
//     let fname = document.getElementById('fname').value;
//     let lname = document.getElementById('lname').value;
//     console.log(lname, fname);
// }

// submit.onclick =  function getInputs2 (event){
//     event.preventDefault(); 
//     let fname = document.getElementsByName('firstname')[0].value
//     let lname = document.getElementsByName('lastname')[0].value;
//     console.log( fname, lname);
// }

let ul = document.getElementsByClassName('usersAnswer')
console.log(ul);
submit.onclick = function saveInputs(e){
    e.preventDefault(); 
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    if (fname.length == 0){
        alert('Write you first name')
        return
    }else if(lname.length == 0){
        alert('Write you last name')
        return
    }
    let li_fname = document.createElement('li')
    let li_lname= document.createElement('li')
    li_fname.innerHTML = `${fname}`
    ul[0].appendChild(li_fname)
    li_lname.innerHTML = `${lname}`
    ul[0].appendChild(li_lname)

}
