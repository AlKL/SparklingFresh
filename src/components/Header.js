import '../styles/header.css';
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const locationPathname = useLocation().pathname;
    const home = locationPathname == '/' ? 'active' : ''
    const about = locationPathname == '/about' ? 'active' : ''
    const contact = locationPathname == '/contact' ? 'active' : ''

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
                        <a href='tel:4162417866'>
                            <div className='newBanner'>
                                <div className='newBannerTop'>
                                    <h3>Sparkling Fresh Water</h3>
                                </div>
                                <div className='newBannerMid'>
                                    <p>(416) 241-7866</p>
                                </div>
                            </div>
                        </a>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Header;
