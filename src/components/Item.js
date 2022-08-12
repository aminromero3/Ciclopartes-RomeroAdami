import React from 'react'

function Item({producto}) {
  return (
      <div className="col">
        <div className="card shadow-sm">
            <div className="card-body">
                <h6>{producto.nombre}</h6>
                <img src={producto.imagen} alt="" />
                <p>${producto.precio}</p>
                <button>Ver detalle</button>
            </div>
        </div>
      </div>
    )
}

export default Item