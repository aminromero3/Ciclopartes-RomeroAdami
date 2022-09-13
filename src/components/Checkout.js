import React from 'react'
import { useCarrito } from "./CartContext"

function Checkout() {

    const { 
        carrito, 
        cantidad,
        nombre, 
        apellido, 
        email, 
        telefono, 
        precioTotal,
        handleChangeNombre, 
        handleChangeApellido, 
        handleChangeEmail, 
        handleChangeTelefono, 
        handleConfirm,
    } = useCarrito();

  return (
    <div className='containerForm'>
        <div className='row g-5'>
            {/* cart */}
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Tu Carrito</span>
                    <span className="badge bg-primary rounded-pill">{cantidad}</span>
                </h4>
                <ul className="list-group mb-3">
                    {carrito.map((item) => {
                        return (
                            <li key={item} className="list-group-item d-flex justify-content-between lh-sm" >
                                <img className='imageCart' src={item.image} alt={item.title} />
                                <div>  
                                    <h6 className="my-0">{item.title}</h6>
                                    <small className="text-muted">{item.description}</small>
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
            {/* form */}
            <div className='col-md-7 col-lg-8'>
                <form className='needs-validation' noValidate>
                    <div className='row g-3'>
                        <div className="form-group col-sm-6">
                            <label className='form-label'>Nombre</label>
                            <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" onChange={handleChangeNombre} value={nombre} placeholder="Nombre" required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label className='form-label'>Apellido</label>
                            <input type="text" className="form-control" id="apellido" aria-describedby="emailHelp" onChange={handleChangeApellido} value={apellido} placeholder="Apellido" required/>
                        </div>
                        <div className="form-group col-12">
                            <label className='form-label'>Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChangeEmail} value={email} placeholder="Email" required/>
                        </div>
                        <div className="form-group col-12">
                            <label className='form-label'>Telefono</label>
                            <input type="text" className="form-control" id="telefono" aria-describedby="emailHelp" onChange={handleChangeTelefono} value={telefono} placeholder="Nombre" required/>
                        </div>                       
                        <button className="btn btn-primary" onClick={handleConfirm}>Finalizar compra</button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
  );
}

export default Checkout;