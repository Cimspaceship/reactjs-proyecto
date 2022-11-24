import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"



function Body() {
    return (
        <section className="Body">

            <div className="ItemListContainer">
                <ItemListContainer/>
                <ItemDetailContainer/>
            </div>
        </section>
    )
}



export default Body