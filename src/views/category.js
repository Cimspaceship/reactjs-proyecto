
import {Layout} from '../components/Layout';
import {useParams} from "react-router-dom"
import Item from "../components/Item";
import { productos } from "../mocks/products.mock";



const CategoryView = () => {

const {category} = useParams()
const categories = productos.filter((product)=> product.category === category)

    return (
    <Layout>
        {categories.map((product)=><Item product={product}/>)}
    </Layout>
    )
}

export default CategoryView