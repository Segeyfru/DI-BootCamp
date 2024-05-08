import { useState, useEffect } from "react"
const SocialMedias = () =>{

    const [socialMedia, setSocialMedia] = useState([])

    useEffect(() =>{
        fetchMedias()
    },[])

    const fetchMedias = async() =>{
        try {
            const res = await fetch('../../public/exercise_3.json')
            const data = await res.json()
            setSocialMedia(data.SocialMedias)
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <h2>SocialMedia</h2>
        {
            socialMedia.map((item,i) =>{
                return <div key={i} style={{textAlign:"left"}}> {item}</div>
            })
        }
        </>
    )
}

export default SocialMedias