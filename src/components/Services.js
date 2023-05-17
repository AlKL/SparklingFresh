import '../styles/services.css';
import brownBear from '../images/brownBear.png'
import pandaBear from '../images/pandaBear.png'
import polarBear from '../images/polarBear.png'

const Services = () => {
    return (
        <>
            <div className="services sectionWrapper">
                <div className='cardContainer sectionWrapperWidth'>
                    <div className='serviceCard animate__animated'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>
                                    <p>First Time?</p>
                                    <p>Come on in!</p>
                                </div>
                                <div className='midServiceCard'>
                                    <h3>Buy a full bottle of water to take home.</h3>
                                </div>
                                <div className='btmServiceCard animate__animated'>
                                    <h1>$14</h1>
                                </div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={brownBear}></img>
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
                                    <img src={pandaBear}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='serviceCard animate__animated'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>
                                    <p>Just want an empty bottle?</p>
                                </div>
                                <div className='midServiceCard'>
                                    <h3>You can use it to fill water whenever you want.</h3>
                                </div>
                                <div className='btmServiceCard animate__animated'>
                                    <h1>$10</h1>
                                </div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={polarBear}></img>
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