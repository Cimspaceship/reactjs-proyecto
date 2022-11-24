import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {productos} from "../mocks/products.mock"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item,setItem] = useState(null)
    const {id} = useParams()
    
    
    useEffect(()=> {
        new Promise((resolve)=>
        setTimeout(()=> {
            resolve(productos);
        },2000)
        ).then((data)=> {
            if(id) {
                const ids = data.find((product)=> product.id === id)
                setItem(ids)
            } else {
                setItem(data)
            } 
        })
    },[id])


    
    return <ItemDetail item={item}/>

}



export default ItemDetailContainer