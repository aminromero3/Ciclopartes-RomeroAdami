import React from 'react'
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


function ItemDetailContainer () {
    const [product, setProduct] = useState({})
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    
    useEffect(() => {
        setLoading(true)
        fetch("./arrayProductos.json")
            .then(res => {
                setLoading(false)
                setItem(res.find(item => item.id === parseInt(id)))
        }).catch(err => {
            console.log("erorr:"+err)
        }).finally(() => {
            console.log("Finalizo el pedido")
        })
}, [])
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
