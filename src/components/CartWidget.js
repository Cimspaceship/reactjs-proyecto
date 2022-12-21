import { BsFillCartFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";


const CartWidget = () => {
    const { carrito } = useContext(CartContext)
    const number = carrito.length
    return (
            <Link to="/cart">
               <div>
                   <BsFillCartFill size="35px" color='green' className=""/>
                   {number > 0 && <span className="text-white text-decoration-none">{number}</span>}
               </div>
             </Link>
    )
}

export default CartWidget