import React from 'react'
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDoc, doc } from "firebase/firestore"

function ItemDetailContainer () {
    const [item, setItem] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        
        const productosCollection = collection(db, "products") 
        const referencia = doc(productosCollection,id) 
        const consulta = getDoc(referencia) 

        consulta
            .then((res)=>{
                const producto = res.data()
                setItem(producto)
            })
            
}, [id])
   
    return (
        <>
            <ItemDetail item={item} />
        </>
    ) 
}

export default ItemDetailContainer