import { useState } from "react";

function Nav(props) {

  const {cartItems, onAdd, onRemove, badge} = props;
  const [cart, setOpenCart] = useState(false);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalQty = cartItems.reduce((a, c) => a + c.qty, 0);
  

  function openCart(){
    if (cart == true){
      setOpenCart(false)
    }else {
      setOpenCart(true)
    }
  }

    return (
      <div className="navigationBar">
        <div className="menu" >
          <div onClick={openCart}>Shopping Cart <span className="badge">{totalQty}</span></div>
           {cart && cartItems.length === 0 && <div>Cart is empty</div>}
           {cart && cartItems.length > 0 && 
           <div>
             {cartItems.map((item) =>(
              <div key={item.id} className='row'>
                
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                  <button className='plusMinus' onClick={() => onAdd(item)}> + </button>
                  <button className='plusMinus' onClick={() => onRemove(item)}> - </button>
                  {item.qty} x {item.price} zł
                </div>
              </div>
            ))}
            <div className='row'>Total Price: {totalPrice} zł</div>
            </div>}
           
          

        </div>
             
      </div>
    );
  }
  
  export default Nav;