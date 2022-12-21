import ItemCount from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";



const ItemDetail = ({item}) => {

  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const { addItem } = useContext(CartContext)

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
    addItem(item, count)
  }

  function handleCheckout() {
    navigate("/cart");
  }

  
    return (
      <div className="text-center">
        <Card className="text-center d-inline-flex w-75">
        <Card.Header className="fs-1">{item.name}</Card.Header>
        <Card.Body className="d-flex justify-content-around">
           <div>
             <img src={item.img} alt="product image detail"></img>
             </div>
             <div>
                       <Card.Title className="fs-2">$ {item.price}</Card.Title>
                       <Card.Text className="fs-3">
              {item.description}
                       </Card.Text>
           
           
             <ItemCount count={count} handleCount={handleCount}></ItemCount>
             <Button variant="success" onClick={handleAdd}>Agregar al carrito</Button>
           </div>
        </Card.Body>

        <Card.Footer className="text-muted">
          <Button variant="success" onClick={handleCheckout}>Finalizar Compra</Button>{' '}
        
        </Card.Footer>
            </Card>
      </div>
    )
}

export default ItemDetail