
import {Layout} from '../components/Layout';
import {useParams} from "react-router-dom"
import Item from "../components/Item";
import { productos } from "../mocks/products.mock";
import {ItemListContainer} from "../components/ItemListContainer"



const CategoryView = () => {
    return (
    <Layout>
        <ItemListContainer />
    </Layout>
    )
}

export default CategoryView