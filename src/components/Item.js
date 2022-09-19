import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
      <div className="col">
        <div className="card shadow-sm">
          <img src={producto.image} alt={producto.title} className='bd-placeholder-img img-fluid card-img-top' width='100%'/>
          <div className='m-3'>
            <h6>{producto.title}</h6>
            <strong>${producto.price}</strong>
          </div> 
          <div className='btn-group'>
            <NavLink to={`/item/${producto.id}`} className="btn m-4 btn-dark">Ver detalle</NavLink>
          </div>
        </div>
      </div>
    )
}

export default Item