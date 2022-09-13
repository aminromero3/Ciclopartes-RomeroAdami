import React from 'react'
import { Link } from 'react-router-dom';
import { useCarrito } from "./CartContext"

function Cart() {

  const {carrito, vaciarCarrito, eliminarProducto, precioTotal} = useCarrito();
  
  return (
    <div>
      <table id="tablaCarrito" className="table table-striped m-5">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Accion</th>
              </tr>
        </thead>
        {carrito.map((item) => {
          return (
            <tbody key={item} id="bodyTabla">
              <tr>
                  <th scope="row"></th>
                  <td>{item.title}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.price * item.cantidad}</td>
                  <td><button onClick={() => eliminarProducto(item.id)} className="btn btn-danger">Eliminar</button></td>
              </tr>
            </tbody>
          )
        })}        
        </table>

        <p>Total: {precioTotal()}</p>
        {carrito.length > 0 ? <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button> : null}
        <Link to={'/'} className="btn btn-primary">volver a inicio</Link>
        {/* Si el carrito esta vacio, no se mostrara finalizar compra */}
        {carrito.length > 0 ? <Link to={'/checkout'} className="btn btn-primary">Finalizar compra</Link> : null}
        
      </div>
    )

  }

export default Cart
