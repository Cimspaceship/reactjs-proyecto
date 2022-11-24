import {useState,useEffect} from "react"
import ItemList from "./ItemList"
import {productos} from "../mocks/products.mock"



   
function ItemListContainer({}) {

    const [products, setProducts] = useState([])
    
    useEffect(()=> {
        new Promise((resolve)=>
        setTimeout(()=> {
            resolve(productos);
        },3000)
        ).then((data)=> setProducts(data))
    },[])

    return (
        <div>
            
            <ItemList products={products}/>
            
        </div>
        
    )
}



export default ItemListContainer