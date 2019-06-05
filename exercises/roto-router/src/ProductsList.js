import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Product from "./Product"
import list from "./products.json"


const ProductsList = () => {
// console.log('list: ', list[0].imgUrl)
 const productsMapped = list.map(product => <Link className="items" style={{backgroundImage: `url(${product.imgUrl})`}} key={product._id} to={`/products/${product._id}`}>{product.name}</Link> )
    
    return (
        <div className='product-list'>
            <h1>Products</h1>
            
            <div className='product-links'>
                {productsMapped} 
            </div>
            <Switch>
                  <Route path="/products/:_id" component={Product} />
            </Switch>
         
        </div>
            
    );
};

export default ProductsList