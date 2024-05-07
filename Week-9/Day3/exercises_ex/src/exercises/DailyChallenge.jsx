import { useState, useEffect} from "react"

const DailyChallenge = () => {
    const [user,setUser] = useState({
        firstName:'',
        lastName:'',
        age:'',
        gender:'',
        destination:'',
        nutsFree:'No',
        lactoseFree:'No',
        isVegan:'No',
    })
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [age, setAge] = useState('')
    // const [gender, setGender] = useState(null)
    // const [destination, setDestination] = useState('')
    // const [nutsFree, setNutsFree] = useState('No')
    // const [lactoseFree, setLactoseFree] = useState('No')
    // const [isVegan, setIsVegan] = useState('No')
    // const handleChange()

    // useEffect(()=>{
    //     console.log(firstName);
    // },[firstName,lastName,age,gender,destination,nutsFree,lactoseFree,isVegan])

    const handleChange = (e) => {
        e.preventDefault()
        const target = e.target.value;
        const name = e.target.name;
        console.log(target,name);
        const newUser = {...user}
        newUser[name] = target
        console.log('name', newUser[name]);
        console.log(newUser);
        console.log(e.target.type);

        if (e.target.type === 'checkbox') {
            console.log('checkbox');
            const status = e.target.checked ? 'Yes' : 'No';
            newUser[name] = status
        }else if(e.target.type === 'radio') {
            console.log('radio');
            console.log(e.target);
            const status = e.target.id;
            newUser[name] = status
        }
        setUser(newUser)
    }

    return (
        <>
            <h2 style={{ backgroundColor: 'brown',width:'100vw', textAlign: 'left', color: 'white' }}>Sample form</h2>
            <div className="sampaleForm">
                <form action="" style={{ textAlign: 'left' }}>

                    <div className="nameAndAge" >
                        <input onChange={(e)=>{handleChange(e)}} style={{ marginBottom: '10px' }} type="text" name="firstName" placeholder="First Name" />
                        <input onChange={(e)=>{handleChange(e)}} style={{ marginBottom: '10px' }} type="text" name="lastName" placeholder="Last Name" />
                        <input onChange={(e)=>{handleChange(e)}} style={{ marginBottom: '10px' }} type="number" name="age" placeholder="Age" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <input  onChange={(e)=>{handleChange(e)}} type="radio" name="gender" id="male"  />
                        <label htmlFor="male">Male</label>
                        <br />
                        <input  onChange={(e)=>{handleChange(e)}} type="radio" name="gender" id="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <h5>Select your destination</h5>
                        <select onChange={(e)=>{handleChange(e)}} name="destination" id="">
                            <option value="">-- Please Choose a destination --</option>
                            <option value="Japan">Japan</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    </div>
                    <div style={{ marginBottom: '25px' }}>
                        <h5>Dietary restrictions:</h5>
                        <div style={{ marginLeft: '30px' }}>
                            <input onChange={(e)=>{handleChange(e)}} type="checkbox" name="nutsFree" id="nutsFree" />
                            <label htmlFor="nutsFree">Nuts free</label>
                            <br />
                            <input onChange={(e)=>{handleChange(e)}} type="checkbox" name="lactoseFree" id="lactoseFree" />
                            <label htmlFor="lactoseFree">Lactose free</label>
                            <br />
                            <input onChange={(e)=>{handleChange(e)}} type="checkbox" name="isVegan" id="isVegan" />
                            <label htmlFor="isVegan">Vegan</label>
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <hr />
            <div className="enteredInformation">
                <h3 style={{ marginBottom: '10px' }}>Entered information:</h3>
                <p>Your name: {user.firstName} {user.lastName}</p>
                <p>Your age: {user.age}</p>
                <p>Your gender: {user.gender}</p>
                <p>Your destination: {user.destination}</p>
                <p>Your dietary restrictions:</p>
                <p style={{ marginLeft: '10px' }}>**Nuts free: {user.nutsFree}</p>
                <p style={{ marginLeft: '10px' }}>**Lactose free: {user.lactoseFree}</p>
                <p style={{ marginLeft: '10px' }}>**Vegan meal: {user.isVegan}</p>
            </div>
        </>
    )
}
export default DailyChallenge