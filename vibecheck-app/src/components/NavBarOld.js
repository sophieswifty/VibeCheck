import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { Button } from './Button'
import { Link } from 'react-router-dom';

function NavBarOld() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMenu}>
                        VibeCheck
                             <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quiz' className='nav-links' onClick={closeMenu}>
                                Quiz
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/statistics' className='nav-links' onClick={closeMenu}>
                                Stats
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/manual' className='nav-links' onClick={closeMenu}>
                                Manual
                            </Link>
                        </li>
                    </ul>

                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Log Out
                            </Link>

                    {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}

                </div>
            </nav>
        </>
    )
}

export default NavBarOld

