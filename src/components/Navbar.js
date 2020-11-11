import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    const [ click, setClick ] = useState(true);
    const [ button, setButton ] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(true);
    }
    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true);
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-bars' : 'fas fa-times'} />
                    </div>
                    <ul className={click ? 'nav-menu' : 'nav-menu active'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                            </li>  
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                            </li>
                            <li>
                                <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
                            </li>
                    </ul>
                    { button && <Button buttonStyle='btn-outline'>SIGN UP</Button> }
                </div>
            </nav> 
        </>
    )
}

export default Navbar;
