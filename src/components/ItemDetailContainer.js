import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";



const itemMock = {
    id:"1",
    name:"producto",
    description:"item description",
    price:15000,
    photo:"kik",
}

const ItemDetailcontainer = () => {
    const [item,setItem] = useState(null)
}

useEffect(()=> {
    new Promise((resolve)=> setTimeout(()=>resolve(itemMock),200)).then((data)=>setItem(data))
})

if (!item) {
    return <p>loading</p>
}

return <ItemDetail item={item}/>

export default ItemDetailContainer