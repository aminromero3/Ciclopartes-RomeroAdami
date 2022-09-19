import React from 'react'
import {Routes, Route } from 'react-router-dom'
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';
import Nosotros from './Nosotros.js';
import Ayuda from './Ayuda';


function Main() {
 
  return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/:category' element={<ItemListContainer/>}/>
                <Route path='/products' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/ayuda' element={<Ayuda/>}/>
            </Routes>
        </main>
  )
}

export default Main