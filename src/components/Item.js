import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "./Item.css"
import { CartContext } from "../context/cartContext"



 




export const Item = ({product, quantityAdded}) => {

  function goDetail() {
    navigate(`/item/${product.id}`)
  }

  const navigate = useNavigate()


    return (
      <div className='.d-inline-flex' >
        <Card className='pointer'  onClick={goDetail} style={{ width: '18rem', margin:'2rem'}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <div className='d-flex justify-content-evenly '>
              <span>${product.price} </span>
              <span>{quantityAdded ? "Agregados" : "En Stock"}:{" "}
            {quantityAdded || product.stock}</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    
    </div>
    )
}

export default Item