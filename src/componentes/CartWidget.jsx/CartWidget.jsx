import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';



function CartWidget() {
    const {cantidadTotal} = useCartContext()
    return (
        <div className='carro'>
            <Link to='/carrito'>
                <button className="carrito">
                <h2 className='numero'> {cantidadTotal()}</h2>
                    <img src="assets/carrito.png" className="logo" alt="" />
                </button>
            </Link>
        </div>
        

    );
}

export default CartWidget;