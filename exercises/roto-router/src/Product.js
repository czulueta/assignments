import React from "react"
import products from "./products.json"
import ProductsList from "./ProductsList"

const Product = (props) => {
    let {_id} = props.match.params
    const product = products.find(product => product._id === _id)
    let {name, price, description, imgUrl} = product
return (
    <div className="popProduct" style={{backgroundImage: `url(${imgUrl})`}}>
        <div className='product' >
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <h3>{description}</h3>
        </div>
    </div>
    );
};

    export default Product