import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { Filter } from "../renderProps/Filter"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()
   
    useEffect(()=>{

        if (cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')

            const queryFilter = query(queryCollection, where('modelo', '==', cid))
    
            getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
            .catch(err => console.log(err))
            .finally(()=>console.log('al ultimo'))          
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')

    
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
            .catch(err => console.log(err))
            .finally(()=>console.log('al ultimo'))           
        }
    }, [cid])
    
        
     const hanldePoductsFiltered =  ( { filterState, handleFilterChange }) => (
        
        
        <div >
            <div className="buscador">
                <h4>Buscar Producto:
                <input type="text" value={filterState} onChange={handleFilterChange} />
                </h4>
                <h4>{filterState}</h4>
            </div>
           <div className="body">
            <ItemList
                productos = {
                    filterState === '' ?
                        productos
                    :
                        productos.filter( producto => producto.tipo.toLowerCase().includes(filterState.toLowerCase()) )
                }
            />
            </div> 
        </div>
        
    )
   
    return (
        <>
            { productos.length !== 0 ?
                    <Filter>
                       { hanldePoductsFiltered }                   
                    </Filter>
                :
                <div className="cargador">
                <div className="loader"></div>
                </div>
            
            }
            <div>
        </div>

        </>
    )
}

export default ItemListContainer