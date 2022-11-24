const ItemDetail = ({item}) => {
    return (
        <div>
      <div>{item.name}</div>
      <img src={item.img} alt="alt" />
    </div>
    )
}

export default ItemDetail