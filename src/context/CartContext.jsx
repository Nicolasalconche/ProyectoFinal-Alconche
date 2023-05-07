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
        setCartList([
            ...cartList,
            nuevoProd
            
        ])
    }


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
            eliminarProducto
            
        }}>
            {children}
        </contextApp.Provider>
    )
}
