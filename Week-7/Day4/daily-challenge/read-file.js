import fs from 'fs'

export const readfile = (path) => {
    let text = fs.readFileSync(path,'utf-8');
    console.log(text);
    return text
}