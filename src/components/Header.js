import '../styles/header.css';
import logo from '../images/logo.png'
import menu from '../images/menu.png'
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const locationPathname = useLocation().pathname;
    const home = locationPathname == '/' ? 'active' : ''
    const about = locationPathname == '/about' ? 'active' : ''
    const contact = locationPathname == '/contact' ? 'active' : ''

    useEffect(() => {
        // Disable scrolling when navOpen is true
        if (navOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }

        // Re-enable scrolling on unmount
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [navOpen]);

    const handleBurgerClick = () => {
        setNavOpen(!navOpen);
        console.log(navOpen)
    }


    return (
        <>
            <div className='sectionWrapper'>
                <div className="sectionWrapperWidth">





                    <div className='header'>



                        <div className='newContainer'>
                            <div className='logoContainer'>
                                <Link to='/'><img src={logo} alt='Icon with full five gallon water bottle.'></img></Link>
                            </div>

                            <ul className="headerMenu">
                                <li className={home}><Link to='/'>Home</Link></li>
                                <li className={about}><Link to='/about'>About</Link></li>
                                <li className={contact}><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>

                        <a href='tel:4162417866' onClick={handleBurgerClick}>
                            <div className='newBanner'>
                                <div className='newBannerTop'>
                                    <h3>Sparkling Fresh Water</h3>
                                </div>
                                <div className='newBannerMid'>
                                    <p>(416) 241-7866</p>
                                </div>
                            </div>
                        </a>

                        <div className='dropdownWrapper'>
                            <img src={menu} onClick={() => handleBurgerClick()}></img>

                            {navOpen && (
                                <div>
                                    <div className="respDropdownMenuContainer">
                                        <ul className="respHeaderMenu">
                                            <div className="longDivider"></div>
                                            <li>
                                                <Link className="link" to="/" onClick={handleBurgerClick}>
                                                    <span className="respLi">Home</span>
                                                </Link>
                                            </li>
                                            <div className="divider"></div>
                                            <li>
                                                <Link to="/about" onClick={handleBurgerClick}>
                                                    <span className="respLi">About</span>
                                                </Link>
                                            </li>
                                            <div className="divider"></div>
                                            <li>
                                                <Link to="/contact" onClick={handleBurgerClick}>
                                                    <span className="respLi">Contact</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='clickOffMenu' onClick={handleBurgerClick}></div>
                                    <div className="longDivider"></div>
                                </div>

                            )}

                        </div>





                    </div>




                </div>
            </div>
        </>
    )
}

export default Header;
