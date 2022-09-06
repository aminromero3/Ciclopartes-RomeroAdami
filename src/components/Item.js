import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
      <div className="col">
        <div className="card shadow-sm">
            <div className="card-body">
                <h6>{producto.title}</h6>
                <img src={producto.image} alt="" />
                <p>{producto.description}</p>
                <p>${producto.price}</p>
                <NavLink to={`/item/${producto.id}`} className="btn btn-primary">Ver detalle</NavLink>
                
            </div>
        </div>
      </div>
    )
}

export default Item