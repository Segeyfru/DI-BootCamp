import './Users.css'

import Button from '@mui/material/Button';
const Users = (props) => {
    const {info} = props
    // const style = {
    //     display:'inline-block',
    //     border: '1px solid black',
    //     margin:'20px',
    //     padding:'20px',
    //     textAlign:"center",
    //     backgroundColor:"cyan",
    // }
    // const imgstyle = {
    //     border:"1px solid black",
    //     borderRadius:'40%'
    // }
    return(
        <div /**style={style}*/ className='tc dib br3 pa3 ma2 bg-light-green grow'>
        <img src={`https://robohash.org/${info.id}?size=150x150`}></img>
        <h2>{info.name}</h2>
        <h3>{info.username}</h3>
        <h3>{info.email}</h3>
        </div>
    );
};
export default Users