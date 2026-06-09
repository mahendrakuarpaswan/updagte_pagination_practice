import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductListing = () => {

const [products,setProducts] = useState([]);


useEffect(()=>{
   const res = fetch("https://dummyjson.com/products").then((res)=>res.json()).then((dta)=>{
      setProducts(dta.products);
   });

 },[]);

  return (
    <div>
           <h2>ProductListing!</h2>
           <div className='flex flex-row'>
            {products.map((product,index)=>{
                return (
                    <div className='flex flex-row' key={product.id}>
                     <Link to={`/products${product.id}`}>
                      <img src={product.thumbnail} alt={product.title}/>
                      <h3>{product.title}</h3>
                       <h3>{product.price}</h3>
                     </Link>
                    </div>
                )
            })}
           </div>
    </div>
  )
}

export default ProductListing
