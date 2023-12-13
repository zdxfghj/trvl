import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=> {
        if(window.innerWidth<=960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className='nav-link' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                            Sing Up
                        </Link>
                    </li>
                     
                     {button && <Button buttonStyle='btn--outline'>SING UP</Button>}
                   
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;