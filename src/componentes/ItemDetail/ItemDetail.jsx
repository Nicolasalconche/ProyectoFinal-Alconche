import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

  const [tieneCantidad, actualizarCantidad] = useState(false) 
  const { agregarAlCarro } =  useCartContext()

  const onAdd = (cantidad) =>{
      console.log(cantidad)
      agregarAlCarro({ ...product, quantity: cantidad})
      actualizarCantidad(true)
  }
 
  return (
    <div className="tarjeta">
      <div className="contenido">
          <img src={product.imagen} alt="mueble"  />
          <h3>Nombre: {product.tipo}</h3>
          <h4>Precio: {product.precio}</h4>
          <h4>Modelo: {product.modelo}</h4>
      </div>
      <div className="card-footer">
        {tieneCantidad ? 
          <>
          <Link to='/carrito'> <button>Ir al carrito</button> </Link>
          <Link to='/'> <button>Seguir comprando</button> </Link>
          </>
        : <ItemCount initial={1} stock={10} onAdd={onAdd}/> 
        }
        
      </div>
    </div>
  )
}

export default ItemDetail