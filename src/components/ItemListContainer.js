import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

import { db } from "./firebase"

   
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    console.log("categoria:"+category)
    
    useEffect(() => {

        const productosCollection = collection(db, "products")

        if(!category){
            const productos= getDocs(productosCollection)

            productos
                .then(snapshot => {
                    // objeto con ID
                    // console.log(snapshot.docs)
                    // objeto completo sin ID
                    // console.log(snapshot.docs.map(doc => doc.data()))
                    // objeto completo con ID
                    console.log(snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }

                    }))
                    setProductos(productos)
                    // setLoading(false)
                })
                .catch(err=>{
                    console.log(err)
                })

        }else{
            const filtro = query(productosCollection, where("category","==",category))
            const consulta = getDocs(filtro)

            
            consulta
                .then(snapshot => {
                    // objeto con ID
                    // console.log(snapshot.docs)
                    // objeto completo sin ID
                    // console.log(snapshot.docs.map(doc => doc.data()))
                    // objeto completo con ID
                    console.log(snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }

                    }))
                    setProductos(productos)
                    // setLoading(false)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
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
                    <ItemList productos={productos} />
                </div>
            </div>
            </>
        )
    }
}
export default ItemListContainer
