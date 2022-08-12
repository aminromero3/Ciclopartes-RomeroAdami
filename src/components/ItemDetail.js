import React from 'react'

function ItemDetail(item) {
  return (
    <div className="card-body">
        <h6>{item.nombre}</h6>
        <img src={item.imagen} alt="" />
        <p>${item.precio}</p>
        <p>{item.descripcion}</p>
    </div>
  )
}

export default ItemDetail