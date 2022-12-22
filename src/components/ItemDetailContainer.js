import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {productos} from "../mocks/products.mock"
import { useParams } from "react-router-dom";
import { useGetItem } from "../hooks/useGetItem";


const ItemDetailContainer = () => {
    const item = useGetItem();

    
    
    return item.img && <ItemDetail item={item}/>

}



export default ItemDetailContainer