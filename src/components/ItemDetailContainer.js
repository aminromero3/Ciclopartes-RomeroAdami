import React from 'react'
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'


const getItem = () => { 
    /* Esta función debe retornar la promesa que resuelva con delay */ 
    const Detail = new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                nombre: "Bici de Ruta",
                precio: 2500,
                imagen: "./bici1.jpg",
                descripcion: "Bici de ruta de montaña"
            })
        } , 1000)
    })
    Detail.then((item) => {
        return item
    }).catch((error) => {
        console.log("Termino el pedido mal: "+error)
    }).finally(() => {
        console.log("Termino el pedido")
    }, [])
    return Detail
}

function ItemDetailContainer () {

    // Implementar mock invocando a getItem() y utilizando el resolver then
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const detail = new Promise((res, rej) => {
            setTimeout(() => {
                res(getItem())
            }, 2000)
        }).then((item) => {
            setItem(item)
            setLoading(false)
        }).catch((error) => {
            console.log("Termino el pedido mal: "+error)
            setLoading(false)
        }).finally(() => {
            console.log("Termino el pedido"+detail)
            setLoading(false)
        })
    } , [])
    if (loading) {
        return (
            <>
                <ItemDetail item={item} />
            </>
        )
    } else {
        return (
            <>
                <ItemDetail item={item} />
            </>
        )
    }   
}

export default ItemDetailContainer
export { getItem }