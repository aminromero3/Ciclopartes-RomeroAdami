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
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to={'/'} className="btn btn-primary">volver a inicio</Link>
        <Link to={'/login'} className="btn btn-outline-secondary" >Finalizar compra</Link>
        
      </div>
    )

  }

export default Cart
