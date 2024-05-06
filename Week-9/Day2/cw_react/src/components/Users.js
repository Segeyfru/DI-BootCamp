import './Users.css'

const Users = (props) => {
    // const {info} = props
    console.log(props);
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
        <div /**style={style}*/ className='tc dib br3 pa3 ma2 bg-light-green grow shadow-5'>
        <img src={`https://robohash.org/${props.id}?size=150x150`}></img>
        <h2>{props.name}</h2>
        <h3>{props.username}</h3>
        <h3>{props.email}</h3>
        </div>
    );
};
export default Users