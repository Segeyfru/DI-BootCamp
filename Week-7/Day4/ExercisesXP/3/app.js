const {readFile,writeFile}  = require('./fileManager')



console.log(readFile('helloWorld.txt'));
console.log(writeFile('byeWorld.txt','Writing to the file'));
console.log(readFile('byeWorld.txt'));
