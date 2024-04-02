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
let arr = [
    ['video1', 'video2', 'video3', 'video4', 'video5'],
    ['user321','user9485','user744','user5621','user1054'],
    [434, 646,854,120,65]
]
let arrOfVideos = []
// for (let i in arr){
//     for(let i)
// }

for(let i =0; i< arr[0].length; i++){
    let video = new Video(arr[0][i], arr[1][i],arr[2][i])
arrOfVideos.push(video)
}
console.log(arrOfVideos);