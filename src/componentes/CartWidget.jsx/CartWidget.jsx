import { useState } from 'react';
import { Link } from 'react-router-dom';



function CartWidget() {
    const [contador, setContador] = useState(0)
    return (
        <div className='carro'>
            <Link to='/carrito'>
                <button className="carrito">
                <h2 className='numero'> {contador}</h2>
                    <img src="assets/carrito.png" className="logo" alt="" />
                </button>
            </Link>
        </div>
        

    );
}

export default CartWidget;