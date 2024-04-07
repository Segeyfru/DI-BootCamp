/** Daily Challenge 1 */

const makeAllCaps = (arr) => {
    return new Promise((res, rej) => {
        let bollean = false;
        arr.forEach((element) => {
            if (typeof element === "string") {
                bollean = true;
            } else {
                rej("There is not only strings");
            }
        });
        if (bollean) {
            let arr1 = arr.map((element) => {
                return element.toUpperCase();
            });
            res(arr1);
        }
    });
};

const sortWords = (arr) => {
    return new Promise((res, rej) => {
        let bollean = false;
        if (arr.length > 4) {
            bollean = true;
        } else {
            rej("The length is less than 4");
        }

        arr.forEach((str) => {
            if (str === str.toUpperCase()) {
                bollean = true;
            } else {
                rej("They are not in Uppercase");
            }
        });
        if (bollean) {
            res(arr.sort());
        }
    });
};

// sortWords(['apple', "pear", "melon", "kiwi", "banana"])
// .then(res => console.log(res))
// .catch(error => console.log(error));

// makeAllCaps(["apple", "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//     .catch((error) => console.log(error));


/** Daily Challenge 2 */

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`;


let root = document.getElementById('root')


function toJS(jsonString)  {
    return new Promise((res,rej) =>{
        let jsObject = JSON.parse(jsonString);
        if (jsObject.length === 0) {
            rej('The object is empty')
        }else{
            res(jsObject)
        };
    });
};



function toMorse(morseJS){
    return new Promise((res,rej) => {
        let userInput = prompt('Write a word or an sentence').toLocaleLowerCase()
        root.innerHTML = `<h2>"${userInput}" gives you</h2>`
        let arrOfChar = userInput.replace(' ','').split('')
        // let uniqueChars = arrOfChar.filter(char => !morseJS[char]);
        // if (uniqueChars.length > 0){
        //     rej('Unknown symbols detected')
        // }else{
        //     let charsInMorse = arrOfChar.map(char => morseJS[char])
        //     res(charsInMorse)
        // }

        arrOfChar.forEach(char => {
            let bollean = Object.keys(morseJS).some(letter =>{
                return letter === char
            });
            if(!bollean){
                rej(`the character "${char}" doesn't exist in the morse javascript object`)
            }
        });
         let arr = arrOfChar.map((key) => morseJS[key])
        res(arr);
    });
    
};

function joinWords(morseTranslation){
    morseTranslation.forEach(str =>{
        let p = document.createElement('p')
        p.innerHTML = `<p>${str}</p>`
        root.appendChild(p)
    })
};

toJS(morse)
.then(res => toMorse(res))
.then(res => joinWords(res))
// .catch(err => console.log(`Error --> ${err}`))