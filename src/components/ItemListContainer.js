import {useState,useEffect} from "react"
import ItemList from "./ItemList"
import {productos} from "../mocks/products.mock"
import {useParams} from "react-router-dom"



   
function ItemListContainer({}) {
    const {category} = useParams()
    const [products, setProducts] = useState([])
    
    useEffect(()=> {
        new Promise((resolve)=>
        setTimeout(()=> {
            resolve(productos);
        },2000)
        ).then((data)=> {
            if(category) {
                const categories = data.filter((product)=> product.category === category)
                setProducts(categories)
            } else {
                setProducts(data)
            }
        })
    },[category])

    return (
        <div>
            
            <ItemList products={products}/>
            
        </div>
        
    )
}



export default ItemListContainer