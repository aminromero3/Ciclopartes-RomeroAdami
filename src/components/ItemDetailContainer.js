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
        
        const productosCollection = collection(db, "products") //CollectionReference
        const referencia = doc(productosCollection,id) //DocumentReference
        const consulta = getDoc(referencia) //Promise

        consulta
            .then((res)=>{
                const producto = res.data()
                setItem(producto)
                console.log(res.data())
            })
            .catch((err)=>{
                console.log("error: "+err)
            })
}, [id])
   
    return (
        <>
            <ItemDetail item={item} />
        </>
    ) 
}

export default ItemDetailContainer