import React from 'react'
import { Link} from 'react-router-dom'

const Item = ({ producto }) => {
  return (
      <div className="col">
        <div className="card shadow-sm">
            <div className="card-body">
                <h6>{producto.title}</h6>
                <img src={producto.image} alt="" />
                <p>{producto.description}</p>
                <p>${producto.price}</p>
                <Link to={`/item/${producto.id}`}  className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
      </div>
    )
}

export default Item