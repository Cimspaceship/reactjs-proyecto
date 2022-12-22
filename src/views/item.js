import { Layout } from '../components/Layout';
import {useParams} from "react-router-dom"
import ItemDetail from "../components/ItemDetail";
import { productos } from "../mocks/products.mock";
import ItemDetailContainer from "../components/ItemDetailContainer";



const ItemView = () => {

    return (
    <Layout>
        <ItemDetailContainer />
    </Layout>
    )
}

export default ItemView