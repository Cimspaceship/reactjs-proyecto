import Item from "./Item"

export const ItemList = ({ products }) => {
    return (
        <ul className="d-flex">
            {products.map((product)=> (
                <Item product={product}/>
            ))}
        </ul>

    )
}

