import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail(item) {
  return (
    <div className="card shadow-sm">
            <div className="card-body">
              <h6>Nombre: {item.nombre}</h6>
              <img src={item.imagen} alt="" />
              <p>${item.precio}</p>
              <p>Descripcion: {item.descripcion}</p>
              <ItemCount stock="5" initial="1" />
              <button className="btn btn-primary m-3">Agregar al carrito</button>
            </div>
    </div>
  )
}

export default ItemDetail