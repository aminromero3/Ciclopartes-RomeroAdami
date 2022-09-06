import React from 'react'
import { useCarrito } from './CartContext'
import ItemCount from './ItemCount'

function ItemDetail({item}) {

  const { agregarProducto } = useCarrito();

  const onAdd = (contador) => {
    console.log("se compro "+contador+" elementos");
    item.cantidad = contador
    agregarProducto(item)
}

  return (
    <div className="card shadow-sm">
          <div className="card-body m-5">
              <h6>{item.title}</h6>
              <img src={item.image} alt="" />
              <p>{item.description}</p>
              <p>${item.price}</p>
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          </div>
      </div>
  )
}

export default ItemDetail
