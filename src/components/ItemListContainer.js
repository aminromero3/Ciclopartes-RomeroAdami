import { useEffect, useState } from "react"
import ItemList from "./ItemList"


const productosIniciales = [
    {
        id: 1,
        categoriaId: "ruta",
        nombre: "Bici de Ruta",
        precio: 2500,
        imagen: "./bici1.jpg",
    },
    {
        id: 2,
        categoriaId: "paseo",
        nombre: "Bici de Paseo",
        precio: 1200,
        imagen: "./bici2.jpg",
    },
]


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        console.log("Arranca el pedido")

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 1000)
        })
        pedido.then((productos) => {
            setProductos(productos)
            setLoading(false)
        })
        pedido.catch((error) => {
            console.log("Termino el pedido mal"+error)
            setLoading(false)
        })
        pedido.finally(() => {
            console.log("Termino el pedido")
            setLoading(false)
        })
    }, [])
    if (loading) {
        return (
            <>
                <p>Cargando...</p>
                
            </>
        )
    } else {
        return (
            <>
             <div className="album py-5 bg-light">
                <div className="">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3"></div>
                    <ItemList productos={productos} />
                </div>
            </div>
            </>
        )
 }
}
 export default ItemListContainer