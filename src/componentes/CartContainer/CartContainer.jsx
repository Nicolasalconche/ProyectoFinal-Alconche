import {addDoc, collection, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartContainer = () => {

      const [id, setId] = useState(null)

      const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
      })
      const { cartList, vaciarCarrito, eliminarProducto} = useCartContext()
      const [total, setTotal] = useState(0)

      useEffect(()=>{
          const calculoTotal = cartList.reduce((total, productos) => total + (productos.quantity * productos.precio), 0)
          setTotal(calculoTotal)
        },[cartList])

      const handleSubmit = () => {
          event.preventDefault()
          const order ={
            buyer: formData,
            items: cartList.map(({id, tipo, precio})=>({id,tipo,precio})),
            total: total
          }

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
          .then(resp => setId(resp.id))
          .catch(err => console.log(err))
          .finally(() => console.log(''))
          console.log(order)
          vaciarCarrito()
      
      }

      const handleOnChange = (event)=>{
          setFormData({
            ...formData,
            [event.target.name] : event.target.value
          })
      }

      return (
    
          cartList.length === 0 ?
          <div className="cartel">
              {id && <h2 className="id">ID orden de compra es: {id}</h2>}
              <h2>No hay productos en el carrito</h2>
              <Link to='/'> Ir a ver productos</Link>
          </div>
          :
    <div className="compra">
        <div>
            { cartList.map(product => (
                    
                    <li key={product.id}>
                        <img src={product.imagen} alt='imagen' className="w-25" />
                        Nombre: {product.tipo} - Cantidad: {product.quantity}
                        <button onClick={()=> eliminarProducto(product.id)}> X </button>
                    </li>
                ))}
        </div> 
          <div className="form">
              <section >
                <form onSubmit={handleSubmit} className="formulario">
                  <h3>Datos de comprador:</h3>
                <input 
                    type="text"
                    name="name"
                    placeholder="Ingrese el nombre"
                    onChange={handleOnChange}
                    value={formData.name}
                />
                <input 
                    type="text"
                    name="phone"
                    placeholder="Ingrese el telefono"
                    onChange={handleOnChange}
                    value={formData.phone}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Ingrese el email"
                    onChange={handleOnChange}
                    value={formData.email}
                />    
                <button className="btn btn-dark">Terminar Compra</button> 
                <button className="btn btn-dark" onClick={vaciarCarrito}>Vaciar Carrito</button>   
              </form>
              </section>   
              
        
              <>
              <h3>Resumen compra:</h3>
              <h6>Total a pagar: ${total}</h6>
              </>    
        </div>  
    </div>
  )
}

export default CartContainer