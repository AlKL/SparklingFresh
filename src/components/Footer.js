import '../styles/footer.css';
import googleMapsIcon from '../images/googleMapsIcon.png'
import yelpIcon from '../images/yelpIcon.png'
import yellowPages from '../images/yellowPages.png'

// Get the icons to be the same size

const Footer = () => {
    return (
        <>
            <div className='footer sectionWrapper'>
                <div className='sectionWrapperWidth'>
                    <div className='footerContainer'>
                        <div className='leftFooter'>
                            <h1 className='seeYou'>See you soon!</h1>
                            <p></p>
                        </div>
                        <div className='rightFooter'>
                            <div className='iconContainer'>
                                <a href='https://goo.gl/maps/6nM4gUobZPumH27dA' target="_blank"><img className='icon' src={googleMapsIcon}></img></a>
                                <a href='https://www.yelp.ca/biz/sparkling-fresh-water-north-york?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)' target="_blank"><img className='icon' src={yelpIcon}></img></a>
                                <a href='https://www.yellowpages.ca/bus/Ontario/York/Sparkling-Fresh-Water/7785807.html' target="_blank"><img className='icon' src={yellowPages}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;