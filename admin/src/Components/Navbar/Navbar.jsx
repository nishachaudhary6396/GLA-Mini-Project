import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo01.jpg'
import navProfile from '../../assets/logo_big.png'

const Navbar = () =>{
    return (
        <div className='navbar'>
            <img src={navlogo} alt="" className="nav-logo"/>
            <img src={navProfile} alt="" className="nav-profile"/>

        </div>
       
    )
}

export default Navbar