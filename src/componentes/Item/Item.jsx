import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className="card w-25" >
                                    <img src={producto.imagen} className="card-img-top w-100" alt="mueble6" />
                                    <div className="card-body">
                                        <label>Nombre: {producto.tipo}</label>
                                        <label>Precio: {producto.precio}</label> <br />
                                        <label>Stock: {producto.stock}</label>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={ `/detalle/${producto.id}`}>
                                            <button className="btn btn-outline-dark">Detalles</button>
                                        </Link>
                                        
                                    </div>
                                    </div>
  )
}

export default Item