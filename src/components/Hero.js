import design from '../images/design.svg'
import '../styles/hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero gradient sectionWrapper">
                <div className="heroContainer sectionWrapperWidth">
                    <div className="heroLeftContainer">
                        <div className='topText'><p>Buy bottles and come back for refills!</p></div>
                        <div className='midText'><h1>Stay hydrated with your friendly neighbourhood water supplier.</h1></div>
                        <div className='btmText'><h4>Local, affordable & water you can trust!</h4></div>
                    </div>

                    <div className="heroRightContainer">
                        <div className="heroImageContainer">
                            <img className='heroImage animate__animated animate__bounce' src={design}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
