import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);


export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0)


    useEffect(() => {
        const amount = carrito
          .map((product) => parseInt(product.item.price) * product.quantityAdded)
          .reduce((partialSum, a) => partialSum + a, 0);
        setTotalAmount(amount);
      }, [carrito]);

        function addItem(item, quantity) {
            const isAlreadyAdded = isInCart(item.id);
            if (isAlreadyAdded) {
                setCarrito((prevState) =>
                    prevState.map((productAdded) =>
                        productAdded.item.id === item.id
                            ? {
                                ...productAdded,
                                quantityAdded: productAdded.quantityAdded + quantity,
                            }
                            : productAdded
                    )
                );
            } else {
                setCarrito((prevState) =>
                    prevState.concat({ item, quantityAdded: quantity })
                );
            }
        }
        function removeItem(itemId) {
            setCarrito((prevState) =>
              prevState.filter((product) => product.item.id !== itemId)
            );
          }
        
          function clear() {
            setCarrito([]);
          }
        
          function isInCart(itemId) {
            return Boolean(carrito.find((product) => product.item.id === itemId));
          }
        

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, carrito, totalAmount  }}>{children}</CartContext.Provider>
    );
};