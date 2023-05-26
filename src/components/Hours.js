import '../styles/hours.css';
import React, { useEffect } from 'react';

const Hours = () => {
    useEffect(() => {
        const today = new Date().getDay(); // Get the current day of the week (0-6, where Sunday is 0)
        const adjustedToday = (today + 6) % 7; // Adjust today's index to start with Monday (0-6)
        const days = document.querySelectorAll('.hcDayOfWeek h1 span'); // Select all the day elements

        // Remove the class 'todayHighlight' from all days
        days.forEach(day => {
            day.classList.remove('todayHighlight');
        });

        // Add the class 'todayHighlight' to the current day
        days[adjustedToday].classList.add('todayHighlight');
    }, []);

    return (
        <>
            <div className='hcHide'>
                <div className="sectionWrapper">
                    <div className="sectionWrapperWidth">
                        <div className="hcContainer">
                            <h3>Business hours</h3>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Monday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>10am - 6pm</h2>
                                </div>
                            </div>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Tuesday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>10am - 6pm</h2>
                                </div>
                            </div>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Wednesday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>Closed</h2>
                                </div>
                            </div>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Thursday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>10am - 6pm</h2>
                                </div>
                            </div>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Friday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>10am - 6pm</h2>
                                </div>
                            </div>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Saturday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>10am - 6pm</h2>
                                </div>
                            </div>

                            <div className='hcDayContainer'>
                                <div className='hcDayOfWeek'>
                                    <h1><span>Sunday</span></h1>
                                </div>
                                <div className='hcHours'>
                                    <h2>11am - 4pm</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hours;
