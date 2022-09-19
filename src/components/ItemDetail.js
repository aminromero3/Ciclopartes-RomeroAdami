import React from 'react'
import { useCarrito } from './CartContext'
import ItemCount from './ItemCount'

function ItemDetail({item}) {

  const { agregarProducto } = useCarrito();

  const onAdd = (contador) => {
    item.cantidad = contador
    agregarProducto(item)
}

  return (
    <>
      <div className="sm:py-12 d-flex md:flex-row py-4 w-full flex-1 flex-col my-0 mx-auto detailContainer">
          <div className="w-full md:w-1/2 h-120 flex flex-1 bg-light hover:bg-light-200">
            <div className="py-16 p10 flex flex-1 justify-center items-center">
              <img src={item.image} alt="Inventory item" width="600" className="img-fluid" />
            </div>
          </div>
          <div className="pt-2 px-0 md:px-10 pb-8 dataDetail md:w-1/2">
              <h3 className="m-2 sm:mt-0 mt-2 text-5xl font-light leading-large">{item.title}</h3>
              <h4 className="text-2xl tracking-wide m-2 sm:py-8 py-6">${item.price}</h4>
              <div className="my-3">
                <ItemCount stock={item.stock} onAdd={onAdd} />
              </div>
          </div>
      </div>
      <div className='descriptionContainerDetail'>
        <p className="m-2 textDetail">{item.description}</p>
      </div>
    </>
  );
}

export default ItemDetail
