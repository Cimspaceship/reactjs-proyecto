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
        setCarrito(carrito.filter((item) => item.id !== itemId))
    }

    function nuke() {
        setCarrito([])
    }

    function isInCart(itemId) {
        Boolean(carrito.find((item) => item.id === itemId))
    }

    return (
        <CartContext.Provider value={{ carrito, addItem, removeItem, nuke, isInCart }}>{children}</CartContext.Provider>
    );
};