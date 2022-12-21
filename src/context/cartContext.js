import React, { createContext, useState, } from 'react';

export const CartContext = createContext([]);


export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

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
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, carrito  }}>{children}</CartContext.Provider>
    );
};