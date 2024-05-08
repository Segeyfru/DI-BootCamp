import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"

const Products = (props)=>{

    const [product, setProduct] =useState([])

    const params = useParams()

    useEffect(()=>{
        console.log('useEffect');
        info()
    },[])

    const info = async()=>{
        console.log('info');
        try {
            const res = await fetch(`http://localhost:3001/api/products/${params.id}`)
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
    }
    const back=()=>{

    }

    return (
        <>
        <h2>Product</h2>
        {
            product.map((item,i)=>{
                return (
                    <div key={i}>
                        <h2>{item.name}</h2>
                        <h3>{item.price}$</h3>
                        <Link to={'/'}> back to shopping</Link>
                    </div>
                )
            })
        }
        {/* <button onClick={()=>{back()}}></button> */}
        </>
    )
}

export default Products