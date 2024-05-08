import { useState, useEffect } from "react"
import "../../public/data.json"

const PostList = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getall()
    }, [])

    const getall = async () => {
        try {
            const res = await fetch('../../public/data.json')
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log('ERROR=>', error);
        }


    }

    return (
        <>
            {
                posts.map((item, i) => {
                    return <div key={i}>
                        <h2>{item.title} </h2>
                        <h3>{item.content}</h3>
                    </div>
                })
            }
        </>
    )
}
export default PostList