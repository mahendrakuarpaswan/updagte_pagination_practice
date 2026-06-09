import logo from './logo.svg';
import './App.css';
import {React,Suspense,lazy} from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';

import Header from './header/Header';
const Home = lazy(()=>import('./components/Home'));
const About = lazy(()=>import('./components/About'));
const Contact = lazy(()=>import('./components/Contact'));
const Information = lazy(()=>import('./components/Information'));
const ProductDetails = lazy(()=>import('./components/Product-details'));
const ProductListing = lazy(()=>import('./components/Product-listing'));

function App() {


  return (
    <div className="App">
     
    <BrowserRouter>
     <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/information" element={<Information/>}/>
           <Route path="/productdetail/:id" element={<ProductDetails/>}/>
           <Route path='/productlisting' element={<ProductListing/>}/>
      </Routes>
        </Suspense>
    </BrowserRouter>      
    </div>
  );
}

export default App;
