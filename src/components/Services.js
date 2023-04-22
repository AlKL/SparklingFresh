import '../styles/services.css';
import brownBear from '../images/brownBear.png'
import pandaBear from '../images/pandaBear.png'
import polarBear from '../images/polarBear.png'

const Services = () => {
    return (
        <>

            <div className="services sectionWrapper">
                <div className='cardContainer sectionWrapperWidth'>



                    <div className='serviceCard'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>First Time?</div>
                                <div className='midServiceCard'>Buy a full bottle of water to take home for $14.</div>
                                <div className='btmServiceCard'>$14</div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={brownBear}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='serviceCard'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>Next time just bring the bottle!</div>
                                <div className='midServiceCard'>You can bring the bottle back and get a full refill for $4.</div>
                                <div className='btmServiceCard'>$4</div>
                            </div>
                            <div className='rightServiceCard'>
                                <div className='bearContainer'>
                                    <img src={pandaBear}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='serviceCard'>
                        <div className='serviceCardContainer'>
                            <div className='leftServiceCard'>
                                <div className='topServiceCard'>Just want an empty bottle?</div>
                                <div className='midServiceCard'>Only $10 and you can use it to fill water whenever you want.</div>
                                <div className='btmServiceCard'>$10</div>
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