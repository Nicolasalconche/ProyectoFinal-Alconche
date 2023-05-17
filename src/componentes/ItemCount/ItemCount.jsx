import { useCount } from "../../Hooks/UseCount"

const ItemCount = ({initial=1, stock=10, min=5, onAdd }) => {

    const { contador, increment, decrement, reset} = useCount(1, 50, 1)

    function handleOnAdd(){
        onAdd(contador)
    }

  return (
    <div className="botones">
        <div >
            <h4>Unidades: {contador}</h4>
          <button onClick={increment} className="botones-2"> + </button>
          <button onClick={decrement}> - </button>
        </div>
        <div>
          <button className="btn btn-outline-dark" onClick={handleOnAdd}> Agregar al carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount