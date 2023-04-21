import './header.css';
import logo from '../images/logo.png'

// Header contains
// 1. Logo
// 2. Router buttons to About, etc
// 3. Call button
//

const Header = () => {
    return (
        <>
            <div className='header sectionWrapper'>
                <div className="headerContainer sectionWrapperWidth">


                    <div className='logoContainer'>
                        <img src={logo}></img>
                    </div>

                    <ul className="headerMenu">
                        <li>About</li>
                        <li>Products</li>
                        <li>Location</li>
                        <li>Contact</li>
                    </ul>




                </div>
            </div>
        </>
    )
}

export default Header;