import React from 'react'
import './Navbar.css'
import logo from '../img/logo_2.png'; 
export default function customNavbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
<div className="n-name"><a href="index.html"><img  className='image_logo' src={logo} alt="Example" /></a>
</div>
        </div>
<div className="n-right">
<div className="n-list">
<ul>
<li>Home</li>
    <li>News</li>
    <li>Blog</li>
    <li>Contact Us</li>
</ul>
</div>
{/* <button className='button'>
    contact us
</button> */}
        </div>
    </div>
  )
}
