import '../styles/header.css';
import logo from '../images/logo.png'
import newBanner from '../images/newBanner4.png'
import { Link, useLocation } from 'react-router-dom'

// Header contains
// 1. Logo
// 2. Router buttons to About, etc
// 3. Call button
// 4. Phone number
// - add store name somewhere Sparkling Fresh Water
// - dark mode

const Header = () => {
    const locationPathname = useLocation().pathname;

    const home = locationPathname == '/' ? 'active' : ''
    const about = locationPathname == '/about' ? 'active' : ''
    const contact = locationPathname == '/contact' ? 'active' : ''

    return (
        <>
            <div className='header sectionWrapper'>
                <div className="headerContainer sectionWrapperWidth">

                    <div className='newContainer'>
                        <div className='logoContainer'>
                            <Link to='/'><img src={logo}></img></Link>
                        </div>


                        <ul className="headerMenu">
                            <li className={home}><Link to='/'>Home</Link></li>
                            <li className={about}><Link to='/about'>About</Link></li>
                            <li className={contact}><Link to='/contact'>Contact</Link></li>
                        </ul>

                    </div>


                    <a href='tel:4162417866'>
                        <div className='newBanner'>

                            {/* <img src={newBanner}></img> */}
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
        </>
    )
}

export default Header;