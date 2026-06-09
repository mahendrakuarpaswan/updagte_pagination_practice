import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row justify-between'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/information">Information</NavLink>
            <NavLink to="/productdetail">ProductDetails</NavLink>
             <NavLink to="/productlisting">ProductListing</NavLink>
    </div>
  )
}

export default Header
