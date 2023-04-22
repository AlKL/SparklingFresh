import '../styles/header.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

// Header contains
// 1. Logo
// 2. Router buttons to About, etc
// 3. Call button
// - add store name somewhere Sparkling Fresh Water

const Header = () => {
    return (
        <>
            <div className='header sectionWrapper'>
                <div className="headerContainer sectionWrapperWidth">
                    <div className='logoContainer'>
                        <Link to='/'><img src={logo}></img></Link>
                    </div>
                    <ul className="headerMenu">
                        <li><Link to='/about'>About</Link></li>
                        <li>Products</li>
                        <li>Our Process</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;