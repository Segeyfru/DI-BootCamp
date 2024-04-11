const fs = require('fs')

function readAndWrite(){
    let text = fs.readFileSync('source.txt', 'utf8')
    console.log(text);
    fs.writeFileSync('./destination.txt', text,function (err) { 
        if (err){ 
            console.log(err);
        }
        else{
            console.log('Write operation complete.');
        }})
}
readAndWrite()
