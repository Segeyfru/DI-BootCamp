interface UserCardProps{
    name?:string
    age?: number
}

const Usercard = ({name,age}: UserCardProps) =>{

    if(!name || !age){
       return(
        <>
        <h2>User Card</h2>
        </>
    )
    }

    return(
        <div style={{border:'1px solid black'}} >
        <div style={{display:"flex", alignItems:"center"}}>
            <h3>Name:</h3><p>{name}</p>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
            <h3>Age:</h3><p>{age}</p>
        </div>
        </div>
    )
    
}

export default Usercard