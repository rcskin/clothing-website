import React from "react";
//import images for products
import Jeans from "../images/jeans.jpeg";
import Vans from "../images/Vans.jpeg";
import Jacket from "../images/jean-jacket.jpeg";
import Tee from "../images/whiteT.jpeg";

//create products component
function Products () {
    const productList = [
        {id:1, name:"Jeans", img: Jeans, price: "$25" },
        {id:2, name:"Vans", img: Vans, price: "$40" },
        {id:3, name:"Denim Jacket", img: Jacket, price: "$60"},
        {id:4, name:"White Tee", img: Tee, price: "$10"},
    ];
    //use map method and key to display products.
    return (
        <div className = 'Products'>
            <h2>Latest Products</h2>
            {productList.map((props) => (
                <div key={props.id}>
                    <h3>{props.name}</h3>
                    <img className="product-Img" src={props.img} alt={props.name} />
                    <p>{props.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;