const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

let header = document.getElementById('header')
let container = document.getElementById('container')
let main = document.getElementById('main')
let search = document.getElementById('search')
search.addEventListener('input',searchRobot)

fillWithRobots(robots)

function fillWithRobots(arr){
    arr.forEach(element => {
        createRobot(element);        
    });
}

function createRobot(obj){
    let {id,name,username,email,image} = obj;
    let robot = document.createElement('div');
    robot.className = 'robot';
    robot.innerHTML = `
    <img src=${image} alt="">
    <h2>${name}</h2>
    <h4>${email}</h4>
    `;
    container.appendChild(robot);
    
    
}


function cleanRobots(){
    container.innerHTML = ''
}


function searchRobot(e){
    e.preventDefault()
    let userInput = search.value.toLowerCase()
    console.log(userInput);
    
    if(userInput.length > 0){
        console.log('hi');
        container.innerHTML = ''

        let searchRobot = robots.filter((item) => {
            return  item.name.toLowerCase().includes(userInput)
        })
        searchRobot.forEach(element => {
            createRobot(element);        
        });
    }else{
        fillWithRobots(robots)
    }
}