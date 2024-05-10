import { useState,useEffect } from "react"
import { createClient } from "pexels"

const Beaches =() =>{
    const [images, setImages] = useState([])
    const [numOfImages, setNumOfImages] = useState(20)

    useEffect(() => {
        getImages()

    }, [])

    const client = createClient('wls3MjPjvfATgXTHsyegeOCpDPUMlgXiHsWbmqA8J9Sqyct2jrEx225d');
    const query = 'Beaches';

    const getImages = async () => {
        client.photos.search({ query, per_page: numOfImages })
            .then(photos => {
                setImages(photos.photos)
            });
    }



    return (
        <>
            <h2>Beaches</h2>
            {
                images.map((item, i) => {
                    return <img key={i} src={item.src.small} alt="" />
                })
            }
        </>
    )
}

export default Beaches