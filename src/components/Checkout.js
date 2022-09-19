import React from 'react'
import { useCarrito } from "./CartContext"
import { useState } from "react";
import { db } from "./firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore";

function Checkout() {

    const { carrito, cantidad,precioTotal} = useCarrito();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const nombreCompleto = `${nombre} ${apellido}`;

    const handleChangeNombre = (e) => {
        e.preventDefault()
        const input = e.target
        const value = input.value
        setNombre(value)
        console.log(nombre)
    }

    const handleChangeApellido = (e) => {
        const input = e.target
        const value = input.value
        setApellido(value)
        console.log(apellido)
    }

    const handleChangeEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
        console.log(email)
    }

    const handleChangeTelefono = (e) => {
        const input = e.target
        const value = input.value
        setTelefono(value)
    }

    const handleConfirm = () => {
        const orden= {
            items: carrito,
            total : precioTotal(),
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
            })
            .catch(error => {
            })
    }
    
    return (
        <div className='containerForm'>
            <div className='row g-5 '>
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text">Tu Carrito</span>
                        <span className="badge bg-primary rounded-pill">{cantidad}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {carrito.map((item) => {
                            return (
                                <li key={item} className="list-group-item d-flex justify-content-between lh-sm" >
                                    <img className='imageCart' src={item.image} alt={item.title} />
                                    <div>  
                                        <h6 className="my-0">{item.title}</h6>
                                        
                                    </div>
                                    <span className="text-muted">${item.price}</span>
                                </li>
                            )
                        })}
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total:</span>
                        <strong>${precioTotal()}</strong>
                    </li>
                    </ul>
                </div>
                <div className='col-md-6 col-lg-7'>                    
                        <div className='row g-3'>
                            <div className="form-group col-sm-6">
                                <label className='form-label'>Nombre</label>
                                <input type="text" className="form-control" id="nombre" aria-describedby="nombre" onChange={handleChangeNombre} value={nombre} placeholder="Nombre" required/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className='form-label'>Apellido</label>
                                <input type="text" className="form-control" id="apellido" aria-describedby="apellido" onChange={handleChangeApellido} value={apellido} placeholder="Apellido" required/>
                            </div>
                            <div className="form-group col-12">
                                <label className='form-label'>Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="email" onChange={handleChangeEmail} value={email} placeholder="Email" required/>
                            </div>
                            <div className="form-group col-12">
                                <label className='form-label'>Telefono</label>
                                <input type="text" className="form-control" id="telefono" aria-describedby="telefono" onChange={handleChangeTelefono} value={telefono} placeholder="Nombre" required/>
                            </div>                       
                            <button className=" checkoutButton" onClick={handleConfirm}>Finalizar compra</button>
                        </div>
                </div>
            </div>
        </div> 
  );
}

export default Checkout;