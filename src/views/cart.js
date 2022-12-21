import {Layout} from '../components/Layout'
import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import {Item} from "../components/Item"
import {TrashButton} from "../components/TrashButton"

const Cart = () => {
    const navigate = useNavigate();
    const { carrito, clear } = useContext(CartContext);

    const handleFinalizePurchase = () => {
          clear();
          alert("Compra finalizada");
          navigate("/");
        }

        return (
        <Layout>
          <div>
        {carrito.length === 0 ? (
          <div className='m-3'>
            <h1>No has agregado productos al carrito</h1>
          </div>
        ) : (



          <div>
            <div>
              {carrito.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div>
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashButton itemId={product.item.id}></TrashButton>
                  </div>
                );
              })}
            </div>
            <div>
              



              <button
                  onClick={handleFinalizePurchase}
                >Finalizar Compra</button>
              
            </div>
          </div>
        )}
      </div>
        </Layout>
        )
    }
    
    export default Cart

