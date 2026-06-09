import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingProduts,setTrendingProduts] = useState([]);

  useEffect(()=>{
    fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>{

       const sliceTreding = data.products.slice(0,6);

       setTrendingProduts(sliceTreding);
    })
  },[]);

 

  return (
    <div>
          <h2>Home Page</h2>
          <span>Trending Products</span>
          <div className='flex flex-row'>
            {trendingProduts.map((product)=>{
              return <div className='flex flex-row' key={product.id}>

                <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className='flex flex-row'/>
                <h3>{product.title}</h3>
                </Link>
              </div>
            })}
          </div>
          <Link to="/products">
             <button className='w-96 p-10'>View All Product</button>
          </Link>
    </div>
  )
}

export default Home
