import React from 'react'
import { useCarrito } from './CartContext'
import ItemCount from './ItemCount'

function ItemDetail({item}) {

  const { agregarProducto } = useCarrito();

  const onAdd = (contador) => {
    item.cantidad = contador
    agregarProducto(item)
}

  return (
    <div className='detailContainer '>
          <div className='d-flex'>
              <img src={item.image} alt={item.title} />
              <div>
                <h6>{item.title}</h6>
                
                <p>${item.price}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
              </div>
              <div>
                <p>{item.description}</p>
              </div>
               
          </div>
      </div>
  )
}

export default ItemDetail
