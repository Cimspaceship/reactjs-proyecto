import ItemCount from "./ItemCount"

function ItemListContainer({greeting}) {
    return (
        <div>
        <h1>Productos destacados</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemCount/>
        </div>
    )
}



export default ItemListContainer