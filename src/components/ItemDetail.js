import ItemCount from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useGetItemImg } from "../hooks/useGetItemImg";



const ItemDetail = ({item}) => {

  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const { addItem } = useContext(CartContext)
  const img = useGetItemImg(item.img);


  function handleAdd(count) {
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
             <img src={img} alt="product image detail"></img>
             </div>
             <div>
                       <Card.Title className="fs-2">$ {item.price}</Card.Title>
                       <Card.Text className="fs-3">
              {item.description}
                       </Card.Text>
           
           
             <ItemCount stock={item.stock} handleAdd={handleAdd}></ItemCount>
             
           </div>
        </Card.Body>

        <Card.Footer className="text-muted">
          <Button variant="success" onClick={handleCheckout}>Ir al Carrito</Button>{' '}
        
        </Card.Footer>
            </Card>
      </div>
    )
}

export default ItemDetail