import React, { useEffect } from 'react';
import '../styles/location.css';
import Map from './Map';

const Location = () => {
    useEffect(() => {
        const today = new Date().getDay(); // Get the current day of the week (0-6, where Sunday is 0)
        const adjustedToday = (today + 6) % 7; // Adjust today's index to start with Monday (0-6)
        const days = document.querySelectorAll('.hoursList h3 span'); // Select all the day elements

        // Remove the class 'todayHighlight' from all days
        days.forEach(day => {
            day.classList.remove('todayHighlight');
        });

        // Add the class 'todayHighlight' to the current day
        days[adjustedToday].classList.add('todayHighlight');
    }, []);

    return (
        <>
            <div className="locationBody sectionWrapper">
                <div className="sectionWrapperWidth">
                    <div className="locationWrapper">
                        <div className="hoursContainer">
                            <div className="hoursList">

                                <div className='addressBack'>
                                    <h1>1722 Jane St.</h1>
                                    <h2>Jane & Lawrence</h2>
                                </div>

                                <h3>
                                    <span>Monday</span>
                                </h3>
                                <h4>10:00am - 6pm</h4>
                                <h3>
                                    <span>Tuesday</span>
                                </h3>
                                <h4>10:00am - 6pm</h4>
                                <h3>
                                    <span>Wednesday</span>
                                </h3>
                                <h4>Closed</h4>
                                <h3>
                                    <span>Thursday</span>
                                </h3>
                                <h4>10:00am - 6pm</h4>
                                <h3>
                                    <span>Friday</span>
                                </h3>
                                <h4>10:00am - 6pm</h4>
                                <h3>
                                    <span>Saturday</span>
                                </h3>
                                <h4>10:00am - 6pm</h4>
                                <h3>
                                    <span>Sunday</span>
                                </h3>
                                <h4>11:00am - 4pm</h4>
                            </div>
                        </div>
                        <div className="locationContainer">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;
