import chalk from 'chalk'

export const  colorstr = (str) =>{
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        
        if(i%3 == 0){
            arr[i] = chalk.red(arr[i])
        }else if(i%3 == 1){
            arr[i] = chalk.blue(arr[i])
        }else if(i%3 == 2){
            arr[i] = chalk.green(arr[i])
        }
    }
    let colorstr = arr.join(' ')
    return colorstr
}
// const red = (word)=> chalk.red(word);
// const blue = (word) => chalk.blue(word);
// const green = (word) => chalk.green(word);

// console.log(red('Hello'),blue('dear'),green('friend'));

// let string = 'It seems like youre referring to the'
// console.log(colorstr(string));

