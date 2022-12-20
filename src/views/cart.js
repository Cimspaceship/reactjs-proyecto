import {Layout} from '../components/Layout'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import {Item} from "../components/Item"

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
          <div>
            <h1>No has agregado productos</h1>
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

                  </div>
                );
              })}
            </div>
            <div>
              
                <button
                  onClick={handleFinalizePurchase}
                >
                  Finalizar Compra
                </button>
              
            </div>
          </div>
        )}
      </div>
        </Layout>
        )
    }
    
    export default Cart

