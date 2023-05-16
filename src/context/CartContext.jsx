import { createContext, useContext, useEffect, useState } from "react";

export const contextApp = createContext([])

export const useCartContext = ()=> useContext(contextApp)

export const CartContextProvider = ({children}) => {

      const [cartList, setCartList] = useState([])

      useEffect(()=>{
        const carritoLS = JSON.parse( localStorage.getItem('cartList')) ? [] :
        setCartList(carritoLS);
      }, []);

      useEffect(()=>{
        localStorage.setItem("cartList", JSON.stringify(cartList))
      }, [cartList])

    const agregarAlCarro = (nuevoProd)=>{

        const indiceProductos = cartList.findIndex(producto => producto.id === nuevoProd.id)
        if(indiceProductos === -1){
            setCartList([
                ...cartList,
                nuevoProd
            ])
        } else {
            cartList[indiceProductos].quantity += nuevoProd.quantity
            setCartList([ ...cartList  ])
        }

        
    }

    const cantidadTotal = () => cartList.reduce((cantidadTotal, objProducto) => cantidadTotal += objProducto.quantity ,0 )


    const vaciarCarrito= () =>{
        setCartList([])
    }

    const eliminarProducto = (id)=>{
        const carritoActual = cartList.filter(producto => producto.id !== id)
        setCartList(carritoActual)
    }

    return(
        <contextApp.Provider value={{
            cartList,     
            agregarAlCarro,
            vaciarCarrito,
            cantidadTotal,
            eliminarProducto
            
        }}>
            {children}
        </contextApp.Provider>
    )
}
