import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    return (
        <Card style={{ width: '18rem', margin:'2rem'}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Link to={`/item/${product.id}`}><Button variant="primary">Añadir al Carrito</Button></Link>
        </Card.Body>
      </Card>
    )
}

export default Item