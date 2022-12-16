import React from 'react';


const ItemCount = ({count, handleCount}) =>  {
  return (
    <div className='d-flex justify-content-evenly'>

      <span className='m-2'><button  onClick={() => handleCount("minus")}>-</button></span>

      <span id='counter' className='m-2'>
        <p>{count}</p>
      </span>

      <span className='m-2'><button  onClick={() => handleCount("plus")}>+</button></span>

    </div>

  );
}

export default ItemCount

