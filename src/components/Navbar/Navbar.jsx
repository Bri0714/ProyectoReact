import React from 'react'
import "./Navbar.css"
import {BsCart4} from "react-icons/bs"
const Navbar = () => {
    return (
        <body>
            <nav className="container">
                <div>
                    <img src="./img/logo.jpg" className='logo' alt=" Logo Tienda de Deportes" />
                </div>
                <ul className='container2'>
                    <li className='container3'><a href="Home.html">Home</a></li>
                    <li className='container3'><a href="About.html">About</a></li>
                    <li className='container3'><a href="Products.html">Products</a></li>
                    <li className='container3'><a href="Contact.html">Contact</a></li>
                    <li className='container3'><a href="Stores.html">Stores</a></li>                    
                </ul>
                < BsCart4 className='cart' />
            </nav>
        </body>
    );
};

export default Navbar;
