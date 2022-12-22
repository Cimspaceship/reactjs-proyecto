import {ItemList} from "./ItemList"
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