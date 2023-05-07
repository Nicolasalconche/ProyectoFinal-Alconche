import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'


const CartContainer = () => {
  
  const { cartList, vaciarCarrito, eliminarProducto} = useCartContext()

  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const calculoTotal = cartList.reduce((total, productos) => total + (productos.quantity * productos.precio), 0)
    setTotal(calculoTotal)
  },[cartList])

  const handleSubmit = () =>{
    const order ={
      buyer:{name:'', phone: '', email: ''},
      items: cartList.map(({id, tipo, precio})=>({id,tipo,precio}))
    }
    console.log(order)
    
  }

  return (
    <>
    <div>
        { cartList.map(product => (
                
                <li key={product.id}>
                    <img src={product.imagen} alt='imagen' className="w-25" />
                    Nombre: {product.tipo} - Cantidad: {product.quantity}
                    <button onClick={()=> eliminarProducto(product.id)}> X </button>
                </li>
            ))}
            <button onClick={handleSubmit}>Terminar Compra</button>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>    
    </div>
    <div>
        { total > 0 ? (
          <>
          <h2>Resumen compra:</h2>
          <p>Total a pagar: ${total}</p>
          </>
        ): (
          <p>No hay productos en el carrito</p>
        )
         }
        
    </div>
    
    </>
  )
}

export default CartContainer