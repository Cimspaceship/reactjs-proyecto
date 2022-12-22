import {Layout} from '../components/Layout'
import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import {Item} from "../components/Item"
import { Button } from 'react-bootstrap'

const Cart = () => {
    const navigate = useNavigate();
    const { carrito, clear, totalAmount } = useContext(CartContext);

    const goToCheckout = () => {
      navigate("/checkout");
    };

    const exploreProducts = () => {
      navigate("/")
    }

        return (
        <Layout>
          <div>
        {carrito.length === 0 ? (
          <div className='m-3'>
            <h1>No has agregado productos al carrito</h1>
            <Button variant="success" onClick={exploreProducts}>Explorar productos</Button>
          </div>
        ) : (

          <div className="d-flex">
            <div>
              {carrito.map((product) => {
                const quantityAdded = product.quantityAdded;
                return (
                  <div className="d-inline-flex">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                  </div>
                );
              })}
            </div>



            <div>
                <p className='m-3 fs-1'>Total a pagar:<span className='fs-2'> ${totalAmount}</span></p>
                <Button variant="success" onClick={goToCheckout}>Ir al Checkout</Button>
            </div>

          </div>
        )}
      </div>
        </Layout>
        )
    }
    
    export default Cart

