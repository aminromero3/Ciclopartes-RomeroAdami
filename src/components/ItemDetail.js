import React from 'react'
import { useState } from 'react'
import ItemCount from './ItemCount'



function ItemDetail(item) {



  //State Uplifting
  const [estadoPadre, setEstadoPadre] = useState(0)

  const customMethod = (param) => {
    setEstadoPadre(param)
  }

  return (
    <div className="card shadow-sm">
            <div className="card-body m-5">
              <h6>Nombre: {item.nombre}</h6>
              <img src={item.imagen} alt="" />
              <p>${item.precio}</p>
              <p>Descripcion: {item.descripcion}</p>
              <ItemCount estadoPadre={estadoPadre} stock={5} customMethod={customMethod}/>
            </div>
    </div>
  )
}

export default ItemDetail