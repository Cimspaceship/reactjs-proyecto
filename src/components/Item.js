import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "./Item.css"
import { TrashButton } from './TrashButton';
import { useGetItemImg } from "../hooks/useGetItemImg";



 




export const Item = ({product, quantityAdded}) => {

  function goDetail() {
    navigate(`/item/${product.id}`)
  }

  const navigate = useNavigate()
  const img = useGetItemImg(product.img);


    return (
      <div className='.d-inline-flex' >
        <Card className='pointer'  style={{ width: '18rem', margin:'2rem'}}>
        <Card.Img onClick={goDetail} variant="top" src={img} />
        <Card.Body>
          <Card.Title onClick={goDetail}>{product.name}</Card.Title>
          <Card.Text>
            <div className='d-flex justify-content-evenly '>
              <span>${product.price} </span>
              <span>{quantityAdded ? "Agregados" : "En Stock"}:{" "}
            {quantityAdded || product.stock}</span>
                {quantityAdded && <TrashButton  itemId={product.id}></TrashButton>}
              
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    
    </div>
    )
}

export default Item