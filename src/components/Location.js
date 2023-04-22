import '../styles/location.css';
import Map from './Map'

const Location = () => {
    return (
        <>
            <div className='sectionWrapper'>
                <div className='sectionWrapperWidth'>
                    <h1>Location And Hours</h1>
                </div>
            </div>



            <div className='locationBody sectionWrapper'>
                <div className='sectionWrapperWidth'>
                    <div className='locationWrapper'>


                        <div className='locationContainer'>
                            <Map />
                        </div>
                        <div className='hoursContainer'>
                            <div className='hoursList'>
                                <h2>Monday</h2>
                                <h3>10:00am - 6pm</h3>
                                <h2>Tuesday</h2>
                                <h3>10:00am - 6pm</h3>
                                <h2>Wednesday</h2>
                                <h3>Closed</h3>
                                <h2>Thursday</h2>
                                <h3>10:00am - 6pm</h3>
                                <h2>Friday</h2>
                                <h3>10:00am - 6pm</h3>
                                <h2>Saturday</h2>
                                <h3>10:00am - 6pm</h3>
                                <h2>Sunday</h2>
                                <h3>11:00am - 4pm</h3>
                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </>
    )
}

export default Location;