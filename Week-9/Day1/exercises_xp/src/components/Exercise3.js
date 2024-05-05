import './Exercise.css'

const Exercise = (props)=>{
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
return (<>
    <h1 style={style_header}>This is a header</h1>
    <p className="para">This is paragraph</p>
    <a href="#">This is a link</a><br></br>
    {/* <form>
        <label for="name">Name: </label>
        <input name="name"></input>
        <input type="submit" ></input>
    </form> */}
    <img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" style={{width:"400px"}}></img>


</>)
}

export default Exercise