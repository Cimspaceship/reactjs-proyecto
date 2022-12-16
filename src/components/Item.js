import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Item.css"



 




const Item = ({product}) => {

  function goDetail() {
    navigate(`/item/${product.id}`)
  }

  const navigate = useNavigate()


    return (
      <div className='.d-inline-flex' onClick={goDetail}>
        <Card className='pointer' style={{ width: '18rem', margin:'2rem'}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <div className='d-flex justify-content-evenly '>
              <span>${product.price} </span>
              <span>stock: {product.stock}</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    
    </div>
    )
}

export default Item