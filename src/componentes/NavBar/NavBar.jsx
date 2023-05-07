import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget.jsx/CartWidget';

function Navbar() {
      
        return (
            <div>
                <nav className='navbar'>
               <a href=""><img src="assets/logo.png" className="logo2" alt="logo" /></a>
               <ul className='lista'>
                <li className='list'>
                  <Link to='/' className='color'> Inicio </Link>
                </li>
                <li className='list'>
                   <Link to='/modelo/muebles' className='color'>Alacenas</Link> 
                </li>
                <li className='list'>
                   <Link to='/modelo/cajoneras' className='color'>Cajoneras</Link> 
                </li>
               </ul>   
               <CartWidget/>
               </nav>
            </div>
        );
}

export default Navbar;