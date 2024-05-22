//  index keys

interface EmployeeInterface {
    readonly [key: string]: string | number
    name: string;
    age: number;
    role: string
}

let employee1: EmployeeInterface = {
    name: 'john',
    age: 30,
    role: 'Developer',
    // email:'jjsssj@mail.com'
}

// console.log(employee1['name']);
// console.log(employee1.name);
// employee1['email'] = 'jjj@mail.com'
// console.log(employee1['email']); // error

// dynamic key
let prop: string = 'name'
// console.log(employee1[prop]);
// console.log(employee1[prop as keyof EmployeeInterface]);

// for(let key in employee1){
//     console.log(key, employee1[key as keyof EmployeeInterface]);
//     console.log(key, employee1[key]);   
// }


// Object.keys(employee1).forEach(key)=>{
//     console.log(key, employee1[key as keyof typeof employee1]);
//     console.log(key, employee1[key as keyof typeof employee1]);
// }

const logEmployee = (employee: EmployeeInterface, key: keyof EmployeeInterface) => {
    console.log(key, employee1[key]);
}

logEmployee(employee1, 'role')

// Record type <T, U>

type names = 'name' | 'age' | 'role'
type NewEmployee = Record<names, string | number>


let employee2: NewEmployee = {
    name: 'john',
    age: 30,
    role: 'developer'
}
for (const key in employee2) {
    console.log(key, employee2[key as keyof NewEmployee]);

}


/**
 * Generics
 */

const strEcho = (arg: string): string => arg

const echo = <T>(arg: T): T => arg

//  to check the type in it is an object

const isObj = <T>(arg: T): boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null
}

console.log(isObj({ name: 'jane' }));
console.log(isObj(['name', 'jane']));
console.log(isObj(2));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (typeof arg === 'object' && !Object.keys(arg as keyof T).length) {
        return { arg, is: true }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(employee1));

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBool = <T>(arg: T): BoolCheck<T> => {
    return { value: arg, is: !!arg }
}


interface HasId {
    id: number
}

const hasId = <T extends HasId>(arg: T): number => {
    return arg.id
}


const userJson = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]


// console.log(hasId(userJson[3]));

/**
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    
  },
 */

const getUserInfo = <T extends HasId, K extends keyof T>(user: T[], key: K): T[K][] => {
    return user.map(user => user[key])
}

console.log(getUserInfo(userJson, 'name'));


class StateObject<T> {
    private _state: T;
    constructor(initialState: T) {
        this._state = initialState
    }
    get state(): T {
        return this._state
    }
    set state(newState: T) {
        this._state = newState
    }
}

const username = new StateObject('Jack')
username.state = 'Doe'
console.log(username.state);

const username1 = new StateObject(132)
username1.state = 123
console.log(username1.state);

const username2 = new StateObject<string | number>(132)
username2.state = '2323'
console.log(username2.state);

const username3 = new StateObject<string[]>(['st', 'wew'])
username3.state = ['wd', 'wd']
console.log(username3.state);

// intersections type

type Admin = {
    name: string,
    role: string
}

type User = {
    email: string
}

interface Address {
    city: string,
    street: string
}
type UserAdmin = Admin | User

const userAdmin: UserAdmin & Address = {
    name: 'jane',
    role: 'developer',
    email: 'jjj@mail.com',
    city: 'Tel-aviv',
    street: 'Chen'
}

interface Post {
    title: string,
    content: string,
    // date:Date,
    author?: string

}

const post1: Post = {
    title: 'Post title',
    content: 'content',
    // date:new Date(),

}

const updatePost = (post: Post, update: Partial<Post>): Post => {
    return { ...post, ...update }
}

const postWithAuthor: Post = updatePost(post1, { author: 'John' });


const updatePostAllData = (post: Required<Post>, update: Partial<Post>): Post => {
    return { ...post, ...update }
}

// console.log(updatePostAllData(postWithAuthor,{author:'Jack'}));

// ReadOnly

const readOnlyPOst: Readonly<Post> = { ...post1, author: 'jack' }

// readOnlyPost['content'] = 'new content' // error


// PIck or Omit 
type postTitle = Pick<Post, 'title' | 'content'>
type postAuthor = Omit<Post, 'titlt' | 'content'>


// Exclude

type Grade = 'A' | 'B' | 'C' | 'D' | 'F'
type Passed = Exclude<Grade, 'D' | 'F'>

// Extract

type Failed = Extract<Grade, 'D' | 'F'>

// NonNullable

type Nullable = string | null | undefined
type NonNullableString = NonNullable<Nullable>

const adminName: NonNullableString = 'undefined'

// Returt type
const createUser = (name:string|number, age:number, isTrue: boolean)=>{
    return{name,age}
};

type UserReturnType = ReturnType<typeof createUser>

const newUser:UserReturnType = createUser('Jane',30,true)

// Parameters type

type userParams = Parameters<typeof createUser>

const userParams1 :userParams = ['Jack',20,true]
// const newnewUser


// const sum =(a,b)=>{
//     return a+b
// }


