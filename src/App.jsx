import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider} from './context/CartContext'
import CartContainer from './componentes/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'





function App() {
  
  return (
    <BrowserRouter>
    <CartContextProvider>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/modelo/:cid' element={<ItemListContainer/>}/>
          <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<CartContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
