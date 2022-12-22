import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {initial} from 'react'


const ItemCount = ({stock, handleAdd}) =>  {
  const [count, setCount] = useState(1)

  const sumar= () => {
    if(count < stock) {
        setCount(count + 1)
    }
}
const restar= () => {
    if(count > initial) {
        setCount(count - 1)
    }
}

  return (
    <div className='d-flex justify-content-evenly'>

      <span className='m-2'><button  onClick={restar}>-</button></span>

      <span id='counter' className='m-2'>
        <p>{count}</p>
      </span>

      <span className='m-2'><button  onClick={sumar}>+</button></span>

      <Button variant="success" onClick={() =>handleAdd(count)}
        >Agregar al carrito</Button>

    </div>

  );
}

export default ItemCount

