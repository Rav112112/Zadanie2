
import { stockData } from "../data";
import { useState } from "react";
import Product from '../components/Product';

function Products(props) {
    const {onAdd, cartItems, onRemove} = props;
    const [name, setName] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(99999);
    

    return (
        <section >
            
            <div className="form">
                <form>
                    <label>
                    <input className='nameSearch' type="text" value={name}onChange={(e) => setName(e.target.value)}/><br/>
                    Min Price: <input className='priceSearch' type="text" value={minPrice}onChange={(e) => setMinPrice(e.target.value)}/>
                    Max Price: <input className='priceSearch' type="text" value={maxPrice}onChange={(e) => setMaxPrice(e.target.value)}/>
                    </label>
                    
                </form>
            </div><br/>
            <div className='productsPart'>
                {stockData.map((product) => {
                    if (product.price > minPrice && product.price < maxPrice && product.name.toLowerCase().includes(name.toLowerCase())){
                        return (  <div>
                            <Product key={product.id} onAdd={onAdd} product={product}/>  
                        </div>
                                    
                            )} 
                }
                
                        
                )}
                
            </div>
            

        </section>


        
        
    );
  }
  
  export default Products;