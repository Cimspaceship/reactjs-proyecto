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
     img: "/assets/productos/aerocool-dorado-750w-rgb.png"
     ,
    },
   
    {
     id:"2",
     name:"Auriculares Viper Patriot v330",
     description:"Headset description",
     stock: 4,
     price: 25000,
     img:"/assets/productos/auriculares-viper-patriot-v330.png",
    },

    {
     id:"3",
     name:"Cooler Coolermaster Hyper 212 Black Edition",
     description:"CPU Cooler description",
     stock: 6,
     price: 12500,
     img:"/assets/productos/cooler-coolermaster-hyper212black.png",
    },

    {
     id:"4",
     name:"Fuente EVGA 500W 80PLUS WHITE",
     description:"PSU description",
     stock: 5,
     price: 28700,
     img:"/assets/productos/evga-500w-pluswhite.jpg",
    },
   
   ]
   

function ItemListContainer({}) {

    const [products, setProducts] = useState([])
    

    const productList = new Promise((resolve) => setTimeout(()=>{resolve(productos)},2000))
    
    productList.then((data)=> setProducts(data))


    return (
        <div>
            
            <ItemList products={products}/>
            
        </div>
        
    )
}



export default ItemListContainer