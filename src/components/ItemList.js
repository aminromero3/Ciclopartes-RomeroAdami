import React from 'react'
import Item from './Item'

function ItemList({productos}) {
    
    return ( 
            <div className="album py-5 bg-light">
                <div className="container-sm container-md">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                        {productos.map((producto) => {
                            return <Item key={producto.id} producto={producto}/>
                        })}
                    </div>
                </div>
            </div>
    )
}

export default ItemList