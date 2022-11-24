
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from "./ItemDetailContainer"


const Item = ({product}) => {
    return (
        <Card style={{ width: '18rem', margin:'2rem'}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Button variant="primary">Añadir al Carrito</Button>
        </Card.Body>
      </Card>
    )
}

export default Item