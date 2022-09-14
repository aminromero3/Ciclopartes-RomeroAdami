import React from 'react'
import { Link } from 'react-router-dom';
import { useCarrito } from "./CartContext"

function Cart() {

  const {carrito, cantidad ,vaciarCarrito, eliminarProducto, precioTotal} = useCarrito();
  
  return (
    <div className='tableCart'>
        <div className="col-md-8 col-lg-11 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Tu Carrito</span>
                </h4>
                <ul className="list-group mb-3">
                    {carrito.map((item) => {
                        return (
                            <li key={item} className="list-group-item d-flex justify-content-between lh-sm" >
                                <img className='imageCart' src={item.image} alt={item.title} />
                                <h6 className="tableCartItems">{item.title}</h6>
                                <small className="text-muted tableCartItems">{item.cantidad}</small>
                                <span className="text-muted tableCartItems">${item.price * item.cantidad}</span>
                                <button onClick={() => eliminarProducto(item.id)} className="btn btn-danger">Eliminar</button>
                            </li>
                        )
                    })}
                  <li className="list-group-item d-flex justify-content-between">
                      <span>Total:</span>
                      <strong className='price'>${precioTotal()}</strong>
                  </li>
                </ul>
            </div>
        {carrito.length > 0 ? <button onClick={vaciarCarrito} className="btn btn-danger buttonsCart">Vaciar Carrito</button> : null}
        <Link to={'/'} className="btn btn-primary buttonsCart">volver a inicio</Link>
        {/* Si el carrito esta vacio, no se mostrara finalizar compra */}
        {carrito.length > 0 ? <Link to={'/checkout'} className="btn btn-primary buttonsCart">Finalizar compra</Link> : null}
        
      </div>
    )

  }

export default Cart
