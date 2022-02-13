import { Link } from "react-router-dom";



function Product(props) {
    const {onAdd, product, cartItems} = props;
    

    

    return (        
            <div key={product.id} className='product'>
                <Link to='/productdetails' state={{ from: product }} ><h2>{product.name}</h2></Link>
                <h2>Price: {product.price} zł</h2>
                <button className='btn' onClick={() => onAdd(product)} >Add to cart</button>
                
            </div>                                                        
    );
  }
  
  export default Product;