import { useState } from "react";

const Forms = () => {

    const [inputs, setInputs] = useState()


    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

    }
    const handelInputs = (e) => {
        const { value, checked, type, name } = e.target;
        const inputValue = type === 'checkbox' ? checked : value
        setInputs({ ...inputs, [name]: inputValue })
    }

    return (
        <>
            <h2>Contact</h2>
            <form onSubmit={handelSubmit}>
                <input
                    name="name"
                    onChange={(e) => handelInputs(e)}
                    placeholder="Name..."
                /> <br />
                <input
                    name="email"
                    onChange={(e) => handelInputs(e)}
                    type="email"
                    placeholder="Email..."
                /> <br />
                <select name="num" onChange={(e) => handelInputs(e)}>
                    <option value={1}>one</option>
                    <option value={2}>two</option>
                    <option value={3}>tree</option>
                </select><br />
                Yes/No <input name="yesNo" onChange={(e) => handelInputs(e)} type="checkbox" /> <br />
                Male<input onChange={(e) => handelInputs(e)} type="radio" name="gender" value="male"/>
                Female<input onChange={(e) => handelInputs(e)} type="radio" name="gender" value="female"/><br />

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
export default Forms



// import { useState } from "react";

// const Forms = () => {

//     const [inputs,setInputs] = useState()

//     // const [name, setName] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [num, setNum] = useState();
//     // const [yesNo, setYesNo] = useState(false);

//     const handelSubmit = (e) => {
//         e.preventDefault();
//         console.log(name, email,num,yesNo);
//         setEmail('')
//         setName('')
//     }
//     const handelInputs = (e)=>{

//     }

//     return (
//         <>
//             <h2>Form</h2>
//             <form onSubmit={handelSubmit}>
//                 <input
//                 name="name"
//                     onChange={(e) => { setName(e.target.value) }}
//                     placeholder="Name..."
//                     value={name}
//                 /> <br />
//                 <input
//                 name="email"
//                     onChange={(e) => { setEmail(e.target.value) }}
//                     value={email}
//                     type="email"
//                     placeholder="Email..."
//                 /> <br />
//                 <select name="num" onChange={(e)=>setNum(e.target.value)}>
//                     <option value={1}>one</option>
//                     <option value={2}>two</option>
//                     <option value={3}>tree</option>
//                 </select><br />
//                 Yes/No <input name="yesNo" onChange={(e)=>setYesNo(e.target.checked)} type="checkbox" name="" id="" /> <br />

//                 <input type="submit" value="Submit" />
//             </form>
//         </>
//     )
// }
// export default Forms