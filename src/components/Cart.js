import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useCarrito } from "./CartContext"
import Page from "./Page"
import { db } from "./firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore"
import List from "./List";


function Cart() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const {carrito, total, vaciarCarrito, eliminarProducto, precioTotal} = useCarrito();
  
  console.log(carrito);
  const nombreCompleto = `${nombre} ${apellido}`;

  const handleChangeNombre = (e) => {
    e.preventDefault()
    const input = e.target
    const value = input.value
    setNombre(value)
  }

  const handleChangeApellido = (e) => {
    const input = e.target
    const value = input.value
    setApellido(value)
  }

  const handleChangeEmail = (e) => {
    const input = e.target
    const value = input.value
    setEmail(value)
  }

  const handleChangeTelefono = (e) => {
    const input = e.target
    const value = input.value
    setTelefono(value)
  }

  const handleConfirm = () => {
    const orden= {
      items: carrito,
      total : 300,
      buyer : {
        name : nombreCompleto,
        phone : telefono,
        email : email,
      },
      date : serverTimestamp()
    }

    const ordersCollection = collection(db, "orders")
    const consulta = addDoc(ordersCollection, orden)

    consulta
      .then((res)=>{
        console.log(res);
      })
      .catch(error => {
        console.log(error)
      })
  }
    
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
                  <th scope="row">#</th>
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
        <button className="btn btn-outline-secondary" >Finalizar compra</button>


        <Page titulo="Carrito" subtitulo="Compra y vende">

            <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
            <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />
            <input type="text" placeholder="Email" onChange={handleChangeEmail} value={email} />
            <input type="text" placeholder="Telefono" onChange={handleChangeTelefono} value={telefono} />

            <button onClick={handleConfirm}>Guardar</button>

            <List usuarios={usuarios} />

        </Page>
      </div>
    )

  }

export default Cart
