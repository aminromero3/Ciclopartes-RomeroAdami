import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import React from 'react'
import { db } from "./firebase"

   
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    
    useEffect(() => {

        const productosCollection = collection(db, "products")

        if(!category){
            const productos= getDocs(productosCollection)

            productos
                .then(snapshot => {
                    const productos = snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    })
                    setProductos(productos)
                    setLoading(false)
                })
        }else{
            const filtro = query(productosCollection, where("category","==",category))
            const consulta = getDocs(filtro)

            consulta
                .then(snapshot => {
                    const productos = snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }

                    })
                    setProductos(productos)
                    setLoading(false)
                })
        }
}, [category])


    return (
        loading ? <p>Cargando...</p> : <ItemList productos={productos}/>
    )
   
}
export default ItemListContainer
