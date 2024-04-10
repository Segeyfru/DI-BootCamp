const fs = require('fs')
// const path = require('path')

const readFile = (path)=>{
    let file = fs.readFileSync(path, 'utf8',function(err){
        if(err){
            throw Error(err)
        }
    })

    return file
};
const writeFile = (path,string) => {
    let file = fs.writeFileSync(path, string)
}

module.exports = {
    readFile,
    writeFile
}