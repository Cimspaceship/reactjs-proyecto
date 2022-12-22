import ItemDetail from "./ItemDetail";
import { useGetItem } from "../hooks/useGetItem";


const ItemDetailContainer = () => {
    const item = useGetItem();

    
    
    return item.img && <ItemDetail item={item}/>

}



export default ItemDetailContainer