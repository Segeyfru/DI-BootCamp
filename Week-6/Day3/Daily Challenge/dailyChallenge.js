class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader =uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time}sec of ${this.title}`);
    }
}

let newVideo = new Video('Funy cat','user1154',135);
newVideo.watch();

let newVideo2 = new Video('Dog and mirror', 'Vasya Pupkin', 94)
console.log(newVideo);


// option 1
let arr = [
    ['video1', 'video2', 'video3', 'video4', 'video5'],
    ['user321','user9485','user744','user5621','user1054'],
    [434, 646,854,120,65]
]
let arrOfVideos = []

for(let i =0; i< arr[0].length; i++){
    let video = new Video(arr[0][i], arr[1][i],arr[2][i])
    arrOfVideos.push(video)
}
console.log(arrOfVideos);

// the better method
let arr1 = [
    {title:'video10',uploader:'user12',time:34},
    {title:'video654',uploader:'user654',time:340},
    {title:'video8123',uploader:'user654',time:8123},
    {title:'video345',uploader:'user345',time:345},
    {title:'video610',uploader:'user610',time:65},
]
let arrOfVideos1 = []

arr1.forEach((item) => {
    let {title,uploader,time} = item
    arrOfVideos1.push(new Video(title,uploader,time))
})

console.log(arrOfVideos1);