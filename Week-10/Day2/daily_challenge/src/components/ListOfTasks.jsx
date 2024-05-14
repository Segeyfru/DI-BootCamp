
const ListOfTasks = (props) => {
    return (
        <>
        <input defaultValue="2024-05-08"type="date" onChange={(e)=>{
            console.log(e.target.value);
            console.log(typeof(e.target.value));
        }} name="" id="" />
        </>
    )
}

export default (ListOfTasks)