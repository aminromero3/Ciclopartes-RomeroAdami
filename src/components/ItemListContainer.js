import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"



const ItemListContainer = () => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category} = useParams()

    
    useEffect(() => {
        setLoading(true)
        fetch('./arrayProductos.json')
            .then(res => res.json())
            .then(res => {
                if(category){
                    setLoading(false)
                    setListProduct(res.filter(producto => producto.category === category))
                }else{
                    setLoading(false)
                    setListProduct(res)
                }
            })

}, [category])
    
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
                    <ItemList productos={listProduct} />
                </div>
            </div>
            </>
        )
    }
}
export default ItemListContainer
