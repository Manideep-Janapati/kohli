import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Veg from './Veg';
import NonVeg from './NonVeg';
import Home from './assets/Home';
import Cart from './Cart';
import PurchaseHistory from './PurchaseHistory';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import GoogleLoginComponent from './GoogleLoginComponent';


import './App.css';

function App() {
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total items in the cart

    return (
       
        <GoogleOAuthProvider clientId="366727048429-4d4lei7jbeq18r7g4jc549c2876cvpto.apps.googleusercontent.com">
      
            <Router>
                {/* Link to the Font Awesome CSS for icon styles */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

                {/* Main container for the full page */}
                <div className="full-page">
                    {/* Navigation bar container */}
                    <div className="navbar">
                        {/* Navigation links */}
                        <Link className="nav-link" to={'/home'}>
                            <i className="icon fas fa-home"></i> Home
                        </Link>
                        <Link className="nav-link" to={'/veg-items'}>
                            <i className="icon fas fa-carrot"></i> Veg Items
                        </Link>
                        <Link className="nav-link" to={'/non-veg-items'}>
                            <i className="icon fas fa-drumstick-bite"></i> Non-Veg Items
                        </Link>
                        <Link className="nav-link" to={'/cart-items'}>
                            <i className="icon fas fa-shopping-cart"></i> Cart {totalItems}
                        </Link>
                        <Link className="nav-link" to={'/purchasehistory'}>
                            <i className="icon fas fa-history"></i> Purchase History
                        </Link>
                        <Link className="nav-link" to={'/aboutus'}>
                            <i className="icon fas fa-info-circle"></i> About Us
                        </Link>
                        <Link className="nav-link" to={'/contactus'}>
                            <i className="icon fas fa-envelope"></i> Contact Us
                        </Link>
                    </div>
                </div>

                

                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/veg-items' element={<Veg />} />
                    <Route path='/non-veg-items' element={<NonVeg />} />
                    <Route path='/cart-items' element={<Cart />} />
                    <Route path='/purchasehistory' element={<PurchaseHistory />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contactus' element={<ContactUs />} />
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;
