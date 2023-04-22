import design from '../images/design.svg'
import '../styles/hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero gradient sectionWrapper">
                <div className="heroContainer sectionWrapperWidth">
                    <div className="heroLeftContainer">
                        <div className='topText'><p>Buy bottles and come back for refills!</p></div>
                        <div className='midText'><p>Stay hydrated with your friendly neighbourhood water supplier.</p></div>
                        <div className='btmText'><p>Local, affordable & water you can trust!</p></div>
                    </div>

                    <div className="heroRightContainer">
                        <div className="heroImageContainer">
                            <img className='heroImage' src={design}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;

{/* <p>Water that is</p> */ }
{/* <p>Local</p> */ }
{/* <p>Affordable</p> */ }
{/* <p>Trustworthy</p> */ }
{/* <p>Pure drinking water filtered by reverse osmosis</p> */ }
{/* <p>Total dissolved solids less than 10 parts per million</p> */ }