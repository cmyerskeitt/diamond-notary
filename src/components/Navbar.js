import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innderwidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }
    
    useEffect(() => {
        showButton();
      }, []);
      
    window.addEventListener('resize', showButton)


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Diamond Notary
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                                Reviews
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button}
                </div>
            </nav>
        </>
    )
}
export default Navbar