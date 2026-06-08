import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [products,setProducts] = useState([]);
const [page,setPage] = useState(1);

const fetchData  = async() =>{
      const res = await  fetch("https://dummyjson.com/products?limit=100");
      const data =  await res.json();
      if(data && data.products){
        setProducts(data.products);
      }     
}

useEffect(()=>{
   fetchData()
},[]);

 const selectPageHandler = (selectpage) =>{
    if(selectpage>=1 && selectpage<=products.length/10 && selectpage !==page ){
       setPage(selectpage);
    }
    
  }





  return (
    <div className="App">
       {products.length>0 && <div className='show_allImages'>
            {products.slice(page*10 - 10,page*10).map((pro,index)=>{
           
             return (
                <span className='products__single' key={pro.id}>
   
                    <img src={pro.thumbnail} alt={pro. title}/>
                    <span>{pro. title}</span>
                    
                </span>
        )
       })}
        </div>}
  
       {products.length>0 && <div className='pagination'>
          
              <span 
                onClick={()=>setPage(page-1)}
                className={page>1?"":"pagination__disable"}
                >
                Previous
              </span>
                
                  {[...Array(products.length/10)].map((_,i)=>{
                    return (
                            
                            <span onClick={()=>selectPageHandler(i+1)} >{i+1}</span>
                    )
                  })}

                <span 
                 onClick={()=>selectPageHandler(page+1)}
                 className={page<products.length/10?"":"pagination__disable"}

                >
                   next
                </span>
            
        </div>}

    </div>
  );
}

export default App;
