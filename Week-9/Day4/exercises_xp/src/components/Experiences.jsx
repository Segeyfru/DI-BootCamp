import { useState, useEffect } from "react"

const Experiences = () =>{


    const [experiences, setExperiences] = useState([])
    
    useEffect(() =>{
        fetchExperiences()
    },[])

    const fetchExperiences = async() =>{
        try {
            const res = await fetch('../../public/exercise_3.json')
            const data = await res.json()
            setExperiences(data.Experiences)
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
        <h2>Experiences</h2>
        {
            experiences.map((item,i)=>{
                return (
                    <div key={i} style={{textAlign: 'left'}}>
                        <img src={item.logo} alt="" /> <br />
                        <a style={{textDecoration: "underline"}} href={item.url}>{item.companyName}</a>
                        {
                             item.roles.map((item2,j )=>{

                                return (
                                    <div key={j}>
                                    <p style={{fontWeight:"bolder"}}>{item2.title}</p>
                                    <p>{item2.startDate}, {item2.location} </p>
                                    <p>{item2.description}</p>

                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
        </>
    )
}

export default Experiences