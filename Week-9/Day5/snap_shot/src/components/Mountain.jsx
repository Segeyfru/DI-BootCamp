import { useState, useEffect } from "react"
import { createClient } from 'pexels';
import { useParams } from "react-router-dom";

const Mountain = (props) => {

    const [images, setImages] = useState([])
    const [numOfImages, setNumOfImages] = useState(20)
    
    const client = createClient('wls3MjPjvfATgXTHsyegeOCpDPUMlgXiHsWbmqA8J9Sqyct2jrEx225d');
    const query = useParams();

    useEffect(() => {
        getImages()

    }, [query.search,query.count])

    console.log(query);


    const getImages = async () => {
        client.photos.search({ query: query.search, per_page: query.count })
            .then(photos => {
                console.log(photos.photos[0]);
                setImages(photos.photos)
            });
    }

function toTitleCase(str) {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}

    return (
        <>
            <h2>{toTitleCase(query.search)}</h2>
            {
                images.map((item, i) => {
                    return <img key={i} src={item.src.small} alt="" />
                })
            }
        </>
    )
}

export default Mountain