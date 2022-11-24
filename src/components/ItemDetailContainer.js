import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {productos as itemMock} from "../mocks/products.mock"


const ItemDetailContainer = () => {
    const [item,setItem] = useState(null)


useEffect(()=> {
    new Promise((resolve)=> setTimeout(()=>resolve(itemMock[0]),200)).then((data)=>setItem(data))
})

if (!item) {
    return <p>loading</p>
}
    return <ItemDetail item={item}/>

}



export default ItemDetailContainer