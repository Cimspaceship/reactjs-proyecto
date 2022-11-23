import React from 'react';
import { useState, useEffect } from 'react';

export default function ItemCount() {
  const [stock, setStock] = useState(5);
  const [currentAmount, setCurrentAmount] = useState(0)
  console.log(`el stock es ${stock}`)
  
  
  return (
    <div>
      <button disabled={currentAmount == 0 } onClick={()=> setCurrentAmount(currentAmount-1)}>-</button>
      <p>{currentAmount}</p>
      <button disabled={currentAmount == stock }  onClick={()=> setCurrentAmount(currentAmount+1)}>+</button>

      <button disabled={currentAmount == 0 || stock == 0} onClick={()=> setStock(stock-currentAmount) || setCurrentAmount(0)}>agregar al carrito</button>
    </div>

  );
}

