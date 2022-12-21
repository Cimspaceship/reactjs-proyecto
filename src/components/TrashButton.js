import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';



export const TrashButton = ({ itemId }) => {
    const { removeItem } = useContext(CartContext);
    return (


        <Button onClick={() => removeItem(itemId)} variant="danger">Danger</Button>

    )}