import {greet} from './greeting.js'
import { colorstr} from './colorful-message.js'
import {readfile} from './read-file.js'



let name = 'John'
let string = greet(name)
console.log(string);
console.log(colorstr(string));
let text = readfile('./file/file-data.txt')
console.log(colorstr(text));