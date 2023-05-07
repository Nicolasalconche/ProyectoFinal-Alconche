import { useCount } from "../../Hooks/UseCount"

const ItemCount = ({initial=1, stock=10, min=5, onAdd }) => {

    const { contador, increment, decrement, reset} = useCount(1, 50, 1)

    function handleOnAdd(){
        onAdd(contador)
    }

  return (
    <div>
        <h2>Unidades: {contador}</h2>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        <button className="btn btn-outline-dark" onClick={handleOnAdd}> Agregar al carrito</button>
    </div>
  )
}

export default ItemCount