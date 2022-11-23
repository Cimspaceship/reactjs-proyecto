import ItemCount from "./ItemCount"
import {useState} from "react"
import ItemList from "./ItemList"


const productos = [
    {
     id:"1",
     name:"Fuente Aerocool Dorado 750W RGB",
     description:"PSU description",
     stock: 5,
     price: 45000,
     img:"https://github.com/Cimspaceship/reactjs-proyecto/blob/main/public/assets/productos/aerocool-dorado-750w-rgb.png",
    },
   
    {
     id:"2",
     name:"Mouse",
     description:"Mouse Description",
     stock: 2,
    }
   
   ]
   

function ItemListContainer({}) {

    const [products, setProducts] = useState([])
    

    const productList = new Promise((resolve) => setTimeout(()=>{resolve(productos)},3000))
    
    productList.then((data)=> setProducts(data))


    return (
        <div>
            <ItemList products={products}/>
        </div>
        
    )
}



export default ItemListContainer