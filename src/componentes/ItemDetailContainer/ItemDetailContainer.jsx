import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"



const ItemDetailContainer = () => {
   const [product, setProduct] = useState({})
   
   const {pid} = useParams()


    useEffect(()=>{
      const db = getFirestore()
      const queryDoc = doc(db, 'productos', pid)
  
      getDoc(queryDoc)
        .then(resp => setProduct({ id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=>console.log('al ultimo'))
    }, [])
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer