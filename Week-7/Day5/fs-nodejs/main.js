/** fs - sync  /  async  */
// const path = require('path')

// //  __dirname
// const _dirname = path.resolve()

// console.log(__dirname);
// console.log(_dirname);

const fs = require("fs").promises;

const read = async()=>{
    const data = await fs.readFile("./file/info", "utf-8");
    console.log(data);
}
read()

/** SYNC */
// try {
//     const data = fs.readFileSync(__dirname + "/file/info", "utf-8");
//     console.log(data);
// } catch (e) {
//     console.log("no such file");
// }

/** ASYNC */

// fs.readFile('/file/info', 'utf-8',(err,data)=>{
//     if(err){return console.log(err);}

//     console.log(data);
// })

/** Write File */

// let data = '1234567'
// fs.writeFile('./file/newfile',data, 'utf-8', (err)=>{
//     if(err)return console.log(err);
//     console.log('file created');
// })

/** Append */

// let data = ' 1q2w3er4t'
// fs.appendFile('./file/newfile',data,'utf-8', (err)=>{
//         if(err)return console.log(err);
//         console.log('file appended');})

/** Copy file */

// fs.copyFile('./file/newfile', './file/newfile1','utf-8', (err)=>{
//             if(err)return console.log(err);
//             console.log('file appended');})