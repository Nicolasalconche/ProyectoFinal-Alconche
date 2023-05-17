import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

  const [tieneCantidad, actualizarCantidad] = useState(false) 
  const { agregarAlCarro } =  useCartContext()

  const onAdd = (cantidad) =>{
      agregarAlCarro({ ...product, quantity: cantidad})
      actualizarCantidad(true)
  }
 
  return (
    <div className="tarjeta">
          <img src={product.imagen} className="mueble" alt="mueble"/>
          <div className="contenido2">
                <section>
                  <h5>Nombre: {product.tipo}</h5>
                  <h5>Precio: {product.precio}</h5>
                  <h5>Modelo: {product.modelo}</h5>
                </section>
                <div className="card-footer">
                    {tieneCantidad ? 
                      <>
                      <Link to='/carrito'> <button className="btn btn-outline-dark">Ir al carrito</button> </Link>
                      <Link to='/'> <button className="btn btn-outline-dark">Seguir comprando</button> </Link>
                      </>
                    : <ItemCount initial={1} stock={10} onAdd={onAdd}/> 
                    }      
                </div>
          </div>
    </div>
  )
}

export default ItemDetail