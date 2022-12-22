import {useState,useEffect} from "react"
import {ItemList} from "./ItemList"
import {productos} from "../mocks/products.mock"
import {useParams} from "react-router-dom"
import { useGetItem } from "../hooks/useGetItem";



   
export const ItemListContainer = () => {
    
    const items = useGetItem();

    return (
        <div>
            
            <ItemList products={items} />
            
        </div>
        
    )
}



/* export default ItemListContainer */