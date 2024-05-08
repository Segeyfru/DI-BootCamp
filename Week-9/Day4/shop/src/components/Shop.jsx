import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const Shop = () => {

    const [products, setProducts] = useState([])
    const [name,setName] =useState('')
    const [price,setPrice] =useState('')

    useEffect(() => {
        getall()
    }, [])


    const getall = async () => {
        try {
            const res = await fetch('http://localhost:3001/api/products')
            const data = await res.json();
           
            setProducts(data)
        } catch (error) {
            console.log(error);

        }
    }

    const addProduct =async(e) =>{
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,price})
        }
        try {
            const res = await fetch('http://localhost:3001/api/products', options)
            const data = await res.json()
           
            setProducts(data)

            setName('')
            setPrice('')
            e.target.name.value = ''
            e.target.price.value = ''
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2>Shop</h2>
            <form action="" onSubmit={(e) =>addProduct(e)}>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Product Name..." name="name"/>
                <input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Product Price..." name="price"/>
                <input type="submit" value="Add Product" />
            </form>
            {
                products.map((item, i) => {
                    return (
                        
                            <div key={i} style={{ border: '1px solid black', margin: '5px', padding: '10px 15px' }}>
{item.name}, {item.price} <br />
                              <Link to={`/product/${item.id}`}> BUY! </Link>

                            </div>
                       
                    )
                })
            }
        </>
    )
}

export default Shop