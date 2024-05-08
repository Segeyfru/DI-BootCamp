
import { Link } from "react-router-dom"
const Shop = () => {

    return (
        <>
            <h2>Shop</h2>
            <div>
                <h3>Product 1</h3>
                <Link to='/product/1'>Buy</Link>
            </div>
            <div>
                <h3>Product 2</h3>
                <Link to='/product/2'>Buy</Link>
            </div>
        </>
    )
}

export default Shop