import '../styles/services.css';
import tap from '../images/tap.png'
import bottle from '../images/bottle.png'
import water from '../images/water.png'

const Services = () => {
    return (
        <>
            <div className="services sectionWrapper">
                <div className='sectionWrapperWidth cardContainer'>
                    <div className='serviceCard animate__animated'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>
                                    <p>First Time?</p>
                                    <p>Come on in!</p>
                                </div>
                                <div className='midServiceCard'>
                                    <h3>Buy a full bottle of water to take home with you.</h3>
                                </div>
                                <div className='btmServiceCard animate__animated'>
                                    <h1>$14</h1>
                                </div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={bottle} alt='Five gallon bottle icon.'></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='serviceCard animate__animated'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>
                                    <p>Next time,</p>
                                    <p>just bring the bottle!</p>
                                </div>
                                <div className='midServiceCard'>
                                    <h3>You can bring the bottle back and get a full refill.</h3>
                                </div>
                                <div className='btmServiceCard animate__animated'>
                                    <h1>$4</h1>
                                </div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={tap} alt='Water pipe with water coming down icon.'></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='serviceCard animate__animated'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>
                                    <p>Just want an empty bottle? Sure!</p>
                                </div>
                                <div className='midServiceCard'>
                                    <h3>Bring it to fill water whenever you want.</h3>
                                </div>
                                <div className='btmServiceCard animate__animated'>
                                    <h1>$10</h1>
                                </div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={water} alt='Empty bottle icon.'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Services;