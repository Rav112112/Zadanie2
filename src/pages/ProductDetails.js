import { useLocation } from 'react-router-dom'

function ProductDetails(props) {
    const location = useLocation()
    const { from } = location.state
    return (
      <div className='productDetails'>
        
        <div className='productImage'>
          <img src={from.image} alt="Logo" />
        </div>
        <div className='productDescryption'>
          <h1>{from.name}</h1>
          <h2>Price: {from.price} zł</h2>
          <p>{from.descryption}</p>
        </div>
        
      </div>
      

    );
  }
  
  export default ProductDetails;