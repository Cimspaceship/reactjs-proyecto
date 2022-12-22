import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";
import { Button } from "react-bootstrap";

// firebase
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { carrito: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
  }, [updatingProducts]);

  return (
    <Layout>
      <div className="d-block text-center">
        <form onSubmit={handleFinalizePurchase} className="d-inline-flex justify-content">
          <div className=" m-5 d-inline-block">
            <input className="m-2"
              placeholder="Nombre Completo"
              required
            />
            <input className="m-2"
              placeholder="Numero de Telefono"
              type="number"
              required
            />
            <input className="m-2"
              placeholder="Email"
              type={"email"}
              required
            />
          </div>
          <div className="d-inline-block">
        
          <div className="m-3">Total a pagar: <strong>${totalAmount}</strong></div>
        
          <Button variant="success" type="submit" className="">Finalizar Compra</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutView;
