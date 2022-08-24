import React from 'react'
import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { contexto } from './CartContext'


function ItemDetail(item) {

  const [estadoPadre, setEstadoPadre] = useState(0)

  const customMethod = (param) => {
    setEstadoPadre(param)
  }

  const { agregarProducto } = useContext(contexto)

  const onAdd = () => {
    item.cantidad=estadoPadre
    agregarProducto(item)
    console.log("se compro "+estadoPadre+"elementos");
  }

  return (
    <div className="card shadow-sm">
            <div className="card-body m-5">
              <h6>Nombre: {item.nombre}</h6>
              <img src={item.imagen} alt="" />
              <p>${item.precio}</p>
              <p>Descripcion: {item.descripcion}</p>
              <ItemCount estadoPadre={estadoPadre} stock={5} onAdd={onAdd} customMethod={customMethod}/>
            </div>
    </div>
  )
}

export default ItemDetail
