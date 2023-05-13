import '../styles/location.css';
import Map from './Map'

// Fix loading... map visual
// Highlight which day it is using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

const Location = () => {
    return (
        <>
            {/* <div className='locationAllWrap sectionWrapper'>
                <div className='locationTitle sectionWrapperWidth'>
                    <h1>1722 Jane Street</h1>
                </div>
            </div> */}

            <div className='locationBody sectionWrapper'>
                <div className='sectionWrapperWidth'>
                    <div className='locationWrapper'>


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
                        <div className='locationContainer'>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;