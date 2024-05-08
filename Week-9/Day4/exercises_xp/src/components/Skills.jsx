import { useState, useEffect } from "react"

const Skills = () =>{
    
    
        const [skills, setSkills] = useState([])
    
        useEffect(() =>{
            fetchSkills()
        },[])
    
        const fetchSkills = async() =>{
            try {
                const res = await fetch('../../public/exercise_3.json')
                const data = await res.json()
                setSkills(data.Skills)
                
            } catch (error) {
                console.log(error);
            }
        }
    return (
        <>
        <h2>Skills</h2>
        {
            skills.map((item,i)=>{
                return (
                <div key={i} style={{textAlign:"left"}}>
                    <h3>{item.Area}</h3>
                    <ul>
                    {
                        item.SkillSet.map((item2, j) =>{
                            return <li key={j}>{item2.Name}</li>
                        })
                    }</ul>
                </div>
            )
            })
        }
        </>
    )
}

export default Skills