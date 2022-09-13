import React from 'react'
import {Routes, Route } from 'react-router-dom'
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from './Cart';
import Checkout from './Checkout';
// import Nosotros from './Nosotros';
// import Contacto from './Contacto';
// import Ayuda from './Ayuda';


function Main() {
 
  return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/:category' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>} />
                {/* <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/contacto' element={<Contacto/>}/> 
                <Route path='/ayuda' element={<Ayuda/>}/> */}
            </Routes>
        </main>
  )
}

export default Main