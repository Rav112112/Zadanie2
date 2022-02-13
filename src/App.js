import { Route, Routes} from 'react-router-dom';

import NavPage from './pages/Nav';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import { useState } from 'react';
import { stockData } from "./data";

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  function onAdd(product) {
  const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x 
        )
      );
    }else {
      setCartItems([ ...cartItems, { id: product.id, name: product.name, price: product.price, qty: 1}]);
    }

  }
  function onRemove(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <NavPage onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<ProductsPage onAdd={onAdd} onRemove={onRemove}/>} />
        <Route path='/productdetails' element={<ProductDetailsPage onAdd={onAdd} cartItems={cartItems}/>} />
      </Routes>
      
    </div>
  );
}

export default App;

