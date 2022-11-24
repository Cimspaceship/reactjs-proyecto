import { Layout } from '../components/Layout';
import {useParams} from "react-router-dom"
import ItemDetail from "../components/ItemDetail";
import { productos } from "../mocks/products.mock";



const ItemView = () => {

    const {id} = useParams()
const ids = productos.filter((product)=> product.id === id)

    return (
    <Layout>
        {ids.map((product)=><ItemDetail item={product}/>)}
    </Layout>
    )
}

export default ItemView